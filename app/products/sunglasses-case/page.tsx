import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Wholesale Sunglasses Cases Manufacturer | Custom Eyewear Cases OEM - EyeView',
  description: 'Leading wholesale sunglasses cases manufacturer. Custom eyewear cases with logo printing, EVA/hard/soft/leather materials. MOQ 100pcs. Factory direct pricing. Get quote!',
  keywords: 'wholesale sunglasses cases, custom eyewear cases, sunglass case manufacturer, bulk sunglass cases, OEM sunglass cases, EVA sunglass case, hard sunglass case, soft sunglass pouch',
  openGraph: {
    title: 'Wholesale Sunglasses Cases Manufacturer | Custom OEM - EyeView',
    description: 'Leading wholesale sunglass cases manufacturer. Custom logo, EVA/hard/soft/leather materials. MOQ 100pcs. Factory direct pricing.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/products/sunglasses-case',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/products/sunglasses-case',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/sunglasses-case',
      'es': 'https://eyeviewsunglasses.com/es/productos/funda-gafas',
    },
  },
}

const caseFaqs = [
  {
    question: 'What is the minimum order for wholesale sunglass cases?',
    answer: '100 pieces for standard cases with your logo printed. If you want fully custom molds or special materials, the MOQ goes up to 500 pieces. But honestly, 100 is enough for most brands to test the market. We recommend starting with our standard EVA hard case -- it is the most popular, the cheapest to customize, and customers expect it. Once you know your volume, you can scale up to custom designs.',
  },
  {
    question: 'What is the difference between hard cases and soft pouches?',
    answer: 'Hard cases (usually EVA or ABS) give your sunglasses real protection -- drop protection, crush protection, the works. They are what you would expect from a $100+ pair of sunglasses. Soft pouches (microfiber or velvet) are for scratch protection during normal use and they double as cleaning cloths. Most brands use both: hard case for shipping and retail display, soft pouch for the customer to carry daily. If you are on a tight budget, start with the hard case -- it adds more perceived value.',
  },
  {
    question: 'Can I get my logo printed on the cases?',
    answer: 'Absolutely, this is what most of our clients do. We offer several methods depending on the material: screen printing for EVA and microfiber (1-2 colors, very affordable), embossing or debossing for leather cases (premium feel, your logo raised or pressed into the surface), metal badge for hard cases (a small zinc alloy or stainless steel logo plate that gets attached to the front), and heat transfer for full-color logos. All of them look professional and hold up over time. Logo printing adds about $0.20-0.50 per case depending on the method.',
  },
  {
    question: 'What materials do you offer for sunglass cases?',
    answer: 'Four main categories. EVA (compressed ethylene-vinyl acetate) is the most popular -- it is the standard hard case with a soft interior lining, costs $0.80-2.50 depending on size and customization. ABS plastic is harder and more rigid than EVA, gives that premium click-shut feel, and runs $1.20-3.00. Microfiber and velvet pouches are the soft option -- $0.30-0.80 each, and they double as cleaning cloths. Leather cases are the premium tier -- genuine or synthetic leather with a magnetic closure, $2.50-6.00, and they make your brand look expensive. Pick based on your retail positioning.',
  },
  {
    question: 'Do you offer custom shapes and sizes?',
    answer: 'Yes. Our standard cases fit most aviator, wayfarer, and round frames (about 150mm x 60mm x 45mm interior). But if you make oversized cat eye frames, compact foldable designs, or wraparound sport sunglasses, we can make cases to fit. Custom molds take 7-10 days for the sample and add about $100-300 to your setup cost, but once the mold is done, the per-unit price is the same. We have done custom shapes for over 200 brands at this point.',
  },
  {
    question: 'What about packaging beyond the case?',
    answer: 'We do the full setup. Beyond the case itself, we can provide: custom cardboard retail boxes with full-color printing ($0.50-1.50 each), microfiber cleaning cloths with your logo ($0.15-0.40 each), warranty cards and instruction booklets ($0.05-0.15 each), hang tags ($0.03-0.08 each), and outer shipping bags (poly or branded). Most of our clients order the case + cleaning cloth + warranty card as a complete package. It runs about $1.00-3.00 total per set, and it makes your product feel complete on the shelf.',
  },
]

const products = [
  {
    name: 'Standard EVA Hard Case',
    description: 'This is the one you see with every mid-range sunglasses brand. EVA foam with a soft interior lining (usually black or grey microsuede), a zipper on one side, and your logo screen-printed on the front. It is about 160mm x 70mm x 45mm on the outside -- fits aviators, wayfarers, and round frames without issue. The shell is firm enough to survive being tossed in a backpack, and the interior is soft enough that it will not scratch lenses. We sell more of these than any other case type. If you are not sure where to start, start here.',
    price: '$0.80 - $2.50',
    moq: '100 pcs',
    features: ['EVA Shell', 'Soft Interior Lining', 'Zipper Closure', 'Custom Logo Printing'],
  },
  {
    name: 'Premium ABS Hard Case',
    description: 'The step-up from EVA. ABS plastic shell with a satisfying click-shut magnetic closure. This is what you see with premium and designer brands -- it feels solid in your hand, it protects against serious drops, and the rigid shape means it never gets squished in a bag. Interior is usually a molded EVA insert with micro suede covering so the sunglasses sit perfectly in place. We can do custom colors for the shell (Pantone matching), and the front can be printed, embossed, or fitted with a metal badge. Adds real perceived value to your brand.',
    price: '$1.20 - $3.50',
    moq: '100 pcs',
    features: ['ABS Plastic Shell', 'Magnetic Closure', 'Molded Interior', 'Custom Colors'],
  },
  {
    name: 'Microfiber Soft Pouch',
    description: 'The everyday carry option. Drawstring or zipper closure, made from premium microfiber that is soft enough to clean your lenses and tough enough to protect against scratches. Size is about 190mm x 90mm -- big enough for most sunglasses and small enough to fit in a pocket or small bag. The microfiber material is the key here -- it is the same stuff they use for lens cleaning cloths, so customers use it for both storage and cleaning. Logo can be screen-printed or woven as a patch. Most brands include this as a bonus with every purchase.',
    price: '$0.30 - $0.80',
    moq: '100 pcs',
    features: ['Microfiber Material', 'Scratch Protection', 'Double as Cleaning Cloth', 'Lightweight'],
  },
  {
    name: 'Leather Case',
    description: 'The premium option. Genuine leather or high-quality synthetic leather with a magnetic flap closure. Interior is lined with soft microsuede or velvet. This is what you use when you want your brand to look expensive -- it is the kind of case that makes someone think "these sunglasses cost $200" even if they are $80. We offer full-grain leather, top-grain leather, and PU leather (synthetic) depending on your price point. Logo can be embossed (pressed into the leather, very classy), debossed, or fitted with a metal plate. Custom colors available.',
    price: '$2.50 - $6.00',
    moq: '100 pcs',
    features: ['Genuine/Synthetic Leather', 'Magnetic Flap', 'Embossed Logo', 'Premium Feel'],
  },
  {
    name: 'Foldable Silicone Case',
    description: 'The practical option for active brands. Made from food-grade silicone, this case folds flat when empty (about 10mm thick) and expands to fit your sunglasses. It is waterproof, washable, and nearly indestructible -- drop it, step on it, throw it in the river, it does not care. Great for sports brands, outdoor companies, and beach lifestyle labels. Available in any color (silicone is easy to color-match), and your logo can be debossed directly into the material. Not as premium-looking as EVA or leather, but customers love the functionality.',
    price: '$0.60 - $1.80',
    moq: '200 pcs',
    features: ['Food-Grade Silicone', 'Foldable Design', 'Waterproof', 'Vibrant Colors'],
  },
  {
    name: 'Custom Shape Case',
    description: 'For brands that want something no one else has. We make the mold, you get a case that is uniquely yours. This could be a case shaped like your logo, a case that looks like a mini sunglasses display, a case with a built-in stand, or anything else you can dream up. The process: you send us your sunglasses (or dimensions), we design the case, make a sample in 7-10 days, you approve, we produce. Mold cost is $100-300 one-time, then per-unit pricing is the same as our standard cases. This is what separates brands that look generic from brands that look intentional.',
    price: '$1.00 - $4.00',
    moq: '500 pcs',
    features: ['Custom Mold', 'Unique Design', 'Brand Differentiation', 'Full Customization'],
  },
]

export default function SunglassCasePage() {
  return (
    <>
      <ProductSchema product={{
        name: 'Wholesale Sunglasses Cases',
        description: 'Custom sunglass cases and eyewear packaging. Available in EVA hard case, ABS hard case, microfiber pouch, leather case, silicone case, and custom shapes. Full OEM branding with logo printing, embossing, and custom packaging.',
        minPrice: '0.30',
        maxPrice: '6.00'
      }} />
      <BreadcrumbListSchema items={[
        { name: 'Home', url: 'https://eyeviewsunglasses.com' },
        { name: 'Products', url: 'https://eyeviewsunglasses.com/products' },
        { name: 'Sunglasses Cases', url: 'https://eyeviewsunglasses.com/products/sunglasses-case' }
      ]} />
      <FAQPageSchema faqs={caseFaqs} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-primary-600">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Sunglasses Cases</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Wholesale Sunglasses Cases
            </h1>
          </div>

          {/* Hero Image with Schema */}
          <div className="mb-12">
            <img
              src="/products/sunglasses-case.svg"
              alt="Wholesale Sunglasses Cases - Custom Eyewear Cases and Packaging Manufacturer"
              loading="lazy"
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Product Story / Overview */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl leading-relaxed mb-4">
                Here is something most sunglasses brands get wrong: they spend $8-15 per pair on a great product, then ship it in a flimsy plastic bag that makes it feel like a $5 gas station purchase. The case is the first thing your customer touches when they open the box. It sets the tone for everything that follows. A good case says "this is a real product." A bad case says "I cut corners everywhere."
              </p>
              <p className="text-lg leading-relaxed mb-4">
                We have been manufacturing and supplying <strong>custom sunglass cases</strong> for over 15 years. Our factory produces 500,000+ cases per month for brands in 60+ countries. We make everything from the standard EVA hard case you see everywhere to premium leather cases with embossed logos, from foldable silicone cases for sports brands to fully custom shapes that no one else has. And we do it at prices that actually work for wholesale -- because the case should be an investment in your brand, not a budget-killer.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you need 100 cases to go with your first sunglass order or 50,000 cases for a national retail launch, we have the capacity. And because we make both the sunglasses and the cases, we can ship them together -- one shipment, one tracking number, one less thing to worry about.
              </p>
            </div>
          </div>

          {/* Products Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Our Sunglass Case Collection</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-7xl group-hover:scale-110 transition-transform duration-300">👜</span>
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
                      ['EVA Hard Case', '160 x 70 x 45mm (ext) | 145 x 60 x 35mm (int) | 80-120g'],
                      ['ABS Hard Case', '165 x 72 x 40mm (ext) | 150 x 62 x 30mm (int) | 100-150g'],
                      ['Microfiber Pouch', '190 x 90mm (flat) | 15-25g | Drawstring or zipper'],
                      ['Leather Case', '170 x 75 x 40mm (ext) | 155 x 65 x 30mm (int) | 60-100g'],
                      ['Silicone Case', '160 x 70mm (expanded) | 160 x 70 x 10mm (folded) | 30-50g'],
                      ['Interior Lining', 'Microsuede / Velvet / EVA foam / Mesh (varies by case type)'],
                      ['Closure Type', 'Zipper / Magnetic flap / Snap button / Drawstring'],
                      ['Logo Methods', 'Screen print / Emboss / Deboss / Metal badge / Heat transfer'],
                      ['Custom Colors', 'Pantone matching available for EVA, ABS, silicone, and leather'],
                      ['Certifications', 'REACH (EVA) · CPSIA (pouches) · REACH (leather) -- docs on request'],
                      ['MOQ', '100 pieces standard | 500 pieces for custom molds'],
                      ['Sample Time', '3-5 business days (standard) | 7-10 days (custom mold)'],
                      ['Production Time', '10-15 days standard / 7-10 days rush'],
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

          {/* Material Comparison */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Picking the Right Case for Your Brand</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              The case you choose tells customers how much your brand costs before they even see the price tag. Here is the honest breakdown.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">📦</div>
                <h3 className="text-xl font-bold mb-3">EVA Hard Case</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The industry standard. Firm protection, soft interior, zipper closure. This is what customers expect from a $20-80 sunglasses brand. We use <a href="https://en.wikipedia.org/wiki/Ethylene_vinyl_acetate" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">high-density EVA foam</a> (40-50 kg/m³) that absorbs drops without being bulky. Available in any color with Pantone matching. Screen-print your logo in 1-2 colors or go full-color with heat transfer. The safe bet for most brands.
                </p>
                <div className="text-primary-600 font-bold">$0.80 - $2.50 / piece</div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">🔒</div>
                <h3 className="text-xl font-bold mb-3">ABS Hard Case</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The premium upgrade. Rigid ABS plastic shell with magnetic closure -- that satisfying "click" when you shut it. Interior is a molded EVA insert with microsuede so the sunglasses sit perfectly. This is what you see with <a href="https://www.luxottica.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Luxottica</a> brands and designer labels. If your retail price is $80+, this is the case that matches. Custom colors, metal badge logo options, and a weight that feels substantial.
                </p>
                <div className="text-primary-600 font-bold">$1.20 - $3.50 / piece</div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">🧹</div>
                <h3 className="text-xl font-bold mb-3">Microfiber Pouch</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The everyday carry. Soft microfiber that protects against scratches AND doubles as a lens cleaning cloth. Customers love this because it is useful -- they actually use it every day. Best as a complement to a hard case (hard case for shipping, pouch for daily carry), but some budget brands use it alone. Screen-print your logo or add a woven patch. Available in black, grey, blue, red, and custom colors.
                </p>
                <div className="text-primary-600 font-bold">$0.30 - $0.80 / piece</div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">👜</div>
                <h3 className="text-xl font-bold mb-3">Leather Case</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The luxury play. Genuine or synthetic leather with a magnetic flap closure. Interior lined with soft microsuede or velvet. Embossed logo (pressed into the leather) looks incredibly classy. This is what separates premium brands from everyone else. When someone picks up a leather case, they think "expensive" -- even if the sunglasses inside are $80. We offer full-grain, top-grain, and PU leather depending on your budget.
                </p>
                <div className="text-primary-600 font-bold">$2.50 - $6.00 / piece</div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">🔄</div>
                <h3 className="text-xl font-bold mb-3">Silicone Case</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The practical option. Food-grade silicone that folds flat and expands to fit. Waterproof, washable, and nearly indestructible. Great for sports brands, outdoor companies, and beach lifestyle labels. Available in any color (silicone is easy to color-match), and your logo can be debossed directly into the material. Not as premium as leather, but customers love the functionality.
                </p>
                <div className="text-primary-600 font-bold">$0.60 - $1.80 / piece</div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <div className="text-3xl mb-4">✨</div>
                <h3 className="text-xl font-bold mb-3">Custom Shape</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The differentiator. We make a custom mold and you get a case that no one else has. Shaped like your logo, shaped like a mini sunglasses display, built-in stand -- anything you can imagine. Mold cost is $100-300 one-time, then per-unit pricing is the same as standard cases. This is what separates brands that look generic from brands that look intentional.
                </p>
                <div className="text-primary-600 font-bold">$1.00 - $4.00 / piece</div>
              </div>
            </div>
          </section>

          {/* Logo Methods */}
          <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-4">Branding Your Cases</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Your logo on the case is what turns a generic accessory into your brand asset. Here is how we do it.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🖨️ Screen Printing</h3>
                <p className="text-sm text-gray-600">Most popular method. Ink is pressed through a mesh screen onto the case surface. Works on EVA, microfiber, and ABS. Best for 1-2 color logos. Costs $0.10-0.30 per case. Holds up well -- survives thousands of zips without fading.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🔤 Embossing / Debossing</h3>
                <p className="text-sm text-gray-600">Your logo is pressed into the material (embossed = raised, debossed = indented). Works best on leather and EVA. No ink needed -- the texture itself is the branding. Looks premium. Costs $0.20-0.50 per case. The classic luxury approach.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🏷️ Metal Badge</h3>
                <p className="text-sm text-gray-600">A small zinc alloy or stainless steel plate with your logo, attached to the front of the case with adhesive or screws. Used on ABS hard cases and some leather cases. Feels expensive. Costs $0.30-0.80 per badge. What designer brands use.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🌈 Heat Transfer</h3>
                <p className="text-sm text-gray-600">Full-color logo transferred using heat and pressure. Works on EVA and microfiber. Best if your logo has gradients, photos, or more than 3 colors. Costs $0.20-0.40 per case. Slightly less durable than screen printing but handles complex designs.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">🧵 Woven Patch</h3>
                <p className="text-sm text-gray-600">Your logo woven into a fabric patch, then sewn or glued onto the case. Works on microfiber pouches and EVA cases. Very durable -- the logo is literally woven into threads. Costs $0.15-0.35 per patch. Classic look that never goes out of style.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-2">⚡ Laser Engraving</h3>
                <p className="text-sm text-gray-600">Laser burns your logo into the surface of ABS or leather cases. Permanent, precise, and very clean-looking. Works best on dark-colored cases where the engraved area contrasts. Costs $0.15-0.30 per case. The most premium option for hard cases.</p>
              </div>
            </div>
          </section>

          {/* Complete Package */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Complete Packaging Package</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              The case is just the start. Here is the full packaging setup most of our clients order.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
                <div className="text-4xl mb-3">📦</div>
                <h3 className="font-bold mb-2">Hard Case</h3>
                <p className="text-sm text-gray-600">EVA or ABS with your logo. The main event.</p>
                <div className="text-primary-600 font-bold mt-2">$0.80 - $3.50</div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
                <div className="text-4xl mb-3">🧹</div>
                <h3 className="font-bold mb-2">Cleaning Cloth</h3>
                <p className="text-sm text-gray-600">Microfiber pouch that doubles as a cloth.</p>
                <div className="text-primary-600 font-bold mt-2">$0.15 - $0.40</div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
                <div className="text-4xl mb-3">📋</div>
                <h3 className="font-bold mb-2">Warranty Card</h3>
                <p className="text-sm text-gray-600">Full-color printed card with your branding.</p>
                <div className="text-primary-600 font-bold mt-2">$0.05 - $0.15</div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-100 text-center">
                <div className="text-4xl mb-3">🏷️</div>
                <h3 className="font-bold mb-2">Hang Tag</h3>
                <p className="text-sm text-gray-600">Cardboard tag with product info and barcode.</p>
                <div className="text-primary-600 font-bold mt-2">$0.03 - $0.08</div>
              </div>
            </div>

            <div className="mt-8 bg-primary-50 rounded-xl p-6 text-center">
              <p className="text-gray-700">
                <strong>Complete package total:</strong> $1.03 - $4.13 per set (case + cloth + card + tag)
                <br />
                <span className="text-sm text-gray-500">Most brands spend $1.50-2.50 per set. That is the difference between a product that looks cheap and one that looks like a real brand.</span>
              </p>
            </div>
          </section>

          {/* Who Buys Section */}
          <section className="mb-20 bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-4">Who Orders Custom Sunglass Cases?</h2>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-10">
              We supply cases to a wide range of businesses. Here are the most common ones.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">🏪 Sunglasses Brands</h3>
                <p className="text-gray-300 text-sm">New and established brands that need cases to go with their sunglasses. Most order cases + sunglasses together from us -- one shipment, one tracking number.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">🛍️ Retail Shops</h3>
                <p className="text-gray-300 text-sm">Boutiques, optical stores, and surf shops that sell sunglasses under their own house brand. Custom cases make their products look professional on the shelf.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">🌐 Online Sellers</h3>
                <p className="text-gray-300 text-sm">Amazon, Shopify, Etsy sellers who need complete packaging for unboxing experiences. A good case + cloth + card setup gets better reviews and fewer returns.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">🎁 Corporate & Promo</h3>
                <p className="text-gray-300 text-sm">Companies ordering branded cases as promotional items, trade show giveaways, or corporate gifts. High perceived value at a price that works for bulk orders.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">🏨 Hotels & Resorts</h3>
                <p className="text-gray-300 text-sm">Hospitality brands offering custom cases as guest amenities or gift shop items. A branded case with the resort name is a souvenir guests actually keep.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-bold mb-2 text-primary-400">📦 Distributors</h3>
                <p className="text-gray-300 text-sm">Regional wholesalers supplying multiple retailers. Our volume pricing at 1,000+ and 5,000+ tiers gives distributors the margins they need.</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Sunglasses Cases FAQ</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {caseFaqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Products */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">You Might Also Need</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/products/aviator" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">✈️</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Aviator Sunglasses</h3>
                <p className="text-gray-600 text-sm">Pair your custom cases with our classic aviator sunglasses. Metal frames, UV400/polarized lenses, full OEM customization. Most popular style worldwide.</p>
              </Link>
              <Link href="/products/promotional" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Promotional Sunglasses</h3>
                <p className="text-gray-600 text-sm">Bulk promotional sunglasses with custom branding. Perfect for events, trade shows, and brand campaigns. Cases available as part of the package.</p>
              </Link>
              <Link href="/products/eco-friendly" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">🌱</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Eco-Friendly Sunglasses</h3>
                <p className="text-gray-600 text-sm">Sustainable sunglasses made from recycled materials. We also offer eco-friendly cases made from recycled EVA and biodegradable pouches.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Order Sunglass Cases?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Tell us what you need -- case type, quantity, logo method -- and we will get back to you within 24 hours with pricing.
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
