import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sunglasses MOQ Guide: How Many Pairs Should You Order First?',
  description: 'A factory owner breaks down sunglasses MOQ for wholesale orders. ODM starts at 50-200 pieces, OEM at 300-1,000+. Learn the smart way to scale your first sunglasses order without overcommitting.',
  keywords: 'sunglasses MOQ wholesale, minimum order quantity sunglasses, wholesale sunglasses order, ODM MOQ, OEM MOQ sunglasses, sunglasses bulk order',
}

export default function SunglassesMoqGuidePage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* JSON-LD Article Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Sunglasses MOQ Guide: How Many Pairs Should You Order First?",
          "datePublished": "2026-05-03",
          "dateModified": "2026-05-03",
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "A factory owner breaks down sunglasses MOQ for wholesale orders — ODM, OEM, and custom mold minimums with a practical scaling strategy for new brands.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/blog/sunglasses-moq-guide" }
        })}} />

        {/* FAQ Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the typical MOQ for wholesale sunglasses?",
              "acceptedAnswer": { "@type": "Answer", "text": "It depends on the production model. ODM (picking from existing designs) typically requires 50-200 pieces per style. OEM (custom designs using existing molds) runs 300-1,000 pieces per style. Fully custom mold orders start at 500+ pieces because the tooling investment needs to be justified. Some factories, including ours, offer lower MOQs for first-time orders to help new brands get started." }
            },
            {
              "@type": "Question",
              "name": "Can I order less than 100 pairs of sunglasses from a factory?",
              "acceptedAnswer": { "@type": "Answer", "text": "Some factories do offer MOQs below 100 for ODM orders — we start at 50 pieces for first-time clients. However, be aware that very low quantities mean higher per-unit costs, sometimes 30-50% more than ordering 200+ pieces. If a factory advertises 'no MOQ,' they're likely a trading company reselling from stock, not an actual manufacturer." }
            },
            {
              "@type": "Question",
              "name": "Why do sunglasses factories have minimum order quantities?",
              "acceptedAnswer": { "@type": "Answer", "text": "MOQs exist because of production economics. Setting up a production line — calibrating machines, mixing specific colors, configuring lens cutting equipment — takes time and labor whether you're making 10 pairs or 10,000. Below a certain quantity, the setup costs per unit make the order unprofitable for the factory. For OEM orders, there's also the mold investment ($500-3,000) that needs to be spread across enough units to make sense." }
            },
            {
              "@type": "Question",
              "name": "Should I start with ODM or OEM for my first sunglasses order?",
              "acceptedAnswer": { "@type": "Answer", "text": "Start with ODM. Every time. Unless you have deep pockets and a proven audience, ODM lets you test the market with lower risk — smaller quantities, no mold fees, faster turnaround. Use your first 2-3 ODM orders to learn what your customers actually buy, then invest in custom OEM designs for your proven bestsellers. About 40% of our long-term OEM clients started with ODM first." }
            },
            {
              "@type": "Question",
              "name": "How much inventory should a new sunglasses brand keep in stock?",
              "acceptedAnswer": { "@type": "Answer", "text": "For your first order, keep it lean — 3-5 styles, 50-100 pieces each. That's enough to test the market without drowning in unsold inventory. Once you know your bestsellers (usually within 60-90 days of selling), reorder those in larger quantities (200-500 pieces) and drop the styles that didn't move. The goal is to turn inventory fast, not to have a warehouse full of sunglasses collecting dust." }
            }
          ]
        })}} />

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Wholesale</span>
            <span>May 3, 2026</span>
            <span>•</span>
            <span>14 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sunglasses MOQ Guide: How Many Pairs Should You Order First?
          </h1>
          <p className="text-xl text-gray-600">
            The number one question I get from new brand owners isn&apos;t about price. It&apos;s about 
            quantity. Here&apos;s how to figure out your first order without bankrupting yourself or 
            ending up with a garage full of unsold aviators.
          </p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div>
              <div className="font-medium text-gray-900">Jacky Chen</div>
              <div className="text-sm text-gray-500">Founder, EyeView Sunglasses</div>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="bg-gray-100 rounded-xl p-6 mb-12">
          <h2 className="font-bold mb-4">Table of Contents</h2>
          <ul className="space-y-2">
            <li><a href="#what-is-moq" className="text-primary-600 hover:underline">What MOQ Means (and Why Factories Have One)</a></li>
            <li><a href="#moq-ranges" className="text-primary-600 hover:underline">Sunglasses MOQ Ranges: ODM, OEM, and Custom Mold</a></li>
            <li><a href="#why-moq-varies" className="text-primary-600 hover:underline">Why MOQ Varies So Much Between Factories</a></li>
            <li><a href="#smart-strategy" className="text-primary-600 hover:underline">The Smart Scaling Strategy: Start Small, Prove It, Then Go Big</a></li>
            <li><a href="#first-order-math" className="text-primary-600 hover:underline">First Order Math: What You&apos;ll Actually Spend</a></li>
            <li><a href="#inventory-tips" className="text-primary-600 hover:underline">Inventory Management for New Brands</a></li>
            <li><a href="#negotiating-moq" className="text-primary-600 hover:underline">How to Negotiate Lower MOQs (Without Annoying Your Factory)</a></li>
            <li><a href="#mistakes" className="text-primary-600 hover:underline">The Biggest MOQ Mistakes I&apos;ve Seen</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Questions I Hear Every Week</a></li>
          </ul>
        </nav>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Two weeks ago, a woman from Toronto emailed me. She&apos;d spent six months designing her brand — 
            logo, website, Instagram content, the works. Then she started calling factories and hit a wall: 
            &quot;They want me to order 1,000 pairs per style. I don&apos;t even know if anyone will buy these yet.&quot;
          </p>
          <p>
            I hear some version of this story every single week. And it breaks my heart because the problem 
            isn&apos;t that she wasn&apos;t ready to start a brand. The problem is that nobody explained how sunglasses 
            MOQ wholesale actually works — what the numbers mean, why they exist, and how to use them 
            strategically instead of just accepting whatever a factory throws at you.
          </p>
          <p>
            So here it is. Everything I know about minimum order quantities after 20 years of running a 
            sunglasses factory in Shenzhen. No fluff, no sales pitch — just the numbers and the thinking 
            behind them.
          </p>

          {/* What Is MOQ */}
          <h2 id="what-is-moq" className="text-3xl font-bold mt-16 mb-6">What MOQ Means (and Why Factories Have One)</h2>
          <p>
            MOQ stands for Minimum Order Quantity. It&apos;s the smallest number of units a factory will produce 
            in a single order. Simple concept. But understanding <em>why</em> it exists will change how you 
            think about your first order.
          </p>
          <p>
            Here&apos;s what happens when you place an order for, say, 200 pairs of a specific sunglasses style 
            in matte black with polarized smoke lenses:
          </p>
          <ol>
            <li>We pull the mold and mount it on the injection machine. That takes a technician 2-3 hours.</li>
            <li>We calibrate the machine for the specific acetate or TR90 material — temperature, pressure, 
              cycle time. Another hour.</li>
            <li>We mix the exact color. For matte black, that&apos;s straightforward. For a custom tortoise shell 
              pattern? Half a day.</li>
            <li>We configure the lens cutting and coating line for your specific lens spec. Polarized smoke 
              with anti-reflective coating is different from gradient brown with UV-only.</li>
            <li>We run test pieces and QC them before starting the production run.</li>
          </ol>
          <p>
            All of that happens whether you order 50 pairs or 5,000. The setup cost is roughly the same. 
            At 5,000 pairs, that setup cost gets spread so thin you barely notice it. At 20 pairs, it 
            doubles your unit price. That&apos;s why MOQs exist — they&apos;re the point where the math starts 
            making sense for both of us.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-2">The Factory Floor Reality</h3>
            <p className="text-blue-800">
              Our production line can output about 800 pairs per day at full speed. When I stop that line 
              to set up a 30-piece order, I&apos;m not just spending time on your order — I&apos;m losing 
              production capacity for the 500-pair order waiting behind you. MOQ isn&apos;t about greed. 
              It&apos;s about keeping a factory running efficiently so everyone&apos;s orders ship on time.
            </p>
          </div>

          {/* MOQ Ranges */}
          <h2 id="moq-ranges" className="text-3xl font-bold mt-16 mb-6">Sunglasses MOQ Ranges: ODM, OEM, and Custom Mold</h2>
          <p>
            Not all sunglasses orders are created equal. Your MOQ depends entirely on what kind of production 
            you&apos;re asking for. If you&apos;re not sure about the difference between these models, I broke it 
            down in detail in my{' '}
            <Link href="/blog/oem-vs-odm" className="text-primary-600 hover:underline">OEM vs ODM guide</Link>. 
            But here&apos;s the MOQ picture:
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">ODM Orders: 50–200 Pieces Per Style</h3>
          <p>
            ODM means you&apos;re picking from designs that already exist in the factory&apos;s catalog. The molds 
            are made. The production process is dialed in. You&apos;re choosing a frame, picking your lens 
            options, adding your logo, and customizing colors.
          </p>
          <p>
            Because there&apos;s no tooling investment and minimal setup, factories can afford to go low on MOQ. 
            Most will do 100-200 pieces per style. We start at 50 for first-time orders because I&apos;d rather 
            help someone test the water than watch them drown in a 500-piece commitment they weren&apos;t ready for.
          </p>
          <ul>
            <li><strong>Typical MOQ:</strong> 100–200 pieces per style, per color</li>
            <li><strong>Our first-order MOQ:</strong> 50 pieces per style</li>
            <li><strong>Unit cost range:</strong> $3.50–$8 depending on materials and lenses</li>
            <li><strong>Upfront investment:</strong> $0 in tooling, $0–$50 for logo setup</li>
            <li><strong>Lead time:</strong> 20–45 days</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">OEM Orders: 300–1,000 Pieces Per Style</h3>
          <p>
            OEM means you&apos;re bringing your own design and we&apos;re building it from scratch. This requires 
            new molds, new production setups, and often a few rounds of sampling to get everything right.
          </p>
          <p>
            The higher MOQ isn&apos;t arbitrary. That mold you need costs $500–$3,000 depending on complexity. 
            If you spread $1,500 across 300 pairs, that&apos;s $5 per pair just in tooling — on top of the 
            unit production cost. At 1,000 pairs, it drops to $1.50. At 3,000, it&apos;s fifty cents. The 
            math pushes the MOQ up because nobody wants to pay $15 per pair for something they could get 
            at $7 by ordering more.
          </p>
          <ul>
            <li><strong>Typical MOQ:</strong> 300–1,000 pieces per style, per color</li>
            <li><strong>Unit cost range:</strong> $5–$15 depending on design complexity</li>
            <li><strong>Upfront investment:</strong> $500–$3,000 per mold + $200–$800 for design refinement</li>
            <li><strong>Lead time:</strong> 45–90 days</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Custom Mold Orders: 500+ Pieces Per Style</h3>
          <p>
            This is the deep end. Custom molds mean you&apos;re not just designing a frame — you&apos;re designing 
            the tool that makes the frame. Complex multi-piece molds for acetate frames with integrated 
            hinge systems, unusual shapes, or oversized designs. The molds themselves can cost $2,000–$5,000 
            and take 15–25 days to manufacture.
          </p>
          <p>
            At this level, most factories won&apos;t touch an order under 500 pieces. And honestly, if you&apos;re 
            investing $3,000+ in tooling, you should be ordering at least 500 to bring the per-unit 
            tooling cost below $6. Ideally 1,000+.
          </p>
          <ul>
            <li><strong>Typical MOQ:</strong> 500–2,000 pieces per style</li>
            <li><strong>Unit cost range:</strong> $6–$18 depending on materials and complexity</li>
            <li><strong>Upfront investment:</strong> $2,000–$5,000+ per mold</li>
            <li><strong>Lead time:</strong> 60–120 days</li>
          </ul>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left">Order Type</th>
                  <th className="px-6 py-4 text-left">MOQ Range</th>
                  <th className="px-6 py-4 text-left">Tooling Cost</th>
                  <th className="px-6 py-4 text-left">Unit Price</th>
                  <th className="px-6 py-4 text-left">Lead Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4 font-medium">ODM</td><td className="px-6 py-4">50–200</td><td className="px-6 py-4">$0</td><td className="px-6 py-4">$3.50–$8</td><td className="px-6 py-4">20–45 days</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">OEM</td><td className="px-6 py-4">300–1,000</td><td className="px-6 py-4">$500–$3,000</td><td className="px-6 py-4">$5–$15</td><td className="px-6 py-4">45–90 days</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Custom Mold</td><td className="px-6 py-4">500–2,000+</td><td className="px-6 py-4">$2,000–$5,000+</td><td className="px-6 py-4">$6–$18</td><td className="px-6 py-4">60–120 days</td></tr>
              </tbody>
            </table>
          </div>

          {/* Why MOQ Varies */}
          <h2 id="why-moq-varies" className="text-3xl font-bold mt-16 mb-6">Why MOQ Varies So Much Between Factories</h2>
          <p>
            You&apos;ll get wildly different MOQ numbers from different factories. One quotes 50 pieces, 
            another says 500, and a third won&apos;t talk to you under 2,000. Why?
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Factory Size and Setup</h3>
          <p>
            Large factories with 10+ production lines have high overhead. They need big orders to justify 
            running a line. A smaller factory like ours — 3 lines, 60 workers — can be more flexible. 
            We can dedicate half a line to a smaller order without shutting down everything else. It&apos;s 
            not that big factories are greedy. Their cost structure genuinely requires volume.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Trading Companies vs. Actual Factories</h3>
          <p>
            This is the one that catches people. If you see &quot;no MOQ&quot; or &quot;MOQ: 1 piece&quot; on Alibaba, 
            you&apos;re almost certainly talking to a trading company, not a factory. They buy from multiple 
            factories in bulk, warehouse the product, and resell in small quantities at a markup. 
            Nothing wrong with that if you know what you&apos;re getting — but you&apos;re paying 30-50% 
            more per unit, and customization is limited to sticking a label on.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Material Constraints</h3>
          <p>
            Some materials have their own minimums. Italian Mazzucchelli acetate? The supplier requires 
            minimum sheet purchases. Certain polarized lens films come in rolls that produce a set number 
            of lenses. Your factory&apos;s MOQ might be driven by their own suppliers&apos; minimums as much as 
            by their own production economics.
          </p>

          {/* Smart Strategy */}
          <h2 id="smart-strategy" className="text-3xl font-bold mt-16 mb-6">The Smart Scaling Strategy: Start Small, Prove It, Then Go Big</h2>
          <p>
            If I could tattoo one piece of advice on every new brand owner&apos;s forearm, it would be this: 
            <strong> start with the smallest viable order, validate demand, then scale.</strong> I&apos;ve 
            watched too many people blow $20,000 on a dream collection that sat in their spare bedroom 
            for two years. Don&apos;t be that person.
          </p>

          <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-primary-900 mb-3">The Three-Phase Scaling Plan:</h3>
            <ol className="text-primary-800 space-y-3">
              <li>
                <strong>Phase 1 — Test the Market with ODM (Month 1-3):</strong> Order 3-5 styles, 
                50-100 pieces each. Total investment: $1,500–$4,000. Your goal isn&apos;t profit yet — 
                it&apos;s data. Which styles sell? Which colors move? Who&apos;s buying? How fast do they 
                sell out? Every answer informs your next order.
              </li>
              <li>
                <strong>Phase 2 — Double Down on Winners (Month 3-8):</strong> Your data tells you 
                that the oversized square frame in matte black sells 3x faster than anything else. 
                Reorder that style in larger quantities — 200-500 pieces. Drop the styles that 
                didn&apos;t move. Add 1-2 new styles to keep testing. You&apos;re still ODM, still low risk, 
                but now you&apos;re making smarter bets.
              </li>
              <li>
                <strong>Phase 3 — Graduate to OEM (Month 8-18):</strong> You know your bestseller 
                inside and out. Your customers love oversized frames but keep asking for a slightly 
                rounder shape. Now — and only now — you invest in a custom OEM design. You&apos;re not 
                guessing. You&apos;re building on proven demand. Order 300-500 pieces of your custom 
                design while keeping your ODM bestsellers in rotation.
              </li>
            </ol>
          </div>

          <p>
            A client from Portland did exactly this in 2023. First order: 4 ODM styles, 75 pieces each, 
            $2,800 total. Within 60 days he knew two styles were winners and two were duds. He reordered 
            the winners at 300 pieces each, dropped the duds, and added two new test styles. By month 10, 
            he invested in his first custom OEM frame — a modified version of his bestselling aviator. 
            That custom frame now accounts for 45% of his revenue. But he didn&apos;t start there. He earned 
            his way there with data.
          </p>
          <p>
            If you want the full roadmap for launching a brand this way, I wrote a step-by-step guide on{' '}
            <Link href="/blog/start-sunglasses-brand" className="text-primary-600 hover:underline">how to start a sunglasses brand</Link> that 
            covers everything from concept to first sale.
          </p>

          {/* First Order Math */}
          <h2 id="first-order-math" className="text-3xl font-bold mt-16 mb-6">First Order Math: What You&apos;ll Actually Spend</h2>
          <p>
            Let me run the real numbers for three common first-order scenarios. These include production, 
            samples, shipping, and duties — not just the per-unit price that factories love to quote 
            in isolation.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Scenario A: The Conservative Test (ODM, 3 Styles × 50 Pieces)</h3>
          <ul>
            <li><strong>Unit cost:</strong> $5.50 average (polarized lenses, TR90 frames) = $825</li>
            <li><strong>Logo setup:</strong> $30 × 3 styles = $90</li>
            <li><strong>Samples:</strong> $25 × 6 pairs (2 per style) = $150</li>
            <li><strong>Shipping (air, 15kg):</strong> $280</li>
            <li><strong>Customs duties (US, ~2.5%):</strong> ~$25</li>
            <li><strong>Total: ~$1,370 for 150 pairs → $9.13 per pair landed</strong></li>
          </ul>
          <p>
            If you retail at $35-45 per pair, that&apos;s roughly 4x margin. Sell 40 pairs and you&apos;ve 
            covered your entire investment. The other 110 are pure profit and reinvestment capital.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Scenario B: The Confident Launch (ODM, 5 Styles × 150 Pieces)</h3>
          <ul>
            <li><strong>Unit cost:</strong> $4.80 average (volume discount kicks in) = $3,600</li>
            <li><strong>Logo setup:</strong> $30 × 5 = $150</li>
            <li><strong>Samples:</strong> $25 × 10 = $250</li>
            <li><strong>Shipping (sea, ~60kg):</strong> $450</li>
            <li><strong>Customs duties (US):</strong> ~$100</li>
            <li><strong>Total: ~$4,550 for 750 pairs → $6.07 per pair landed</strong></li>
          </ul>
          <p>
            Better per-unit economics but more capital at risk. This makes sense if you already 
            have an audience — an existing brand, an Instagram following, a retail location.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Scenario C: The OEM Bet (1 Custom Style × 500 Pieces)</h3>
          <ul>
            <li><strong>Mold/tooling:</strong> $1,800</li>
            <li><strong>Design refinement:</strong> $400</li>
            <li><strong>Unit cost:</strong> $7.50 × 500 = $3,750</li>
            <li><strong>Samples (3 rounds):</strong> $350</li>
            <li><strong>Shipping (sea):</strong> $380</li>
            <li><strong>Customs duties:</strong> ~$105</li>
            <li><strong>Total: ~$6,785 for 500 pairs → $13.57 per pair landed</strong></li>
          </ul>
          <p>
            Higher per-pair cost, but you own the design. If you&apos;re retailing at $89-129, the margins 
            are still excellent. But you need to move 500 identical pairs — no style variety to hedge 
            your bets. This is why I recommend Phase 1 and 2 before jumping here.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-amber-900 mb-2">💡 The Costs Everyone Forgets</h3>
            <p className="text-amber-800">
              Packaging ($0.50–$2 per pair for a branded case and microfiber cloth), photography 
              ($200–$500 for product shots if you&apos;re selling online), and marketing spend to 
              actually move the inventory. I&apos;ve seen founders nail the production budget and 
              then have zero dollars left to tell anyone the product exists. Budget at least 
              20-30% of your total investment for marketing. Sunglasses don&apos;t sell themselves — 
              not even really good ones.
            </p>
          </div>

          {/* Inventory Tips */}
          <h2 id="inventory-tips" className="text-3xl font-bold mt-16 mb-6">Inventory Management for New Brands</h2>
          <p>
            Inventory is where most new sunglasses brands either succeed or slowly bleed money. Too 
            much stock ties up cash and fills your garage. Too little means stockouts and missed 
            sales. Here&apos;s what I&apos;ve seen work:
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">The 80/20 Rule of Sunglasses Inventory</h3>
          <p>
            In almost every sunglasses brand I&apos;ve worked with, 20% of the styles generate 80% of the 
            revenue. You won&apos;t know which 20% until you start selling. That&apos;s why your first order 
            should be broad and shallow — more styles in smaller quantities — and your second order 
            should be narrow and deep — fewer styles in larger quantities.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Reorder Before You Run Out</h3>
          <p>
            Lead times are real. If your bestseller takes 30 days to produce and 10 days to ship, 
            you need to place your reorder when you still have 40 days of stock left. Most 
            first-time brand owners wait until they&apos;re completely sold out, then panic-order. 
            That 40-day gap between &quot;sold out&quot; and &quot;restocked&quot; is 40 days of lost revenue and 
            disappointed customers who may never come back.
          </p>
          <p>
            My rule of thumb: <strong>reorder when you&apos;re at 30% of your initial stock.</strong> If 
            you ordered 100 pairs and you&apos;re down to 30, it&apos;s time.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Seasonal Timing Matters</h3>
          <p>
            Sunglasses are seasonal in most markets. North America and Europe see 60-70% of annual 
            sales between March and August. If you&apos;re launching in January, your order should be 
            smaller — enough to build buzz and test messaging before spring demand hits. Place 
            your big order in February for April/May delivery, right when people start shopping.
          </p>
          <p>
            The worst timing? Ordering 1,000 pairs in September. You&apos;ll sit on most of them until 
            spring. That&apos;s six months of tied-up capital doing nothing.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Don&apos;t Over-Diversify Colors</h3>
          <p>
            I see this constantly: a new brand launches with one frame in 8 different colors. Sounds 
            like variety. In practice, it&apos;s 8 small bets instead of 2-3 strong ones. Start with 
            your safest colors — matte black, tortoise, and one bold option — and expand colors 
            on reorders based on what customers ask for. Every color variation multiplies your 
            inventory management complexity.
          </p>

          {/* Negotiating MOQ */}
          <h2 id="negotiating-moq" className="text-3xl font-bold mt-16 mb-6">How to Negotiate Lower MOQs (Without Annoying Your Factory)</h2>
          <p>
            MOQs aren&apos;t carved in stone. Most factories have flexibility, but how you approach the 
            conversation matters. Here&apos;s what actually works:
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Show You&apos;re a Real Business</h3>
          <p>
            Factories lower MOQs for clients they believe will come back. Send your website, your 
            Instagram, your business plan — anything that shows you&apos;re serious, not just tire-kicking. 
            I&apos;ve dropped our MOQ to 30 pieces for a client who showed up with a professional brief, 
            a clear timeline, and a realistic growth plan. That tells me she&apos;ll be ordering 500 
            pieces within a year.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Accept a Slightly Higher Unit Price</h3>
          <p>
            The factory&apos;s concern with low MOQs is cost coverage. If you say &quot;I know 50 pieces is 
            below your standard MOQ — I&apos;m happy to pay a 10-15% premium on the unit price,&quot; 
            you&apos;ve just solved their problem. That premium disappears on your second, larger order.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Combine Styles into One Order</h3>
          <p>
            A factory might not want to run 50 pieces of one style. But 50 pieces each of 4 
            styles? That&apos;s a 200-piece order — much more attractive. The setup cost per style 
            is the same, but the total order volume makes the paperwork and logistics worthwhile.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. Be Flexible on Timing</h3>
          <p>
            Factories have busy seasons (January-March for summer orders) and quiet seasons 
            (August-October). If you can place your order during a quiet period, factories are 
            more likely to accept lower quantities to keep the lines running. I&apos;ve accepted 
            orders as small as 30 pieces in September just because we had capacity.
          </p>

          {/* Mistakes */}
          <h2 id="mistakes" className="text-3xl font-bold mt-16 mb-6">The Biggest MOQ Mistakes I&apos;ve Seen</h2>
          <p>
            I&apos;ve been doing this long enough to have a greatest hits album of costly mistakes. 
            Learn from other people&apos;s tuition:
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Ordering Too Much of an Unproven Design</h3>
          <p>
            A brand from Miami ordered 2,000 pairs of a single custom frame in 2024. Invested $14,000. 
            The design looked incredible on paper — oversized geometric shape, rose gold metal. 
            Beautiful. Sold 280 pairs in six months. The other 1,720 pairs are still in a 
            warehouse in Florida. That $14,000 is now worth about $3,000 in liquidation value. 
            They should have ordered 300 and tested.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Going Straight to Custom Molds</h3>
          <p>
            I had a first-time brand owner who wanted fully custom molds for 3 styles. Total mold 
            investment: $8,500. He hadn&apos;t sold a single pair of sunglasses before. I talked him 
            into starting with ODM instead. Two of his three &quot;dream designs&quot; turned out to have 
            zero market demand when he tested similar shapes through ODM. He saved $5,600 in 
            mold costs and used that money for marketing instead. Today he has one custom mold — 
            for a design he validated through ODM first.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Choosing the Cheapest Factory Over the Right Factory</h3>
          <p>
            A $2 per-unit difference means nothing if the quality is bad. I&apos;ve had clients come 
            to us after getting a shipment from a cheaper factory where 30% of the hinges were 
            loose, the polarization was inconsistent, and the UV protection was below spec. 
            They spent more on returns, refunds, and reputation damage than they saved on 
            unit price. The cheapest quote is almost never the best deal. Browse our{' '}
            <Link href="/products" className="text-primary-600 hover:underline">product catalog</Link> to 
            see what proper quality looks like at fair prices.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Ignoring Shipping and Duties</h3>
          <p>
            I mentioned this earlier but it&apos;s worth repeating because I see it every month. 
            Your factory quotes you $5 per pair. You think &quot;great, $2,500 for 500 pairs.&quot; 
            Then shipping adds $400, duties add $125, customs brokerage adds $150, and 
            packaging adds $500. Your actual landed cost is $7.35 per pair, not $5. Plan for 
            the real number.
          </p>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Need Help Figuring Out Your First Order?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I do free 15-minute calls with new brand owners. We&apos;ll look at your budget, your 
              market, and your timeline, and I&apos;ll tell you exactly what I&apos;d order if I were 
              in your shoes. No commitment, no pitch — just 20 years of factory experience 
              in your corner.
            </p>
            <Link href="/contact" className="btn-primary">
              Book a Free Call with Jacky
            </Link>
          </div>

          {/* FAQ */}
          <h2 id="faq" className="text-3xl font-bold mt-16 mb-6">Questions I Hear Every Week</h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">What is the typical MOQ for wholesale sunglasses?</h3>
              <p className="text-gray-600">
                It depends on the production model. ODM (picking from existing designs) typically requires 
                50-200 pieces per style. OEM (custom designs using existing molds) runs 300-1,000 pieces per 
                style. Fully custom mold orders start at 500+ pieces. Some factories, including ours, offer 
                lower MOQs for first-time orders to help new brands get started.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Can I order less than 100 pairs of sunglasses from a factory?</h3>
              <p className="text-gray-600">
                Some factories do offer MOQs below 100 for ODM orders — we start at 50 pieces for first-time 
                clients. Be aware that very low quantities mean higher per-unit costs, sometimes 30-50% more 
                than ordering 200+ pieces. If a factory advertises &quot;no MOQ,&quot; they&apos;re likely a trading 
                company reselling from stock, not an actual manufacturer.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Why do sunglasses factories have minimum order quantities?</h3>
              <p className="text-gray-600">
                Production economics. Setting up a production line — calibrating machines, mixing colors, 
                configuring lens equipment — costs the same whether you&apos;re making 10 pairs or 10,000. 
                Below a certain quantity, the setup cost per unit makes the order unprofitable. For OEM, 
                there&apos;s also the mold investment ($500–$3,000) that needs to be spread across enough 
                units to make financial sense.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Should I start with ODM or OEM for my first sunglasses order?</h3>
              <p className="text-gray-600">
                Start with ODM. Unless you have deep pockets and a proven audience, ODM lets you test the 
                market with lower risk — smaller quantities, no mold fees, faster turnaround. Use your first 
                2-3 ODM orders to learn what sells, then invest in custom OEM designs for your proven 
                bestsellers. About 40% of our long-term OEM clients started with ODM.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">How much inventory should a new sunglasses brand keep in stock?</h3>
              <p className="text-gray-600">
                For your first order, keep it lean — 3-5 styles, 50-100 pieces each. That&apos;s enough to test 
                the market without drowning in unsold inventory. Once you identify your bestsellers (usually 
                within 60-90 days), reorder those in larger quantities and drop what didn&apos;t move. Turn 
                inventory fast — don&apos;t let sunglasses collect dust in a warehouse.
              </p>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">More From the Factory Floor</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/oem-vs-odm" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">OEM vs ODM Sunglasses: What&apos;s the Difference?</h3>
                <p className="text-gray-600 text-sm">The full breakdown of OEM and ODM manufacturing — costs, timelines, and how to choose the right model for your brand.</p>
              </Link>
              <Link href="/blog/start-sunglasses-brand" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">How to Start a Sunglasses Brand: Complete Guide</h3>
                <p className="text-gray-600 text-sm">The full playbook from idea to first sale — everything I wish someone told me when I started in 2006.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
