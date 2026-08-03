import Link from 'next/link'
import type { Metadata } from 'next'
import { KeyTakeaways } from '@/components/GEOContent'

export const metadata: Metadata = {
  title: 'How to Sell Sunglasses on Shopify vs Amazon: 2026 Guide for Brand Owners',
  description: 'Real factory perspective on selling sunglasses on Shopify vs Amazon. Margins, fees, fulfillment, brand control — honest comparison from someone who supplies both channels.',
  keywords: 'sell sunglasses on Shopify, sell sunglasses on Amazon, sunglasses ecommerce, sunglasses DTC brand, Shopify vs Amazon sunglasses, sunglasses FBA, wholesale sunglasses online',
  openGraph: {
    title: 'How to Sell Sunglasses on Shopify vs Amazon: 2026 Guide for Brand Owners',
    description: 'Real factory perspective on selling sunglasses on Shopify vs Amazon. Margins, fees, fulfillment, brand control — honest comparison from someone who supplies both channels.',
    type: 'article',
    publishedTime: '2026-07-17',
    url: 'https://eyeviewsunglasses.com/blog/sell-sunglasses-shopify-amazon/',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/blog/sell-sunglasses-shopify-amazon/',
  },
}

const blogFaqs = [
  {
    question: "Which is better for selling sunglasses — Shopify or Amazon?",
    answer: "Depends on your goal. Amazon gets you sales faster (built-in traffic, 300M+ customers), but Shopify builds a real brand with higher margins. Our most successful customers use both: Amazon for discovery, Shopify for repeat purchases."
  },
  {
    question: "What's the average profit margin selling sunglasses on Amazon vs Shopify?",
    answer: "Amazon: 25-40% after FBA fees and PPC. Shopify: 60-80% after shipping and marketing. But Amazon moves 3-5x more volume for most brands. That's why serious operators run both channels."
  },
  {
    question: "How much does it cost to launch a sunglasses brand on Shopify?",
    answer: "Plan for $2,000-5,000 to start: inventory (300-500 units at $3-8 each), Shopify subscription ($29-79/mo), product photography ($300-800), and initial ad spend ($500-1,500). Add $1,000-2,500 if you're launching on Amazon too for FBA fees and PPC."
  },
  {
    question: "Do I need UPC codes or GTINs to sell sunglasses on Amazon?",
    answer: "Yes. Amazon requires GTINs (UPC codes) for most sunglasses categories. You can buy legitimate UPC codes from GS1 ($250 for 10 codes). If you're doing private label through GS1 US, one UPC prefix covers your entire catalog. Get brand registry approved early — it unlocks A+ Content and protects your listings."
  },
]

export default function SellSunglassesShopifyAmazonPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      {/* Breadcrumb + Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How to Sell Sunglasses on Shopify vs Amazon: 2026 Guide for Brand Owners",
            "datePublished": "2026-07-17",
            "dateModified": "2026-07-17",
            "description": "Real factory perspective on selling sunglasses on Shopify vs Amazon. Margins, fees, fulfillment, brand control — honest comparison from someone who supplies both channels.",
            "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
            "publisher": { "@type": "Organization", "name": "EyeView Sunglasses", "logo": { "@type": "ImageObject", "url": "https://eyeviewsunglasses.com/logo.png" } }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": blogFaqs.map(f => ({
              "@type": "Question",
              "name": f.question,
              "acceptedAnswer": { "@type": "Answer", "text": f.answer }
            }))
          })
        }}
      />

      <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-primary-600">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/blog/" className="hover:text-primary-600">Blog</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-900">How to Sell Sunglasses on Shopify vs Amazon: 2026 Guide for Brand Owners</span>
      </nav>

      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        How to Sell Sunglasses on Shopify vs Amazon: 2026 Guide for Brand Owners
      </h1>
      <p className="text-gray-500 mb-8">Published July 17, 2026 · 12 min read</p>

        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
          <div>
            <div className="font-medium text-gray-900">Jacky Chen</div>
            <div className="text-sm text-gray-500">Founder, EyeView Sunglasses</div>
          </div>
        </div>

        <nav className="bg-gray-100 rounded-xl p-6 mb-12">
          <h2 className="font-bold mb-4">Table of Contents</h2>
          <ul className="space-y-2">
            <li><a href="#launch-costs" className="text-primary-600 hover:underline">What It Actually Costs to Launch (Real Numbers)</a></li>
            <li><a href="#comparison" className="text-primary-600 hover:underline">Shopify vs Amazon: The Comparison That Actually Matters</a></li>
            <li><a href="#shopify-playbook" className="text-primary-600 hover:underline">Selling on Shopify: The DTC Playbook</a></li>
            <li><a href="#amazon-playbook" className="text-primary-600 hover:underline">Selling on Amazon: The FBA Reality</a></li>
            <li><a href="#hybrid" className="text-primary-600 hover:underline">The Hybrid Play: Why Smart Brands Use Both</a></li>
            <li><a href="#which-channel" className="text-primary-600 hover:underline">Which Channel Is Right for You?</a></li>
            <li><a href="#mistakes" className="text-primary-600 hover:underline">4 Mistakes I See New Sellers Make</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Questions I Get Every Week</a></li>
          </ul>
        </nav>

      {/* Quick Summary — Reddit-style TL;DR at top */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-10">
        <p className="font-bold text-blue-900 mb-2">The Short Version (for people who hate fluff)</p>
        <p className="text-blue-800">
          I make sunglasses for a living. Every week I talk to brand owners selling on Shopify, Amazon, or both. Here's the honest truth: <strong>Amazon will get you faster sales, Shopify will build you a real business.</strong> The smartest operators I know use both — Amazon for customer acquisition, Shopify for brand equity and margin. If you buy 500 pairs of decent polarized sunglasses at $5 each ($2,500 investment), you can clear $15,000-25,000 in revenue across both channels in your first 6 months. This isn't theory — I've watched dozens of my customers do exactly this. Here's how.
        </p>
      </div>

      {/* GEO: Quick Stats */}
      <KeyTakeaways items={[
        "Amazon: 25-40% net margin after fees, but 300M+ built-in customers",
        "Shopify: 60-80% gross margin, but you bring your own traffic",
        "Most brands spend 20-40% of revenue on customer acquisition across both channels",
        "Sunglasses are one of the highest-margin product categories on both platforms — 3-10x markup from wholesale cost",
        "The winning play: Amazon for discovery + Shopify for repeat buyers",
      ]} />

      {/* Section 1 — The setup cost reality check */}
      <section className="mb-10">
        <h2 id="launch-costs" className="text-2xl font-bold mb-4">What It Actually Costs to Launch (Real Numbers)</h2>
        <p className="text-gray-700 mb-4">
          I've seen too many brand owners blow their entire budget on inventory with nothing left for marketing. Here's what a realistic launch budget looks like in 2026:
        </p>
        
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">Cost Item</th>
                <th className="border p-3 text-left">Shopify Only</th>
                <th className="border p-3 text-left">Amazon Only</th>
                <th className="border p-3 text-left">Both Channels</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-medium">Initial Inventory</td>
                <td className="border p-3">$1,500-2,500</td>
                <td className="border p-3">$2,500-4,000</td>
                <td className="border p-3">$3,000-5,000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3 font-medium">Platform Fees</td>
                <td className="border p-3">$29-79/mo</td>
                <td className="border p-3">$39.99/mo (+FBA)</td>
                <td className="border p-3">$69-119/mo</td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">Product Photography</td>
                <td className="border p-3">$300-800</td>
                <td className="border p-3">$500-1,200*</td>
                <td className="border p-3">$500-1,200</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3 font-medium">UPC/GTIN Codes</td>
                <td className="border p-3">$0</td>
                <td className="border p-3">$250 (GS1)</td>
                <td className="border p-3">$250</td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">Initial Ad Spend</td>
                <td className="border p-3">$500-1,500</td>
                <td className="border p-3">$1,000-2,500 (PPC)</td>
                <td className="border p-3">$1,500-3,000</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3 font-medium">Total Launch Budget</td>
                <td className="border p-3 font-bold text-primary-600">$2,300-4,900</td>
                <td className="border p-3 font-bold text-primary-600">$4,300-8,000</td>
                <td className="border p-3 font-bold text-primary-600">$5,300-9,600</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500">*Amazon requires white-background main images and lifestyle shots. Shopify is more flexible.</p>
      </section>

      {/* Section 2 — Channel comparison */}
      <section className="mb-10">
        <h2 id="comparison" className="text-2xl font-bold mb-4">Shopify vs Amazon: The Comparison That Actually Matters</h2>
        
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">Factor</th>
                <th className="border p-3 text-left">Shopify</th>
                <th className="border p-3 text-left">Amazon</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-medium">Traffic Source</td>
                <td className="border p-3">You drive it (social, SEO, ads, email)</td>
                <td className="border p-3 text-green-700">Built-in — 300M+ buyers already there</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3 font-medium">Gross Margin</td>
                <td className="border p-3 text-green-700">60-80%</td>
                <td className="border p-3">25-40% after FBA + referral fees</td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">Brand Control</td>
                <td className="border p-3 text-green-700">Full control — design, pricing, email list</td>
                <td className="border p-3">Limited — Amazon owns the customer</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3 font-medium">Customer Data</td>
                <td className="border p-3 text-green-700">You own emails, purchase history</td>
                <td className="border p-3">Amazon keeps everything</td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">Fulfillment</td>
                <td className="border p-3">You handle or use 3PL</td>
                <td className="border p-3 text-green-700">FBA — Amazon ships for you</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3 font-medium">Competition</td>
                <td className="border p-3">Depends on your marketing</td>
                <td className="border p-3">Brutal — hundreds of sellers per keyword</td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">Trust Factor</td>
                <td className="border p-3">Must earn it yourself</td>
                <td className="border p-3 text-green-700">Amazon badge = instant trust</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3 font-medium">Best For</td>
                <td className="border p-3">Building a long-term brand</td>
                <td className="border p-3">Fast sales, volume, discovery</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 3 — Shopify strategy */}
      <section className="mb-10">
        <h2 id="shopify-playbook" className="text-2xl font-bold mb-4">Selling on Shopify: The DTC Playbook</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Why Sunglasses Crush on Shopify</h3>
        <p className="text-gray-700 mb-4">
          Sunglasses are practically made for Shopify. Lightweight shipping (under 200g per pair in a case), high perceived value, massive markup potential, and infinite visual content opportunities. A pair that costs you $5 landed can retail at $35-55 on your own store — that's the math that makes DTC sunglasses brands viable.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">The Instagram-to-Shopify Funnel (Still Works in 2026)</h3>
        <p className="text-gray-700 mb-4">
          Don't overcomplicate this. The playbook that's worked for sunglasses brands for the past 5 years still works:
        </p>
        <ol className="list-decimal pl-5 space-y-2 mb-4 text-gray-700">
          <li><strong>Content first.</strong> Post lifestyle photos and short-form videos showing real people wearing your glasses in real situations. Not studio shots — beach, driving, hiking, brunch.</li>
          <li><strong>Run Meta Ads to a collection page, not a single product.</strong> One customer in Australia told me his conversion rate doubled when he switched from single-product ads to a "Shop Our Collection" landing page.</li>
          <li><strong>Capture emails with a 10% pop-up discount.</strong> I know pop-ups are annoying. They also work. A sunglasses brand I supply gets 35% of their revenue from email marketing.</li>
          <li><strong>Retarget cart abandoners.</strong> Average cart abandonment in fashion accessories is 70%. A 3-email recovery sequence gets 10-15% back.</li>
        </ol>

        <h3 className="text-xl font-semibold mt-6 mb-3">Pricing That Makes Sense</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">Wholesale Cost</th>
                <th className="border p-3 text-left">Suggested Retail</th>
                <th className="border p-3 text-left">Gross Margin</th>
                <th className="border p-3 text-left">Positioning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">$1.50-3.00</td>
                <td className="border p-3">$12-25</td>
                <td className="border p-3">75-85%</td>
                <td className="border p-3">Budget / promo / impulse</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3">$4.00-8.00</td>
                <td className="border p-3">$30-55</td>
                <td className="border p-3">70-80%</td>
                <td className="border p-3">Mid-tier DTC (sweet spot)</td>
              </tr>
              <tr>
                <td className="border p-3">$10.00-18.00</td>
                <td className="border p-3">$65-120</td>
                <td className="border p-3">65-75%</td>
                <td className="border p-3">Premium / boutique</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mb-4">
          The $30-55 sweet spot is where most successful DTC sunglasses brands live. It's above impulse-buy territory but below "I need to think about this" territory. Customers buy with less friction.
        </p>
      </section>

      {/* Section 4 — Amazon strategy */}
      <section className="mb-10">
        <h2 id="amazon-playbook" className="text-2xl font-bold mb-4">Selling on Amazon: The FBA Reality</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">Amazon Makes You Money, Just Less of It</h3>
        <p className="text-gray-700 mb-4">
          Here's the math on a typical Amazon sunglasses sale: you sell a pair for $29.99. Amazon takes 15% ($4.50) referral fee. FBA fulfillment costs about $3.50-4.50 depending on size. PPC ads to get that sale might cost $3-5. Your $5 landed cost plus packaging at $1 means your net is around $12-15 — roughly 40-50% margin after everything. That's not bad. But compare it to Shopify where you'd pocket $20-22 on the same pair.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">The Amazon Sunglasses Playbook</h3>
        <ol className="list-decimal pl-5 space-y-2 text-gray-700 mb-4">
          <li><strong>Get Brand Registry first.</strong> Don't list a single product without it. It gives you A+ Content, Brand Store, Sponsored Brands ads, and protection from hijackers. The application takes 2-4 weeks — start early.</li>
          <li><strong>Launch with 3-5 SKUs, not 50.</strong> Test shapes and colors. A wayfarer, an aviator, and a cat-eye in 2 colors each gives you 6 listings. See what ranks, double down on winners.</li>
          <li><strong>Use FBA from day one.</strong> FBM (fulfilled by merchant) sunglasses sell 40-60% less than FBA listings. Prime badge matters. Customers expect 2-day delivery.</li>
          <li><strong>Optimize for "polarized sunglasses" not just "sunglasses."</strong> The general keyword is a bloodbath. Long-tail terms like "polarized aviator sunglasses for men driving" have 1/10th the competition and convert better.</li>
          <li><strong>Price at $24.99-39.99.</strong> Below $20 and customers question the quality. Above $40 and they start comparing to Ray-Ban. The $25-35 range is the sweet spot on Amazon for private label sunglasses.</li>
        </ol>
      </section>

      {/* Section 5 — The hybrid approach */}
      <section className="mb-10">
        <h2 id="hybrid" className="text-2xl font-bold mb-4">The Hybrid Play: Why Smart Brands Use Both</h2>
        <p className="text-gray-700 mb-4">
          Every serious sunglasses brand I supply runs both channels. Here's why: Amazon is a customer acquisition machine, but you don't own those customers. Shopify is where you build relationships and make real margin. The brands doing $500K+ annually follow this pattern:
        </p>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <p className="font-semibold mb-2">The Two-Channel Flow:</p>
          <p className="text-gray-700">
            Customer discovers your brand on Amazon → buys one pair → loves it → Googles your brand name → finds your Shopify store with more styles, better photos, and a brand story → buys again at full price → joins your email list → buys every season.
          </p>
        </div>
        <p className="text-gray-700 mb-4">
          A sunglasses brand I supply in Texas does exactly this. Amazon accounts for 60% of first purchases. Shopify accounts for 80% of repeat purchases — with 2x the margin on each one. Their email list drives $3,000-5,000 per send. They built that list from Amazon discovery.
        </p>
      </section>

      {/* Section 6 — Who should use what */}
      <section className="mb-10">
        <h2 id="which-channel" className="text-2xl font-bold mb-4">Which Channel Is Right for You?</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-green-800 mb-3">Start with Shopify If…</h3>
            <ul className="list-disc pl-5 space-y-2 text-green-800">
              <li>You want to build a real brand with a loyal following</li>
              <li>You're good at social media or have an audience</li>
              <li>You want to keep 70-80% margins</li>
              <li>You're okay with slower growth for bigger long-term payoff</li>
              <li>You have a unique design or story that Amazon can't showcase</li>
            </ul>
          </div>
          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-orange-800 mb-3">Start with Amazon If…</h3>
            <ul className="list-disc pl-5 space-y-2 text-orange-800">
              <li>You want sales this month, not next year</li>
              <li>You don't have a social media following yet</li>
              <li>You're comfortable with competitive pricing</li>
              <li>You want Amazon to handle fulfillment and returns</li>
              <li>Your designs are solid but not radically unique</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 7 — Common mistakes */}
      <section className="mb-10">
        <h2 id="mistakes" className="text-2xl font-bold mb-4">4 Mistakes I See New Sellers Make (Don't Be That Person)</h2>
        
        <div className="space-y-4">
          <div className="border-l-4 border-red-400 pl-4">
            <h3 className="font-bold text-gray-900">1. Buying 2,000 pairs before testing demand</h3>
            <p className="text-gray-600">Start with 300-500 units across 3-5 styles. Test the market. Reorder your winners. The factory can turn around a reorder in 15-25 days. You're not saving money buying 2,000 pairs you can't sell.</p>
          </div>
          <div className="border-l-4 border-red-400 pl-4">
            <h3 className="font-bold text-gray-900">2. Skimping on product photography</h3>
            <p className="text-gray-600">Sunglasses are visual. Customers can't try them on. Bad photos = low conversions. Spend $500-800 on proper photography. A sunglasses brand I supply increased their conversion rate from 1.2% to 3.8% just by upgrading photos. That's 3x revenue from the same traffic.</p>
          </div>
          <div className="border-l-4 border-red-400 pl-4">
            <h3 className="font-bold text-gray-900">3. Undercutting yourself on price</h3>
            <p className="text-gray-600">I see this constantly. Someone buys sunglasses at $3/pair and sells them for $9.99 because "the big brands are $150." Stop. Price communicates quality. A $3 pair with decent lenses and a nice case can retail for $29.99-39.99. The perceived value comes from presentation, not cost.</p>
          </div>
          <div className="border-l-4 border-red-400 pl-4">
            <h3 className="font-bold text-gray-900">4. Going solo on Amazon without Brand Registry</h3>
            <p className="text-gray-600">Listing sunglasses without Brand Registry is asking for hijackers. Apply for a trademark (costs $250-350 for a basic USPTO filing), get Brand Registry approved, then launch. The protection and A+ Content features are worth 10x the cost and wait time.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 id="faq" className="text-2xl font-bold mb-4">Questions I Get Every Week</h2>
        <div className="space-y-4">
          {blogFaqs.map((faq, i) => (
            <div key={i} className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="bg-primary-50 border border-primary-200 rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold mb-3">Ready to source sunglasses for your online store?</h3>
        <p className="text-gray-600 mb-4">
          We supply sunglasses to brand owners selling on Shopify, Amazon, and both. MOQ as low as 100 pieces per style. UV400, polarized, custom logo, branded packaging — everything you need to launch.
        </p>
        <Link href="/contact/" className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
          Get a Quote for Your Brand →
        </Link>
      </div>
    </article>
  )
}
