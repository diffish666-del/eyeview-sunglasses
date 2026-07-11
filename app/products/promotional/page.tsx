import Link from 'next/link'
import type { Metadata } from 'next'
import { ProductSchema, BreadcrumbListSchema, FAQPageSchema } from '../../components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Promotional Sunglasses Manufacturer | Custom Branded Eyewear Wholesale - EyeView',
  description: 'Promotional sunglasses manufacturer for events, corporate gifts, and brand campaigns. Custom logo, bulk pricing from $0.80/pair. MOQ 500pcs. Fast turnaround for event deadlines.',
  keywords: 'promotional sunglasses manufacturer, custom branded sunglasses wholesale, event sunglasses bulk, corporate gift sunglasses, logo sunglasses bulk, trade show sunglasses, promotional eyewear factory',
  openGraph: {
    title: 'Promotional Sunglasses Manufacturer | Custom Branded Eyewear Wholesale - EyeView',
    description: 'Promotional sunglasses for events, corporate gifts, and brand campaigns. Custom logo, bulk pricing from $0.80/pair. MOQ 500pcs. Fast turnaround.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/products/promotional',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/products/promotional',
  },
}

const promoFaqs = [
  {
    question: 'What makes promotional sunglasses different from regular sunglasses?',
    answer: 'Three things: price, speed, and branding. Promotional sunglasses are designed to be cheap enough that you can give them away (or sell them at event markup) without worrying about the per-unit cost. They need to be produced fast because events have hard deadlines -- if your trade show is on June 15, you cannot receive the sunglasses on June 16. And the branding is front and center: your logo on the lens, temple arm, or both. The trade-off is that promotional sunglasses use simpler materials and construction. Injection-molded plastic frames instead of hand-polished acetate, standard tinted polycarbonate lenses instead of polarized. But for a one-day event or a promotional campaign, that is exactly what you want -- good enough quality, great branding, and a cost that lets you hand out hundreds or thousands without breaking the budget.',
  },
  {
    question: 'What is the cheapest option for promotional sunglasses?',
    answer: 'Our entry-level promotional sunglass starts at $0.80 per pair at 5,000+ quantity. It is a simple injection-molded plastic frame (wayfarer-style) with tinted polycarbonate lenses, no polarization, basic branding (laser-engraved logo on temples or printed logo on lens). At this price point, you are buying a functional sunglass that provides UV400 protection and visible branding. It will not win any design awards, but it will protect eyes from UV rays and get your brand seen. For comparison, most promotional product distributors charge $5-15 per pair for equivalent quality -- the difference is buying direct from the factory versus through a middleman.',
  },
  {
    question: 'How fast can you produce a promotional sunglasses order?',
    answer: 'Standard production time is 15-20 days for orders up to 10,000 pairs. Rush production is 7-10 days for an additional 30% fee. For emergency orders (3-5 days), we can do it if we have frame blanks in stock and the order is under 2,000 pairs -- rush fee is 50-80%. We have delivered emergency orders for product launches, surprise marketing campaigns, and last-minute event additions. The key constraint is usually the branding method: laser engraving on temples is fastest (no setup), lens printing requires a stencil for each logo shape (1-2 days setup), and custom packaging adds 3-5 days. If you are working with a hard deadline, tell us upfront and we will plan accordingly.',
  },
  {
    question: 'What branding methods do you offer for promotional sunglasses?',
    answer: 'Five options, from cheapest to most premium. Lens printing is the most common for promotional orders -- we screen-print your logo directly on the lens. It is visible from the front (great for brand exposure) and costs about $0.10-0.30 per pair depending on logo complexity (up to 2 colors included). Laser engraving on temple arms is more subtle and permanent -- your logo is burned into the plastic with a laser. Looks more premium, costs $0.15-0.40 per pair. Embossed/debossed logo on the frame front is a tactile option available for acetate frames ($0.30-0.60 per pair). Metal logo plate on temple is the premium option -- a small metal badge with your logo attached to the temple arm ($0.50-1.00 per pair). And custom packaging (branded box, pouch, or hang tag) adds $0.20-2.00 per pair depending on what you choose.',
  },
  {
    question: 'Can I get UV-certified promotional sunglasses at the low price point?',
    answer: 'Yes, and you should insist on it. Even at the $0.80 price point, our promotional sunglasses come with UV400 lenses that block 100% of UVA and UVB radiation. This is non-negotiable for us -- dark lenses without UV protection are actually more dangerous than no sunglasses at all, because the dark tint causes pupils to dilate, letting in more UV radiation. Every pair we ship, regardless of price, meets UV400 standards. We can provide test reports from third-party labs (SGS, Intertek) for your compliance documentation. If your promotional campaign is for a specific market (US, EU, Australia), we can ensure the lenses meet that market\'s specific standards -- FDA for US, EN ISO 12312-1 for EU, AS/NZS 1067 for Australia.',
  },
  {
    question: 'What is the maximum order quantity you can handle?',
    answer: 'Our factory can produce up to 50,000 pairs per week for promotional orders. We have fulfilled orders of 100,000+ pairs for global campaigns -- those are split into weekly shipments. For the largest promotional order we have handled (250,000 pairs for a multinational beverage brand\'s summer campaign), we dedicated two production lines for 5 weeks and shipped in weekly batches via sea freight. The per-unit cost for that order was $1.10 including lens printing and custom poly bag with client branding. If you have a massive order, contact us early and we will reserve production capacity.',
  },
]

const products = [
  {
    name: 'Budget Wayfarer Promo',
    description: 'Our most affordable promotional sunglass -- injection-molded plastic wayfarer frame with UV400 tinted polycarbonate lenses. Simple, clean design that works with any logo. Laser-engraved or lens-printed branding included. This is the workhorse of promotional sunglasses -- we produce thousands of these for trade shows, brand activations, and corporate events every month. At this price, you can hand them out freely.',
    price: '$0.80 - $2.50',
    moq: '1,000 pcs',
    features: ['UV400 Protection', 'Injection-Molded Frame', 'Lens or Temple Branding', 'Bulk Packed'],
  },
  {
    name: 'Premium Promo Aviator',
    description: 'Metal-frame aviator sunglasses with UV400 tinted lenses and your branding on the temple arms. The metal frame gives a significantly more premium feel than plastic -- customers are more likely to keep and wear these long-term, which means more brand exposure over time. Available in gold, silver, black, and rose gold frame finishes. Polarized lens upgrade available for +$0.50 per pair. Ideal for corporate gifts, executive events, and brand launches where you want the sunglasses to be perceived as valuable.',
    price: '$2.00 - $5.00',
    moq: '500 pcs',
    features: ['Metal Frame', 'UV400 Tinted Lens', 'Metal Logo Plate', '4 Frame Colors'],
  },
  {
    name: 'Round Frame Retro Promo',
    description: 'John Lennon-style round frame sunglasses in injection-molded plastic with UV400 lenses. The round frame has been one of the most popular sunglass styles for the past decade, and it works especially well for music festivals, cultural events, and lifestyle brands. Available in black, tortoiseshell, white, and custom colors for orders over 2,000 pairs. Branding via laser engraving on temples or lens printing. These photograph beautifully for social media -- a practical benefit for events where attendees will be posting photos.',
    price: '$1.00 - $3.00',
    moq: '500 pcs',
    features: ['Round Retro Style', 'UV400 Protection', 'Custom Colors (2000+)', 'Social Media Friendly'],
  },
  {
    name: 'Foldable Promo Sunglasses',
    description: 'Here is something that always gets people\'s attention -- sunglasses that fold down to the size of a credit card. The flexible frame folds flat and comes with a branded pouch that fits in any pocket. These are perfect for awareness campaigns, health and safety promotions (UV protection messaging), and any event where portability matters. The folding mechanism is surprisingly durable -- tested to 5,000 fold cycles. At $1.50-3.50 per pair, they are a conversation starter and a practical giveaway that people actually keep.',
    price: '$1.50 - $3.50',
    moq: '1,000 pcs',
    features: ['Folds Flat', '5,000 Cycle Tested', 'Branded Pouch Included', 'Conversation Starter'],
  },
  {
    name: 'Kids Promo Sunglasses',
    description: 'Unbreakable, UV400-protected promotional sunglasses sized for children. Flexible TPEE frame that bends without breaking, soft silicone temple tips, and impact-resistant polycarbonate lenses. Perfect for family-friendly events, school programs, children\'s charities, and brand campaigns targeting parents. Available in bright colors (red, blue, yellow, pink, green) with fun lens tints. Your logo printed on lens or temples. Kids love getting their own sunglasses at events, and parents appreciate the UV protection -- a win-win for brand perception.',
    price: '$1.00 - $2.50',
    moq: '1,000 pcs',
    features: ['Unbreakable TPEE Frame', 'UV400 for Kids', 'Bright Colors', 'Soft Silicone Tips'],
  },
  {
    name: 'Custom Event Package',
    description: 'Tell us about your event and we will design the complete promotional sunglass package. Frame style, lens tint, branding method, packaging, and distribution logistics -- all handled by our team. This is our most popular option for medium-to-large events because it removes the complexity of coordinating multiple vendors. We have packaged sunglasses for music festivals (10,000+ pairs), corporate retreats (500-2,000 pairs), product launches (1,000-5,000 pairs), political campaigns (20,000+ pairs), and tourism boards (50,000+ pairs).',
    price: '$1.00 - $8.00',
    moq: '200 pcs',
    features: ['Fully Customizable', 'Design Support', 'Packaging Included', 'Direct Shipping'],
  },
]

export default function PromotionalSunglassesPage() {
  return (
    <>
      <ProductSchema product={{
        name: 'Promotional Sunglasses',
        description: 'Custom branded promotional sunglasses for events, corporate gifts, and brand campaigns. UV400 protection, custom logo, bulk pricing. Full OEM service with fast turnaround.',
        minPrice: '0.80',
        maxPrice: '8.00'
      }} />
      <BreadcrumbListSchema items={[
        { name: 'Home', url: 'https://eyeviewsunglasses.com' },
        { name: 'Products', url: 'https://eyeviewsunglasses.com/products' },
        { name: 'Promotional Sunglasses', url: 'https://eyeviewsunglasses.com/products/promotional' }
      ]} />
      <FAQPageSchema faqs={promoFaqs} />

      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-primary-600">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Promotional Sunglasses</span>
          </nav>

          {/* Hero Image with Schema */}
          <div className="mb-12">
            <img
              src="/products/promotional.svg"
              alt="Promotional Sunglasses - Custom Branded Eyewear for Events and Campaigns"
              loading="lazy"
              className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Promotional Sunglasses Manufacturer
            </h1>
          </div>

          {/* Product Story / Overview */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="text-xl leading-relaxed mb-4">
                Every year, brands spend <strong>billions of dollars on promotional products</strong> -- the stuff given away at trade shows, conferences, festivals, and corporate events. And sunglasses consistently rank among the top 5 most-wanted promotional items (<a href="https://www.ppaint.org" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">PPAI Promotional Product Industry Report</a>). Why? Because they are useful, desirable, highly visible (worn on your face, in public, in photos), and they carry your brand logo wherever they go. A single pair of branded sunglasses can be seen by thousands of people over its lifetime.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                The problem is that most promotional sunglasses come from distributors who mark up factory prices 5-10x. You pay $8-15 per pair from a promotional product company for something that costs $0.80-3.00 to manufacture. When you order direct from us, you get the same (or better) quality at factory prices, with full customization and UV400 certification. We have produced promotional sunglasses for brands across 30+ countries -- from local boutique events with 200 pairs to multinational campaigns with 250,000 pairs.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Here is the thing about promotional sunglasses that most buyers do not realize: <strong>quality matters even for free stuff</strong>. If the sunglasses break after one use, the customer associates that broken quality with your brand. If the lenses scratch, the frames bend, or the tint is uneven, it reflects poorly on the brand that gave them away. We make sure that even our $0.80 promotional sunglasses provide real UV protection, decent optics, and enough durability to last through an entire summer. Your brand deserves that.
              </p>
            </div>
          </div>

          {/* Branding Methods */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Branding Methods for Promotional Sunglasses</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              How your logo gets on the sunglasses. Each method has different costs, visual impact, and durability.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: '🖨️', name: 'Lens Printing', cost: '$0.10-0.30/pair', desc: 'Screen-print your logo directly on the lens. Most visible branding option -- your logo is front and center, visible from up to 20 feet away. Best for simple logos (1-2 colors, bold shapes). The ink is UV-cured and scratch-resistant. Does not affect lens clarity or UV protection.' },
                { icon: '⚡', name: 'Laser Engraving', cost: '$0.15-0.40/pair', desc: 'Laser-burn your logo onto the temple arm. Permanent, subtle, and premium-looking. Works on any plastic frame color. The engraving is recessed into the surface so it cannot be rubbed off. Best for text-based logos and brands that want a more sophisticated look.' },
                { icon: '🏷️', name: 'Metal Logo Plate', cost: '$0.50-1.00/pair', desc: 'A small metal badge (zinc alloy or stainless steel) with your logo, attached to the temple arm with rivets or adhesive. This is the premium branding option -- it makes promotional sunglasses look like a real branded product. Available in gold, silver, gunmetal, and rose gold finishes.' },
                { icon: '🔥', name: 'Embossed/Debossed Logo', cost: '$0.30-0.60/pair', desc: 'Press your logo into the frame material during injection molding -- the logo becomes part of the frame itself. No ink, no plate, no anything to wear off. Available for acetate frames and custom injection-molded frames. Requires a custom mold ($300-500 one-time tooling cost) but the per-unit cost is very low for large orders.' },
                { icon: '📦', name: 'Branded Packaging', cost: '$0.20-2.00/pair', desc: 'Custom printed box, pouch, or hang tag with your brand. Even if the sunglasses themselves have minimal branding, the packaging becomes a brand experience. Options include: printed cardboard box ($0.30-1.00), custom poly bag with print ($0.10-0.30), branded microfiber pouch ($0.50-1.50), or hang tag with lanyard ($0.10-0.20).' },
                { icon: '🎨', name: 'Custom Color Match', cost: '$0.10-0.50/pair', desc: 'Match your brand colors exactly -- frame color, lens tint, and even temple tip color. We Pantone-match all colors to your brand guidelines. For orders over 2,000 pairs, custom frame colors are included at no extra charge. For smaller orders, there is a small color-mixing fee. Custom colors make your promotional sunglasses instantly recognizable as yours.' },
              ].map((method, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="text-3xl mb-3">{method.icon}</div>
                  <h3 className="text-lg font-bold mb-1">{method.name}</h3>
                  <div className="text-primary-600 text-sm font-semibold mb-3">{method.cost}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{method.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Products Grid */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Promotional Sunglass Options</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-orange-100 to-amber-200 flex items-center justify-center">
                    <span className="text-7xl group-hover:scale-110 transition-transform duration-300">🎯</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.map((feature, i) => (
                        <span key={i} className="bg-orange-50 text-orange-700 text-xs px-2.5 py-1 rounded-full">{feature}</span>
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

          {/* Event Types */}
          <section className="mb-20 bg-orange-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-4">What Events Are Promotional Sunglasses Best For?</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Sunglasses work for almost any outdoor or summer event. Here are the most common use cases we see.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: '🎵', title: 'Music Festivals & Concerts', desc: 'Hand out branded sunglasses at the entrance, sell them at merchandise booths, or include them in VIP packages. Festival attendees are outside all day and desperate for sun protection. Your brand gets seen by thousands of highly engaged consumers in a positive, memorable context.' },
                { icon: '🏢', title: 'Trade Shows & Conventions', desc: 'Trade show attendees collect dozens of swag items -- most end up in the trash. Sunglasses are different. They are useful, wearable, and stand out from the sea of pens and notebooks. Place them on your booth table as a "grab one" item or include them in your conference bag.' },
                { icon: '🏃', title: 'Marathons & Sporting Events', desc: 'Sponsor a local marathon, cycling event, or triathlon and hand out branded sunglasses at the finish line. Athletes are outside, wearing sunglasses is part of the sport culture, and they are a health-conscious demographic that values UV protection. Perfect fit for health, fitness, and outdoor brands.' },
                { icon: '🏖️', title: 'Beach & Resort Promotions', desc: 'Hotels, resorts, and tourism boards order promotional sunglasses as guest amenities or activity inclusions. Branded sunglasses in the minibar, at the pool bar, or as part of a "beach kit" (sunglasses + sunscreen + tote bag). Guests wear them all vacation and take them home -- your brand travels with them.' },
                { icon: '🎓', title: 'University & Campus Events', desc: 'Orientation week, homecoming, graduation -- university events draw thousands of students who love free stuff and wear sunglasses as a fashion accessory. Round frames and colorful options work best here. Brand awareness among college students translates to long-term brand loyalty as they enter the workforce.' },
                { icon: '🚗', title: 'Product Launches & Car Events', desc: 'Automotive brands, tech companies, and lifestyle brands use promotional sunglasses at product launch events. The sunglasses become part of the event experience -- handed out as attendees step outside for photos, included in press kits, or sold as limited-edition merchandise. Custom packaging makes them feel like a premium gift.' },
              ].map((event, i) => (
                <div key={i} className="bg-white rounded-xl p-6">
                  <div className="text-3xl mb-3">{event.icon}</div>
                  <h3 className="font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{event.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Cost Comparison */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4">Direct-from-Factory vs. Promotional Distributor</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
              Here is what you save by ordering direct from the manufacturer instead of going through a promotional product company.
            </p>

            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <table className="w-full">
                  <thead className="bg-gray-900 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Order Type</th>
                      <th className="px-6 py-4 text-left font-semibold">Per-Pair Cost</th>
                      <th className="px-6 py-4 text-left font-semibold">1,000 Pairs</th>
                      <th className="px-6 py-4 text-left font-semibold">5,000 Pairs</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="bg-red-50">
                      <td className="px-6 py-4 font-semibold">Promo Distributor</td>
                      <td className="px-6 py-4">$8-15</td>
                      <td className="px-6 py-4 text-red-600 font-bold">$8,000-15,000</td>
                      <td className="px-6 py-4 text-red-600 font-bold">$40,000-75,000</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="px-6 py-4 font-semibold">EyeView Direct</td>
                      <td className="px-6 py-4">$0.80-3.00</td>
                      <td className="px-6 py-4 text-green-600 font-bold">$800-3,000</td>
                      <td className="px-6 py-4 text-green-600 font-bold">$4,000-15,000</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold">Your Savings</td>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4 text-green-700 font-bold">Up to $12,000</td>
                      <td className="px-6 py-4 text-green-700 font-bold">Up to $60,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-3 text-center">
                Both include UV400 protection and basic branding. Distributor prices from PPAI market research.
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-10">Promotional Sunglasses FAQ</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {promoFaqs.map((faq, index) => (
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
              <Link href="/products/kids" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">👶</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Kids Sunglasses</h3>
                <p className="text-gray-600 text-sm">Unbreakable kids sunglasses in fun colors. Great for family events, school programs, and summer camp promotions.</p>
              </Link>
              <Link href="/products/aviator" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">✈️</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Aviator Sunglasses</h3>
                <p className="text-gray-600 text-sm">Metal aviator frames with premium feel. Ideal for corporate gifts and executive-level promotional campaigns.</p>
              </Link>
              <Link href="/blog/custom-sunglasses-packaging" className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">📦</div>
                <h3 className="text-xl font-bold group-hover:text-primary-600 transition-colors mb-2">Packaging Guide</h3>
                <p className="text-gray-600 text-sm">Read our complete guide to custom sunglasses packaging -- boxes, pouches, cases, and branding options for promotional orders.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need Promotional Sunglasses for Your Next Event?</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Tell us about your event -- date, quantity, and brand requirements. We will send you a custom quote with frame options, branding mockups, and a production timeline within 24 hours. No minimum commitment for the first order.
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
