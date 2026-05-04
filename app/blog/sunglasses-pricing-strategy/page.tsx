import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sunglasses Pricing Strategy: From Factory Cost to Retail Price',
  description: 'A factory owner reveals the real economics of sunglasses pricing — factory costs, wholesale markup, retail margins, and pricing strategies that work for new and established brands.',
  keywords: 'sunglasses pricing, eyewear markup, wholesale sunglasses pricing, sunglasses profit margin, sunglasses retail price strategy',
  alternates: {
    canonical: '/blog/sunglasses-pricing-strategy',
    languages: {
      'en': '/blog/sunglasses-pricing-strategy',
      'es': '/es/blog/sunglasses-pricing-strategy',
    },
  },
}

export default function SunglassesPricingStrategyPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Sunglasses Pricing Strategy: From Factory Cost to Retail Price",
          "datePublished": "2026-05-04",
          "dateModified": "2026-05-04",
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "A factory owner reveals the real economics of sunglasses pricing — from factory floor to retail shelf.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/blog/sunglasses-pricing-strategy" }
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the typical markup on sunglasses?",
              "acceptedAnswer": { "@type": "Answer", "text": "The typical markup chain: Factory cost × 2-3 = wholesale price × 2-2.5 = retail price. So a pair that costs $5 to manufacture might wholesale at $12-15 and retail at $25-35. Direct-to-consumer (DTC) brands skip the wholesale step and capture the full margin, selling that same $5 pair for $25-45. Luxury brands apply even higher markups — a $10-20 factory cost pair can retail for $200-500+." }
            },
            {
              "@type": "Question",
              "name": "How much do sunglasses cost to manufacture?",
              "acceptedAnswer": { "@type": "Answer", "text": "ODM sunglasses: $3-8 per pair (including polarized lenses and basic packaging). OEM custom designs: $5-15+ per pair depending on materials and complexity. Premium materials (Italian acetate, Zeiss lenses) can push costs to $15-30 per pair. These are FOB factory costs — add $2-5 per pair for shipping, duties, and packaging to get your landed cost." }
            },
            {
              "@type": "Question",
              "name": "What price should I sell my sunglasses for?",
              "acceptedAnswer": { "@type": "Answer", "text": "Your retail price depends on your positioning: Budget/value ($15-30): ODM frames, basic packaging, competing on price. Mid-range ($30-80): Quality ODM or basic OEM, good branding, DTC focus. Premium ($80-150): Custom OEM designs, premium materials, strong brand story. Luxury ($150+): Exclusive designs, premium everything, brand prestige. Most new DTC brands find success in the $30-60 range, which offers good margins on $5-10 factory costs while remaining accessible." }
            },
            {
              "@type": "Question",
              "name": "Should I offer free shipping on sunglasses?",
              "acceptedAnswer": { "@type": "Answer", "text": "Yes, if you're selling DTC. In 2026, free shipping is table stakes for online retail. Build the shipping cost ($3-7 per order) into your retail price. A pair priced at $42 with free shipping will outperform the same pair at $35 + $7 shipping, even though the customer pays the same amount. The psychology of 'free shipping' is powerful and well-documented." }
            }
          ]
        })}} />

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Business</span>
            <span>May 4, 2026</span>
            <span>•</span>
            <span>13 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sunglasses Pricing Strategy: From Factory Cost to Retail Price
          </h1>
          <p className="text-xl text-gray-600">
            I see both sides of the pricing equation every day — what it costs to make sunglasses and 
            what they sell for. The gap is wider than most people realize, and understanding it is the 
            key to building a profitable brand.
          </p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div>
              <div className="font-medium text-gray-900">Jacky Chen</div>
              <div className="text-sm text-gray-500">Founder, EyeView Sunglasses</div>
            </div>
          </div>
        </header>

        <nav className="bg-gray-100 rounded-xl p-6 mb-12">
          <h2 className="font-bold mb-4">Table of Contents</h2>
          <ul className="space-y-2">
            <li><a href="#factory-costs" className="text-primary-600 hover:underline">What Sunglasses Actually Cost to Make</a></li>
            <li><a href="#landed-cost" className="text-primary-600 hover:underline">Your True Landed Cost</a></li>
            <li><a href="#markup-chain" className="text-primary-600 hover:underline">The Markup Chain: Factory → Wholesale → Retail</a></li>
            <li><a href="#pricing-tiers" className="text-primary-600 hover:underline">Four Pricing Tiers &amp; Who They&apos;re For</a></li>
            <li><a href="#dtc-vs-wholesale" className="text-primary-600 hover:underline">DTC vs Wholesale: Where the Money Is</a></li>
            <li><a href="#pricing-psychology" className="text-primary-600 hover:underline">Pricing Psychology That Works</a></li>
            <li><a href="#common-mistakes" className="text-primary-600 hover:underline">Pricing Mistakes That Kill Brands</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">FAQ</a></li>
          </ul>
        </nav>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Here&apos;s a fact that blows most people&apos;s minds: a pair of sunglasses that retails 
            for $150 typically costs $8-$15 to manufacture. That&apos;s a 10-20x markup. And the $300+ 
            luxury pairs? Often $15-$30 to produce. The eyewear industry runs on massive margins — 
            and that&apos;s exactly what makes it attractive for new brands.
          </p>

          <h2 id="factory-costs" className="text-3xl font-bold mt-16 mb-6">What Sunglasses Actually Cost to Make</h2>
          <p>
            Let me break down the component costs of a typical pair of sunglasses. These are 2026 
            factory prices based on what we charge and what I know competitors charge.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Component Cost Breakdown</h3>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left">Component</th>
                  <th className="px-6 py-4 text-left">Budget</th>
                  <th className="px-6 py-4 text-left">Mid-Range</th>
                  <th className="px-6 py-4 text-left">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4">Frame (material + labor)</td><td className="px-6 py-4">$1.00–$2.00</td><td className="px-6 py-4">$2.50–$5.00</td><td className="px-6 py-4">$5.00–$12.00</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Lenses (pair)</td><td className="px-6 py-4">$0.50–$1.50</td><td className="px-6 py-4">$1.50–$3.00</td><td className="px-6 py-4">$3.00–$8.00</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">Hinges &amp; hardware</td><td className="px-6 py-4">$0.20–$0.50</td><td className="px-6 py-4">$0.50–$1.50</td><td className="px-6 py-4">$1.50–$3.00</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Nose pads</td><td className="px-6 py-4">$0.05–$0.10</td><td className="px-6 py-4">$0.10–$0.30</td><td className="px-6 py-4">$0.30–$0.80</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">Logo application</td><td className="px-6 py-4">$0.10–$0.20</td><td className="px-6 py-4">$0.20–$0.50</td><td className="px-6 py-4">$0.50–$1.50</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Assembly &amp; QC</td><td className="px-6 py-4">$0.50–$1.00</td><td className="px-6 py-4">$1.00–$2.00</td><td className="px-6 py-4">$2.00–$4.00</td></tr>
                <tr className="bg-white font-bold"><td className="px-6 py-4">FOB Total</td><td className="px-6 py-4">$2.35–$5.30</td><td className="px-6 py-4">$5.80–$12.30</td><td className="px-6 py-4">$12.30–$29.30</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            The biggest cost drivers are <strong>frame material</strong> and <strong>lens quality</strong>. 
            A standard TR90 frame with TAC polarized lenses costs $3-$5. The same frame shape in Italian 
            Mazzucchelli acetate with CR-39 polarized lenses jumps to $8-$12. For a deep dive on lens 
            costs, check our{' '}
            <Link href="/blog/sunglasses-lens-guide" className="text-primary-600 hover:underline">lens guide</Link>{' '}
            and{' '}
            <Link href="/blog/frame-material-comparison" className="text-primary-600 hover:underline">frame material comparison</Link>.
          </p>

          <h2 id="landed-cost" className="text-3xl font-bold mt-16 mb-6">Your True Landed Cost</h2>
          <p>
            Factory cost is not your real cost. You need to add everything that happens between the 
            factory and your customer&apos;s hands:
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-3">Example: Mid-Range ODM Sunglasses</h3>
            <ul className="text-blue-800 space-y-2">
              <li><strong>Factory cost (FOB):</strong> $6.00</li>
              <li><strong>Packaging (hard case + cloth + box):</strong> $2.50</li>
              <li><strong>International shipping:</strong> $1.50 (sea freight) to $4.00 (air)</li>
              <li><strong>Import duty (2% US):</strong> $0.12</li>
              <li><strong>Insurance &amp; customs broker:</strong> $0.30</li>
              <li><strong>Domestic warehousing:</strong> $0.20</li>
              <li className="font-bold pt-2 border-t border-blue-300">Total landed cost: $10.62–$13.12</li>
            </ul>
          </div>

          <p>
            This is the number you use for all pricing calculations — not the factory FOB price. 
            I&apos;ve seen too many new brands price based on factory cost and then wonder why their 
            margins are thinner than expected. For more on import costs, see our{' '}
            <Link href="/blog/import-sunglasses-guide" className="text-primary-600 hover:underline">import guide</Link>.
          </p>

          <h2 id="markup-chain" className="text-3xl font-bold mt-16 mb-6">The Markup Chain: Factory → Wholesale → Retail</h2>
          <p>
            The traditional eyewear markup chain is brutal — in a good way if you&apos;re the brand:
          </p>
          <ol>
            <li><strong>Factory cost → Wholesale price:</strong> 2-3x markup. A $6 factory cost becomes a $12-$18 wholesale price.</li>
            <li><strong>Wholesale → Retail price:</strong> 2-2.5x markup. That $15 wholesale price becomes $30-$38 retail.</li>
            <li><strong>Total markup:</strong> 4-8x from factory to retail. That $6 pair sells for $25-$50.</li>
          </ol>
          <p>
            For <strong>DTC brands</strong>, you skip the wholesale step entirely. You capture the full 
            4-8x markup instead of splitting it with a retailer. That&apos;s why DTC sunglasses brands 
            can offer &quot;premium quality at half the price&quot; and still make excellent margins.
          </p>

          <h2 id="pricing-tiers" className="text-3xl font-bold mt-16 mb-6">Four Pricing Tiers &amp; Who They&apos;re For</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">Tier 1: Value ($15-$30 retail)</h3>
          <ul>
            <li><strong>Factory cost:</strong> $2-$5 per pair</li>
            <li><strong>Landed cost:</strong> $5-$9 per pair</li>
            <li><strong>Gross margin (DTC):</strong> 55-70%</li>
            <li><strong>Who it&apos;s for:</strong> High-volume brands, Amazon sellers, promotional products, festival/event sunglasses</li>
            <li><strong>Strategy:</strong> Volume is king. You need to sell a lot of pairs to make this work. Low customer acquisition cost is essential.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Tier 2: Mid-Range ($30-$80 retail)</h3>
          <ul>
            <li><strong>Factory cost:</strong> $5-$10 per pair</li>
            <li><strong>Landed cost:</strong> $9-$16 per pair</li>
            <li><strong>Gross margin (DTC):</strong> 70-80%</li>
            <li><strong>Who it&apos;s for:</strong> Most DTC startups, lifestyle brands, niche market brands</li>
            <li><strong>Strategy:</strong> The sweet spot for new brands. Good margins, accessible price point, room for marketing spend. This is where brands like Knockaround, Blenders, and Shady Rays live.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Tier 3: Premium ($80-$150 retail)</h3>
          <ul>
            <li><strong>Factory cost:</strong> $8-$15 per pair</li>
            <li><strong>Landed cost:</strong> $14-$24 per pair</li>
            <li><strong>Gross margin (DTC):</strong> 75-85%</li>
            <li><strong>Who it&apos;s for:</strong> Brands with strong design identity, custom OEM designs, sustainability-focused brands</li>
            <li><strong>Strategy:</strong> Requires unique designs, premium packaging, and a compelling brand story. Photography and presentation must be flawless. Customer lifetime value becomes critical.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Tier 4: Luxury ($150+ retail)</h3>
          <ul>
            <li><strong>Factory cost:</strong> $12-$30+ per pair</li>
            <li><strong>Landed cost:</strong> $20-$45+ per pair</li>
            <li><strong>Gross margin (DTC):</strong> 80-90%</li>
            <li><strong>Who it&apos;s for:</strong> Fashion labels, celebrity brands, design-forward eyewear brands</li>
            <li><strong>Strategy:</strong> Brand is everything. The product needs to be excellent, but the brand story, experience, and exclusivity drive the price. Requires significant marketing investment and patience.</li>
          </ul>

          <h2 id="dtc-vs-wholesale" className="text-3xl font-bold mt-16 mb-6">DTC vs Wholesale: Where the Money Is</h2>
          <p>
            Let me show you the math on the same pair of sunglasses sold through different channels:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left">Channel</th>
                  <th className="px-6 py-4 text-left">Your Price</th>
                  <th className="px-6 py-4 text-left">Your Revenue</th>
                  <th className="px-6 py-4 text-left">Your Margin</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4">DTC (your website)</td><td className="px-6 py-4">$45 retail</td><td className="px-6 py-4">$45</td><td className="px-6 py-4">$33 (73%)</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Amazon</td><td className="px-6 py-4">$45 retail</td><td className="px-6 py-4">$31 (after fees)</td><td className="px-6 py-4">$19 (42%)</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">Wholesale to retailer</td><td className="px-6 py-4">$22 wholesale</td><td className="px-6 py-4">$22</td><td className="px-6 py-4">$10 (22%)</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Consignment</td><td className="px-6 py-4">$45 retail (60/40 split)</td><td className="px-6 py-4">$27</td><td className="px-6 py-4">$15 (33%)</td></tr>
              </tbody>
            </table>
            <p className="text-sm text-gray-500 mt-2">*Based on $12 landed cost per pair</p>
          </div>

          <p>
            The DTC margin is <strong>3.3x higher than wholesale</strong> on the same product. That&apos;s 
            why the smart play for new brands is to start DTC, build a customer base, and then selectively 
            add wholesale accounts once you have leverage to negotiate better terms.
          </p>

          <h2 id="pricing-psychology" className="text-3xl font-bold mt-16 mb-6">Pricing Psychology That Works</h2>
          <p>
            Pricing isn&apos;t just math — it&apos;s psychology. Here are the strategies I&apos;ve seen 
            our most successful clients use:
          </p>
          <ul>
            <li className="mb-4"><strong>Charm pricing ($39 vs $40):</strong> Still works. $39 feels meaningfully cheaper than $40 even though it&apos;s a $1 difference. Most successful DTC sunglasses brands price at $29, $39, $49, or $59.</li>
            <li className="mb-4"><strong>Free shipping threshold:</strong> &quot;Free shipping on orders over $50&quot; encourages customers to buy two pairs. If your average order value is $39, a $50 free shipping threshold can increase AOV by 30-40%.</li>
            <li className="mb-4"><strong>Bundle pricing:</strong> &quot;Buy 2, get 20% off&quot; or &quot;3 for $99&quot; (when individual price is $39). Bundles increase AOV and move more inventory per transaction.</li>
            <li className="mb-4"><strong>Anchor pricing:</strong> Show your retail price alongside a &quot;comparable at $120&quot; reference. This works especially well if you&apos;re positioning as a DTC brand that cuts out middlemen.</li>
            <li className="mb-4"><strong>Price consistency across styles:</strong> Consider pricing all styles at the same price point (e.g., all $39). It simplifies the buying decision and eliminates the &quot;is the $49 pair really better than the $39 pair?&quot; hesitation.</li>
          </ul>

          <h2 id="common-mistakes" className="text-3xl font-bold mt-16 mb-6">Pricing Mistakes That Kill Brands</h2>
          <ol>
            <li className="mb-4"><strong>Pricing too low.</strong> This is the #1 mistake I see. New brands undervalue their product, price at $19-$25, and then can&apos;t afford marketing, can&apos;t handle returns, and can&apos;t reinvest in inventory. You need margins, and you need them to be healthy. Better to sell fewer pairs at $39 than more at $19.</li>
            <li className="mb-4"><strong>Forgetting about customer acquisition cost (CAC).</strong> If it costs you $10 in ads to acquire a customer and your margin is $15, you&apos;re only making $5 per sale. That&apos;s razor-thin. Build your pricing to survive a $10-$15 CAC and still leave room for profit.</li>
            <li className="mb-4"><strong>Not accounting for returns.</strong> Budget 5-10% return rate for online sunglasses sales. If you price too tight, returns eat your profit. Price with a cushion.</li>
            <li className="mb-4"><strong>Racing to the bottom on Amazon.</strong> Amazon price wars destroy value for everyone. If you&apos;re going to sell on Amazon, maintain price parity with your website. Competing on price alone is a losing strategy unless you have massive scale.</li>
            <li className="mb-4"><strong>Changing prices too often.</strong> Frequent sales and discounts train customers to wait for deals. If you must discount, use limited-time events (Black Friday, seasonal clearance) rather than constant sales. Your full price should be your real price 90% of the time.</li>
          </ol>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-green-900 mb-2">💡 My Pricing Formula for New Brands</h3>
            <p className="text-green-800">
              <strong>Retail price = Landed cost × 4-5 (DTC) or × 2.5-3 (wholesale).</strong> If your 
              landed cost is $10/pair, price DTC at $40-$50. This gives you room for marketing ($8-$12 
              per customer), returns (5-10%), and a healthy profit ($10-$15 per pair). Simple, sustainable, 
              and it works for 80% of mid-range brands. For more on getting your startup budget right, 
              check our{' '}
              <Link href="/blog/sunglasses-startup-cost" className="text-green-700 underline">startup cost guide</Link>.
            </p>
          </div>

          <h2 id="faq" className="text-3xl font-bold mt-16 mb-6">FAQ</h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">What is the typical markup on sunglasses?</h3>
              <p className="text-gray-600">
                Factory cost × 2-3 = wholesale price × 2-2.5 = retail price. Total markup: 4-8x from 
                factory to retail. DTC brands capture the full margin; wholesale splits it with retailers. 
                Luxury brands apply 10-20x+ markups.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">How much do sunglasses cost to manufacture?</h3>
              <p className="text-gray-600">
                ODM: $3-$8/pair. OEM: $5-$15+/pair. Premium materials can push to $15-$30/pair. 
                Add $4-$8 for shipping, duties, and packaging to get your true landed cost.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">What price should I sell my sunglasses for?</h3>
              <p className="text-gray-600">
                Value: $15-$30. Mid-range: $30-$80. Premium: $80-$150. Luxury: $150+. Most new DTC 
                brands succeed in the $30-$60 range — good margins, accessible pricing, room for 
                marketing spend.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Should I offer free shipping on sunglasses?</h3>
              <p className="text-gray-600">
                Yes, for DTC sales. Build shipping cost ($3-$7) into your retail price. &quot;$42 with 
                free shipping&quot; outperforms &quot;$35 + $7 shipping&quot; consistently. It&apos;s 
                table stakes in 2026 e-commerce.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Need Help With Your Pricing Model?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I&apos;ll give you a detailed cost breakdown for your specific product — materials, 
              lenses, packaging, and shipping. With the real numbers, you can build a pricing 
              strategy that actually works.
            </p>
            <Link href="/contact" className="btn-primary">
              Get a Detailed Cost Breakdown
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">More From the Factory Floor</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/sunglasses-startup-cost" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">How Much Does It Cost to Start a Sunglasses Brand?</h3>
                <p className="text-gray-600 text-sm">Complete budget breakdown from $5K bootstrap to $50K premium launch.</p>
              </Link>
              <Link href="/blog/oem-vs-odm" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">OEM vs ODM: What&apos;s the Difference?</h3>
                <p className="text-gray-600 text-sm">The manufacturing model you choose directly impacts your pricing power.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
