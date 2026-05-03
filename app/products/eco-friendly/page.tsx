import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Eco-Friendly Sunglasses Manufacturer | Sustainable Eyewear Wholesale - EyeView',
  description: 'Sustainable sunglasses manufacturer offering eco-friendly eyewear wholesale. Recycled ocean plastic, bamboo temples, bio-acetate frames. MOQ 200pcs. Green certifications available.',
  keywords: 'sustainable sunglasses manufacturer, eco-friendly sunglasses wholesale, recycled sunglasses, bamboo sunglasses, bio-acetate sunglasses, green eyewear factory, ocean plastic sunglasses',
  openGraph: {
    title: 'Eco-Friendly Sunglasses Manufacturer | Sustainable Eyewear Wholesale - EyeView',
    description: 'Sustainable sunglasses manufacturer. Recycled ocean plastic, bamboo, bio-acetate frames. MOQ 200pcs. Factory direct pricing with green certifications.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/products/eco-friendly',
  },
}

const ecoFaqs = [
  {
    question: 'What sustainable materials do you offer for sunglasses manufacturing?',
    answer: 'We work with four main eco-friendly materials right now. First is recycled ocean plastic (rPET) — we source post-consumer plastic collected from coastal cleanups in Southeast Asia and process it into injection-moldable pellets. Second is bamboo, which we use for temples (the arms of the frame). Third is bio-acetate, specifically Eastman Acetate Renew, which replaces 60% of fossil-based raw material with certified recycled content via molecular recycling. And fourth is recycled aluminum alloy for metal frame components. Each material has different costs, aesthetics, and environmental claims, so we help you pick the right one for your brand story and price point.',
  },
  {
    question: 'What certifications can you provide for eco-friendly sunglasses?',
    answer: 'This depends on what your market requires and what claims you want to make. For the sunglasses themselves, we provide CE (EN ISO 12312-1), FDA compliance, and UV400 testing — same as our standard lines. For sustainability claims specifically, bio-acetate from Eastman comes with ISCC PLUS chain-of-custody certification. Our bamboo suppliers hold FSC certification. For recycled ocean plastic, we can provide documentation from our collection partners showing the source and chain of custody. We also hold ISO 14001 (environmental management) for our factory operations. If you need specific certifications for your market — say, B Corp documentation or carbon footprint calculations — we can work with third-party auditors to get those done. Takes about 4-6 weeks extra.',
  },
  {
    question: 'Are eco-friendly sunglasses as durable as regular ones?',
    answer: 'Honestly? It depends on the material, but the short answer is yes — they hold up just fine for normal use. Bio-acetate performs identically to traditional acetate because the chemical structure is the same. Recycled ocean plastic (rPET) is actually quite tough — we injection mold it the same way we do virgin nylon, and it passes all our standard drop tests and hinge fatigue tests (2,000 open-close cycles). Bamboo temples are naturally strong and have a beautiful grain, though they can be sensitive to prolonged water exposure — we apply a protective lacquer coating to handle that. Recycled aluminum is metallurgically identical to virgin aluminum once remelted, so zero difference in durability. The one thing I will say is that bio-acetate can be slightly more sensitive to acetone-based solvents, so we include care instructions for your end customers.',
  },
  {
    question: 'What is the minimum order quantity for eco-friendly sunglasses?',
    answer: 'MOQ is 200 pieces per model for most eco materials — slightly higher than our standard 100-piece minimum because sustainable materials require separate production runs to avoid contamination with conventional materials. For bamboo temples specifically, MOQ is 300 pieces because the bamboo blanks are batch-processed. You can mix colors and lens options within those minimums. For bio-acetate, if you want a custom color or pattern, the acetate sheet MOQ from Eastman is typically 50kg (enough for roughly 500-600 pairs), so we suggest starting with their standard color library for smaller orders. We keep about 15 bio-acetate colors in stock for quick-start orders.',
  },
  {
    question: 'How much more do eco-friendly sunglasses cost compared to regular ones?',
    answer: 'Less than most people expect. Bio-acetate adds about $1-2 per pair compared to standard acetate — so a pair that normally costs $6-8 runs $7-10 in bio-acetate. Bamboo temples add roughly $0.50-1.00 per pair versus standard plastic temples. Recycled ocean plastic (rPET) frames actually cost about the same as virgin nylon frames — sometimes even less, depending on resin market prices. Recycled aluminum is typically $0.50-1.00 more per pair than virgin aluminum. The real story is on the retail side: sustainable sunglasses command a 30-50% price premium from consumers. A pair that would retail at $35 in standard materials can sell at $45-55 with legitimate eco credentials and the right brand story. Your margins actually improve.',
  },
  {
    question: 'Can I combine different eco materials in one pair of sunglasses?',
    answer: 'Absolutely, and some of the best-selling eco designs we produce do exactly that. The most popular combo is a recycled ocean plastic front frame with bamboo temples — gives you two sustainability stories in one product and the visual contrast between the smooth plastic and natural bamboo grain looks fantastic. Another good combo is bio-acetate front with recycled aluminum temple accents. We have also done bamboo temples on recycled aluminum aviator-style frames. The only combo that does not work well is bamboo front frames — the material is not dimensionally stable enough for the main frame body where the lenses sit. We are happy to send you samples of different material combinations so you can see and feel them before committing.',
  },
]

const products = [
  {
    name: 'Ocean Recycled Wayfarer',
    description: 'Made from certified post-consumer ocean plastic collected off the coasts of Indonesia and Thailand. Each pair uses roughly 10 grams of recovered rPET — not a huge number, but multiply that by a few thousand pairs and it adds up. The injection-molded frame looks and feels like any premium nylon frame. We can color-match to Pantone, though the most popular finishes are matte ocean blue, coral, and carbon black. Comes with a story card explaining the ocean plastic sourcing — your customers love that.',
    price: '$5.50 - $9.00',
    moq: '200 pcs',
    features: ['Recycled Ocean Plastic', 'UV400 Protection', 'Pantone Color Match', 'Story Card Included'],
  },
  {
    name: 'Bamboo Temple Classic',
    description: 'Standard acetate or rPET front frame paired with hand-finished Moso bamboo temples. Each bamboo piece is kiln-dried, CNC-shaped, then hand-sanded and lacquered for a smooth finish. The natural grain means no two pairs are exactly alike — which is actually a selling point for artisan-style brands. The bamboo is sourced from FSC-certified plantations in Zhejiang province. Bamboo grows to harvest size in 3-5 years versus decades for hardwood, making it one of the most renewable materials on the planet.',
    price: '$6.00 - $10.00',
    moq: '300 pcs',
    features: ['FSC Bamboo', 'Hand-Finished', 'Unique Grain Pattern', 'Lacquer Protected'],
  },
  {
    name: 'Bio-Acetate Premium',
    description: 'Eastman Acetate Renew is the real deal in sustainable eyewear right now. It uses molecular recycling technology to replace 60% of traditional fossil-based feedstock with certified recycled content — and the resulting acetate is chemically identical to conventional acetate. Same colors, same patterns, same hand-polished finish, same durability. The difference is purely in the supply chain, which is exactly the kind of verifiable claim that keeps your brand out of greenwashing trouble. We offer all of Eastman\'s standard colors plus custom Pantone matching.',
    price: '$7.00 - $11.00',
    moq: '200 pcs',
    features: ['Eastman Acetate Renew', 'ISCC PLUS Certified', 'Hand-Polished', '60% Recycled Content'],
  },
  {
    name: 'Recycled Aluminum Aviator',
    description: 'Our classic aviator frame, remade with recycled aluminum alloy. The aluminum is sourced from post-industrial scrap — offcuts from automotive and aerospace manufacturing that would otherwise be downcycled. Once remelted and recast, it is metallurgically identical to virgin 6061-T6 alloy. Same strength, same weight (18-22g), same beautiful anodized finishes. We can stamp "recycled aluminum" on the inside of the temple arm for your marketing. Pairs well with polarized lenses for a full premium eco package.',
    price: '$10.00 - $15.00',
    moq: '200 pcs',
    features: ['Recycled 6061-T6', 'Anodized Finish', 'Lightweight 18-22g', 'Post-Industrial Source'],
  },
  {
    name: 'Full Eco Combo',
    description: 'Our most sustainable option — recycled ocean plastic front frame combined with FSC bamboo temples. Two eco stories in one product. The visual contrast between the smooth matte plastic and natural bamboo grain photographs beautifully for social media and e-commerce. We include a branded bamboo fiber case and a recycled cardboard hang tag with your sustainability message. This is the pair that wins over the Gen Z customer who reads every label and checks every claim. Several of our DTC clients report this style as their top seller by revenue.',
    price: '$8.00 - $12.00',
    moq: '300 pcs',
    features: ['Ocean Plastic + Bamboo', 'Bamboo Fiber Case', 'Recycled Hang Tag', 'Instagram-Ready'],
  },
  {
    name: 'Kids Eco Explorer',
    description: 'Sustainable eyewear for the next generation — literally. Bio-based nylon frame (derived from castor bean oil) with flexible spring hinges sized for ages 4-12. Parents buying for kids are some of the most eco-conscious consumers out there, and they are willing to pay a premium for safe, sustainable products. The frames are BPA-free, phthalate-free, and hypoallergenic. We can do fun colors — ocean blue, forest green, sunset orange — with matching eco packaging. MOQ is a bit higher because kids frames require separate tooling.',
    price: '$4.50 - $7.00',
    moq: '500 pcs',
    features: ['Bio-Based Nylon', 'BPA/Phthalate Free', 'Ages 4-12', 'Spring Hinges'],
  },
]

export default function EcoFriendlyPage() {
  return (
    <>
      <ProductSchema product={{
        name: 'Eco-Friendly Sustainable Sunglasses',
        description: 'Sustainable sunglasses made from recycled ocean plastic, bamboo, bio-acetate, and recycled aluminum. UV400 protection, full OEM customization. Green certifications available.',
        minPrice: '4.50',
        maxPrice: '15.00'
      }} />
      <BreadcrumbListSchema items={[
        { name: 'Home', url: 'https://eyeviewsunglasses.com' },
        { name: 'Products', url: 'https://eyeviewsunglasses.com/products' },
        { name: 'Eco-Friendly Sunglasses', url: 'https://eyeviewsunglasses.com/products/eco-friendly' }
      ]} />
      <FAQPageSchema faqs={ecoFaqs} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-primary-600">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Eco-Friendly Sunglasses</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Eco-Friendly Sunglasses Manufacturer
            </h1>
          </div>

          {/* Product Story / Overview */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl leading-relaxed mb-4">
                I will be straight with you — five years ago, when brands asked me about &ldquo;sustainable sunglasses,&rdquo; I was skeptical. I thought it was a marketing gimmick that would fade out in a season or two. I was wrong. Dead wrong. In 2024, about 35% of our new client inquiries specifically mention sustainability as a requirement. Not a nice-to-have — a requirement. The shift has been dramatic, and it is being driven by one thing: consumer demand, especially from Gen Z and millennial buyers who actually check what their sunglasses are made of.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                So we invested. Over the past three years, we have built out dedicated eco-material supply chains, earned <Link href="/certifications" className="text-primary-600 hover:underline">ISO 14001 environmental management certification</Link> for our factory, and developed production processes for four major sustainable materials: recycled ocean plastic (rPET), FSC-certified bamboo, <a href="https://www.eastman.com/brands/eastman-acetate-renew" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Eastman Acetate Renew</a> (bio-acetate), and recycled aluminum. Each one has different properties, different costs, and different stories — and honestly, which one is right for you depends entirely on your brand positioning and your customers.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Here is the business case in one sentence: <strong>sustainable sunglasses</strong> typically cost $0.50-2.00 more per pair to produce, but they command 30-50% higher retail prices. A conventional wayfarer that retails at $35 can sell at $45-55 with legitimate eco credentials. I have watched dozens of our DTC clients make this math work beautifully. One brand in Amsterdam switched their entire line to bio-acetate in 2023 and saw their average order value jump 28% — same frames, same lenses, just different material and a better story.
              </p>
              <p className="text-lg leading-relaxed">
                The key word there is &ldquo;legitimate.&rdquo; Greenwashing will destroy a brand faster than bad product. Every material we offer comes with traceable documentation — ISCC PLUS chain-of-custody for bio-acetate, FSC certification for bamboo, collection partner records for ocean plastic. When your customer scans the QR code on the hang tag and sees where the material actually came from, that builds the kind of trust money cannot buy. Let me walk you through what we offer.
              </p>
            </div>
          </div>

          {/* Sustainable Materials Deep Dive */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Our Sustainable Materials</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Four materials, four different stories. Here is an honest look at what each one actually is, what it costs, and who it is best for.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">🌊</div>
                <h3 className="text-xl font-bold mb-3">Recycled Ocean Plastic (rPET)</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We partner with coastal collection organizations in Indonesia, Thailand, and the Philippines who gather post-consumer plastic waste from beaches and shallow waters. The collected PET is sorted, cleaned, shredded, and reprocessed into injection-grade pellets. Chemically, it is polyethylene terephthalate — tough, lightweight, and UV-stable. We injection-mold it the same way we handle virgin nylon. The result looks and feels like any premium plastic frame. Colors are slightly more limited than virgin material (deep blacks and dark colors work best), but we can Pantone-match most shades. Cost is roughly the same as standard nylon — sometimes even cheaper when virgin resin prices spike.
                </p>
                <div className="text-primary-600 font-bold">$5.50 - $9.00 / pair</div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">🎋</div>
                <h3 className="text-xl font-bold mb-3">Bamboo Temples</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Moso bamboo (<em>Phyllostachys edulis</em>) from FSC-certified plantations in Zhejiang province, China. Bamboo reaches harvest maturity in 3-5 years — compared to 20-60 years for hardwood — and regenerates from the same root system without replanting. Each temple blank is kiln-dried to 8-10% moisture content, CNC-cut to shape, hand-sanded through three grits, and finished with a food-safe lacquer. The natural grain means every pair has a slightly unique look. Bamboo temples add about $0.50-1.00 per pair over standard plastic temples. They pair beautifully with rPET or bio-acetate front frames for a full eco package. One note: bamboo is not suitable for front frames (the lens-holding part) because it lacks the dimensional precision needed to hold lenses securely.
                </p>
                <div className="text-primary-600 font-bold">Adds $0.50 - $1.00 / pair</div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">♻️</div>
                <h3 className="text-xl font-bold mb-3">Bio-Acetate (Eastman Acetate Renew)</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  This is the premium sustainable option and the one I am most excited about. <a href="https://en.wikipedia.org/wiki/Cellulose_acetate" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Cellulose acetate</a> has been the gold standard frame material for decades — and <a href="https://www.eastman.com/brands/eastman-acetate-renew" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Eastman&apos;s Acetate Renew</a> uses molecular recycling to replace 60% of fossil-based feedstock with certified recycled content. The genius is that the output is chemically identical to conventional acetate. Same hardness, same polish, same color vibrancy, same everything. Your customers cannot tell the difference by looking at it or wearing it — but the environmental footprint is genuinely lower. It carries ISCC PLUS mass balance certification, which is the standard for verified recycled content claims. Adds $1-2 per pair. If your brand is positioned as premium and your customers read labels, this is the material.
                </p>
                <div className="text-primary-600 font-bold">Adds $1.00 - $2.00 / pair</div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">🔧</div>
                <h3 className="text-xl font-bold mb-3">Recycled Aluminum</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  For metal frame styles — especially <Link href="/products/aviator" className="text-primary-600 hover:underline">aviators</Link> — recycled aluminum is a straightforward sustainability upgrade. We source post-industrial aluminum scrap (offcuts from automotive and aerospace manufacturing) and remelt it into 6061-T6 alloy billets. Once recast, recycled aluminum is metallurgically identical to virgin material. Same strength, same weight, same ability to anodize in any color. The environmental benefit is significant: recycling aluminum uses 95% less energy than producing virgin aluminum from bauxite ore. Adds about $0.50-1.00 per pair. The only constraint is traceability documentation — we maintain batch records linking each production run to the scrap source, but it is not as elegant a consumer-facing story as ocean plastic or bamboo.
                </p>
                <div className="text-primary-600 font-bold">Adds $0.50 - $1.00 / pair</div>
              </div>
            </div>
          </section>

          {/* Products Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Our Eco-Friendly Collection</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center">
                    <span className="text-7xl group-hover:scale-110 transition-transform duration-300">🌿</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, i) => (
                        <span key={i} className="bg-green-50 text-green-700 text-xs px-2.5 py-1 rounded-full">{feature}</span>
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
            <h2 className="text-3xl font-bold text-center mb-10">Eco Materials at a Glance</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ['Recycled Ocean Plastic (rPET)', 'Injection-molded post-consumer PET from coastal cleanups. Same look/feel as virgin nylon.'],
                      ['Bamboo (Moso)', 'FSC-certified, kiln-dried, CNC-cut, hand-sanded, lacquer-coated. Used for temples only.'],
                      ['Bio-Acetate (Eastman Renew)', '60% certified recycled content via molecular recycling. ISCC PLUS certified. Chemically identical to standard acetate.'],
                      ['Recycled Aluminum', 'Post-industrial 6061-T6 scrap, remelted. 95% less energy vs virgin aluminum. Identical performance.'],
                      ['Lens Material', 'Same as standard: Polycarbonate / TAC Polarized / CR-39 — no compromise on optics'],
                      ['UV Protection', 'UV400 — blocks 100% of UVA (315-380nm) and UVB (280-315nm)'],
                      ['Certifications Available', 'CE · FDA · UV400 · ISO 9001 · ISO 14001 · ISCC PLUS (bio-acetate) · FSC (bamboo)'],
                      ['Eco Packaging Options', 'Bamboo fiber cases, recycled cardboard boxes, corn starch bags, soy ink printing'],
                      ['MOQ', '200 pcs (rPET, bio-acetate, recycled aluminum) / 300 pcs (bamboo temple)'],
                      ['Cost Premium vs Standard', 'rPET: $0 / Bamboo: +$0.50-1.00 / Bio-acetate: +$1-2 / Recycled aluminum: +$0.50-1.00'],
                      ['Sample Time', '5-7 business days (eco materials may need sourcing lead time)'],
                      ['Production Time', '18-25 days standard / 12-15 days rush'],
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

          {/* The Business Case for Eco */}
          <section className="mb-20 bg-green-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-4">The Business Case for Going Green</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Sustainability is not charity — it is smart business. Here are the numbers.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">📈 30-50% Retail Premium</h3>
                <p className="text-sm text-gray-600">Consumers consistently pay more for verified sustainable products. A $35 standard wayfarer becomes a $45-55 eco wayfarer. Your per-pair margin actually improves even with the higher material cost.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🎯 Gen Z Demands It</h3>
                <p className="text-sm text-gray-600">73% of Gen Z consumers are willing to pay more for sustainable products (First Insight, 2023). If your target market is under 35, sustainability is not optional — it is table stakes for getting their attention.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">📰 PR and Marketing Goldmine</h3>
                <p className="text-sm text-gray-600">Eco products generate free media coverage. We have seen clients get featured in Vogue, GQ, and sustainability blogs purely because of their material story. Try getting that kind of press with a standard acetate frame.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🔄 Higher Repeat Purchase</h3>
                <p className="text-sm text-gray-600">Sustainable brands see 20-30% higher customer retention. When someone buys into your eco mission, they come back for the next collection. They become advocates, not just customers.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🏪 Retail Buyer Preference</h3>
                <p className="text-sm text-gray-600">Major retailers (Nordstrom, REI, Whole Foods Market, independent boutiques) are actively seeking sustainable eyewear brands to stock. An eco line opens doors that conventional products cannot.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🌍 Regulatory Tailwinds</h3>
                <p className="text-sm text-gray-600">EU regulations on single-use plastics and extended producer responsibility are tightening. Brands that switch to sustainable materials now are ahead of the curve instead of scrambling to comply later.</p>
              </div>
            </div>
          </section>

          {/* Customization */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Eco Customization Options</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Going green does not mean going generic. Here is how we make your eco sunglasses distinctly yours.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🎨 Branding</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Laser engraving</strong> on bamboo temples — looks incredible with the natural grain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Debossed logo</strong> on bio-acetate or rPET frames — pressed in, no ink</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Lens corner printing</strong> — subtle branding that does not compromise the eco message</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>QR code hang tag</strong> — link to your sustainability story page</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">🌈 Colors & Finishes</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>rPET:</strong> Matte ocean blue, coral, carbon black, olive — or Pantone match</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Bio-acetate:</strong> Full color range — tortoiseshell, crystal, marble, gradient, solid colors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Bamboo:</strong> Natural, carbonized (darker), or stained in earth tones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Recycled aluminum:</strong> Any anodized color — matte or gloss</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold mb-4">📦 Eco Packaging</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Bamboo fiber hard case</strong> — biodegradable, with your logo embossed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Recycled cardboard box</strong> — soy ink printing, FSC paper, no plastic wrap</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Organic cotton pouch</strong> — doubles as cleaning cloth, GOTS certified available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span><strong>Corn starch poly bag</strong> — compostable inner wrap replaces standard plastic</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Who Buys Section */}
          <section className="mb-20 bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-4">Who Is Buying Eco-Friendly Sunglasses?</h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-10">
              The sustainable eyewear market has exploded. Here is who we are producing for right now.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-green-400">🌱 Sustainable DTC Brands</h3>
                <p className="text-gray-300 text-sm">The fastest-growing segment. These are Shopify-native brands built around a sustainability mission. They need materials with verifiable eco claims, great photography, and a story that holds up to scrutiny. Bio-acetate and ocean plastic are their favorites.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-green-400">🏄 Outdoor & Surf Brands</h3>
                <p className="text-gray-300 text-sm">Brands in the outdoor space are under intense pressure to go sustainable. Ocean plastic sunglasses are a natural fit — the material story connects directly to their customer&apos;s lifestyle. Several of our surf brand clients have gone 100% eco.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-green-400">🏨 Eco Hotels & Resorts</h3>
                <p className="text-gray-300 text-sm">Sustainable hospitality brands offering eco sunglasses as guest amenities or gift shop items. Bamboo temple frames with the resort logo laser-engraved are the top seller here. Guests keep them as souvenirs.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-green-400">🎁 Corporate ESG Programs</h3>
                <p className="text-gray-300 text-sm">Companies meeting ESG (Environmental, Social, Governance) targets by switching corporate gifts to sustainable products. Eco sunglasses with the company logo are a hit at conferences and team events — way better than another branded pen.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-green-400">👶 Kids Eyewear Brands</h3>
                <p className="text-gray-300 text-sm">Parents buying for children are hyper-conscious about materials — both for safety and environmental reasons. Bio-based nylon and bamboo frames check both boxes. This segment is growing 40%+ year-over-year for us.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-green-400">🛒 Mainstream Brands Going Green</h3>
                <p className="text-gray-300 text-sm">Established eyewear brands adding an eco sub-line. They already have the distribution — they just need a credible sustainable product. Bio-acetate is the easiest switch because it drops right into their existing acetate production process.</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Eco-Friendly Sunglasses FAQ</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {ecoFaqs.map((faq, index) => (
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
              <Link href="/products/wayfarer" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🔲</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Wayfarer Sunglasses</h3>
                <p className="text-gray-600 text-sm">Our classic wayfarer is available in bio-acetate. Same iconic shape, same hand-polished finish — now with 60% certified recycled content.</p>
              </Link>
              <Link href="/products/aviator" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">✈️</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Aviator Sunglasses</h3>
                <p className="text-gray-600 text-sm">Metal aviators available in recycled aluminum. Same lightweight feel, same anodized finishes, with 95% less energy in material production.</p>
              </Link>
              <Link href="/certifications" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">📋</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Our Certifications</h3>
                <p className="text-gray-600 text-sm">CE, FDA, ISO 9001, ISO 14001, ISCC PLUS, FSC — see the full list of certifications and compliance documentation we provide.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Go Sustainable?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Tell us about your brand, your target customer, and your sustainability goals. We will recommend the right eco materials and send you samples within a week. No commitment, no pressure — just honest advice from someone who has helped 100+ brands make this transition.
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
