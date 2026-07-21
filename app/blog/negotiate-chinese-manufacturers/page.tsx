import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'How to Negotiate with Chinese Sunglasses Manufacturers: Insider Guide',
  description: 'Factory owner reveals exactly how to negotiate with Chinese sunglasses manufacturers. Real pricing tiers, MOQ flexibility, phrases that work, and what factory owners actually think.',
  keywords: ['negotiate with Chinese manufacturer', 'Chinese factory negotiation', 'sunglasses supplier pricing', 'factory negotiation tips', 'China sourcing strategy', 'guanxi business China'],
  alternates: {
    canonical: '/blog/negotiate-chinese-manufacturers',
  },
};

const takeaways = [
  'Chinese factory owners negotiate differently: volume stability and payment reliability matter more than unit price — commit to a 6-month schedule and you will unlock 10–15% discounts that one-off buyers never see',
  'Timing is everything: place orders 60–90 days before peak season (Jan–Mar for summer) and negotiate during post-CNY lull (late Feb–Mar) when factories are hungry for orders to fill idle production lines',
  'MOQ is the single most negotiable number: a stated 500-piece MOQ typically has 30–50% give — offer to pay a 5–10% surcharge on a smaller order, or commit to 3 styles at 200pcs each instead of one style at 500',
  '5 phrases instantly kill your negotiation leverage: "what\'s your best price," "I can get this cheaper elsewhere," "I need it next week," "just send me samples first," and "I\'ll place a big order later"',
  'Payment terms are a hidden discount lever: switching from 30% deposit to 50% deposit can unlock 3–5% off — and a 100% TT upfront payment can get you 5–8% off because it eliminates factory cash flow risk',
  'Guanxi (relationship) beats price every time: a buyer who visits the factory once, shares a meal, and follows up on WeChat will always get priority pricing, faster samples, and problem-solving that a transactional buyer never receives',
];

const quickStats = [
  { label: 'Typical discount from published price', value: '10–15%' },
  { label: 'MOQ flexibility range', value: '30–50%' },
  { label: 'Extra discount for 100% upfront payment', value: '5–8%' },
  { label: 'Multi-year contract price reduction', value: '8–12%' },
];

const faqs = [
  {
    question: 'How much can I realistically negotiate off the initial price from a Chinese manufacturer?',
    answer: 'On a first order, expect 5–10% off the published price through standard negotiation. On repeat orders with growing volume, 10–15% is achievable. The largest discounts (15–20%) come after building a 6–12 month relationship with consistent orders — factory owners reward reliability far more than aggressive negotiation tactics.',
  },
  {
    question: 'What is the best time of year to negotiate better pricing with Chinese factories?',
    answer: 'Late February through March, immediately after Chinese New Year, is the best negotiation window. Factories have reopened but order books are thin — they need to fill production lines and keep workers employed. December is also good because factories want to close their annual books strong. Avoid September–October when factories are slammed with pre-holiday orders and have zero incentive to discount.',
  },
  {
    question: 'Should I use a sourcing agent or negotiate directly with the factory?',
    answer: 'For first-time buyers, a sourcing agent can bridge language and cultural gaps, typically adding 3–5% to your cost. For experienced buyers or orders above $5,000, negotiating directly with the factory yields better pricing and a stronger long-term relationship. Most EyeView clients transition from agent-assisted to direct within their first 2–3 orders as they build confidence.',
  },
  {
    question: "How do I negotiate MOQ down without looking like a small buyer who isn't worth their time?",
    answer: "Instead of simply asking 'can you lower the MOQ,' reframe it: offer to pay a 5–10% surcharge on a smaller order, or split the MOQ across 2–3 styles. For example, instead of 500pcs of one style at $3.50/pc, propose 300pcs across 3 styles at $4.00/pc. The factory's per-unit margin increases, you get variety, and you signal you understand their production economics.",
  },
  {
    question: 'What payment terms give me the most negotiating leverage?',
    answer: 'Offering 50% deposit instead of the standard 30% can unlock 3–5% discount. 100% TT upfront typically yields 5–8% off. For ongoing relationships, switching to 30% deposit with 70% before shipment (from 30/70 against B/L) gives you stronger leverage on reorders. Never pay 100% upfront to a new supplier — use that lever only after 2–3 successful orders.',
  },
];

const PUBLISH_DATE = '2026-07-20';
const SLUG = 'negotiate-chinese-manufacturers';

export default function NegotiateChineseManufacturersPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog/' },
          { name: 'How to Negotiate with Chinese Sunglasses Manufacturers' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════ SCHEMA: Article ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "How to Negotiate with Chinese Sunglasses Manufacturers: An Insider's Playbook",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Factory owner reveals exactly how to negotiate with Chinese sunglasses manufacturers. Real pricing tiers, MOQ flexibility, phrases that work, and what factory owners actually think when you open with 'what's your best price.'",
          "mainEntityOfPage": { "@type": "WebPage", "@id": `https://eyeviewsunglasses.com/blog/${SLUG}` }
        })}} />

        {/* ═══════ SCHEMA: FAQPage ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "speakable": { "@type": "SpeakableSpecification", "xpath": ["/html/head/title"] },
          "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.question,
            "acceptedAnswer": { "@type": "Answer", "text": f.answer }
          }))
        })}} />

        {/* ═══════ ARTICLE HEADER ═══════ */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Sourcing</span>
            <span>{PUBLISH_DATE}</span>
            <span>•</span>
            <span>9 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How to Negotiate with Chinese Sunglasses Manufacturers: An Insider&apos;s Playbook
          </h1>
          <p className="text-xl text-gray-600">
            I run a sunglasses factory in China. Here&apos;s exactly what I think when a buyer opens with &quot;what&apos;s your best price&quot; — and what you should say instead.
          </p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div>
              <div className="font-medium text-gray-900">Jacky Chen</div>
              <div className="text-sm text-gray-500">Founder, EyeView Sunglasses</div>
            </div>
          </div>
        </header>

        {/* ═══════ TABLE OF CONTENTS ═══════ */}
        <nav className="bg-gray-100 rounded-xl p-6 mb-12">
          <h2 className="font-bold mb-4">Table of Contents</h2>
          <ul className="space-y-2">
            <li><a href="#psychology" className="text-primary-600 hover:underline">The Psychology of Factory Negotiation</a></li>
            <li><a href="#timing" className="text-primary-600 hover:underline">Timing Is Everything</a></li>
            <li><a href="#better-price" className="text-primary-600 hover:underline">What Actually Gets You a Better Price</a></li>
            <li><a href="#killer-phrases" className="text-primary-600 hover:underline">5 Phrases That Kill Your Negotiation</a></li>
            <li><a href="#guanxi" className="text-primary-600 hover:underline">Building Guanxi — The Relationship Layer</a></li>
            <li><a href="#script" className="text-primary-600 hover:underline">Sample Negotiation Script</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Frequently Asked Questions</a></li>
          </ul>
        </nav>

        {/* ═══════ ARTICLE BODY ═══════ */}
        <div className="prose prose-lg max-w-none">

          {/* 🟢 GEO: Key Takeaways */}
          <KeyTakeaways items={takeaways} />

          {/* 🟡 GEO: Quick Stats */}
          <QuickStats stats={quickStats} title="Negotiation by the Numbers" />

          <p className="lead text-xl text-gray-600 mb-8">
            Last Tuesday, I got a WhatsApp message from a buyer in Los Angeles. First line: &quot;What&apos;s your best price for 500 acetate wayfarers?&quot; 
            No introduction. No context. No acknowledgment that there&apos;s a human on the other end reading this at 10pm China time while eating cold noodles at his desk.
          </p>
          <p>
            I still replied — I always do. But here&apos;s what went through my head: <em>This person doesn&apos;t understand how Chinese factories work, and they&apos;re about to leave money on the table without even knowing it.</em>
          </p>
          <p>
            I&apos;ve been on the factory floor for over a decade. I&apos;ve sat through thousands of negotiations — the good ones, the terrible ones, and the ones where buyers walked away paying 20% more than they needed to because they made one simple mistake in the first five minutes. This article is everything I wish buyers understood before they hit send on that first message. No theory. No consulting-firm frameworks. Just what actually happens when you negotiate with a Chinese sunglasses manufacturer.
          </p>

          {/* ─── Section 1: The Psychology of Factory Negotiation ─── */}
          <h2 id="psychology" className="text-3xl font-bold mt-16 mb-6">The Psychology of Factory Negotiation</h2>

          <p>
            Here&apos;s something most Western buyers don&apos;t realize: Chinese factory owners don&apos;t optimize for maximum price per unit. We optimize for <strong>predictable cash flow and production line utilization</strong>.
          </p>
          <p>
            Let me give you a concrete example. Last month, two buyers reached out on the same day for the same product — a classic acetate frame with polarized lenses. Buyer A asked for 300 pieces at the lowest possible price. Buyer B said: &quot;I need 200 pieces now, but I&apos;m planning to reorder every 8 weeks if the quality checks out. Can we work out a rate that makes sense for both of us?&quot;
          </p>
          <p>
            Buyer A got quoted $4.20 per unit. Buyer B? $3.65 per unit — a 13% difference — for half the initial quantity. Why? Because Buyer B signaled three things that matter more to a factory owner than order size:
          </p>

          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li><strong>Volume stability.</strong> A predictable 8-week reorder cycle means I can schedule production efficiently. I can buy raw materials in bulk. I can keep my skilled workers on consistent tasks instead of retraining them every batch. That predictability is worth real money.</li>
            <li><strong>Payment reliability.</strong> A buyer who talks about reorders is signaling they&apos;re building a business, not flipping inventory. Businesses pay their bills. Flippers disappear after one order.</li>
            <li><strong>Long-term thinking.</strong> Factory owners will invest in a relationship. We&apos;ll absorb a thinner margin on the first order because we&apos;re betting on months two through twenty-four.</li>
          </ol>

          <blockquote className="border-l-4 border-primary-600 pl-4 my-6 italic text-gray-700">
            &quot;The single biggest minds-shift buyers need: stop negotiating price per unit and start negotiating a partnership. I&apos;ve given 18% discounts to buyers with modest orders who committed to a 6-month schedule — and I&apos;ve held firm at full price for buyers with large one-off orders who treated me like a vending machine.&quot;
          </blockquote>

          <p>
            Another thing: Chinese factory owners <strong>hate losing face</strong>. If you push too hard on price in a way that makes the negotiation feel like a zero-sum battle, many will simply stop responding — not because the deal doesn&apos;t work mathematically, but because you&apos;ve signaled that working with you will be a constant fight. We&apos;d rather fill that production slot with someone pleasant who pays 5% more.
          </p>

          {/* ─── Section 2: Timing Is Everything ─── */}
          <h2 id="timing" className="text-3xl font-bold mt-16 mb-6">Timing Is Everything</h2>

          <p>
            You can say all the right things and still get a worse deal than someone who simply asked at the right time. Here&apos;s the factory calendar you need to understand:
          </p>

          <div className="bg-gray-50 rounded-lg p-6 my-6">
            <h4 className="font-semibold mb-3">The Chinese Sunglasses Factory Calendar</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between"><span><strong>Jan 15 – Feb 15</strong></span><span className="text-red-600">Factory closed (CNY)</span></li>
              <li className="flex justify-between"><span><strong>Feb 15 – Mar 31</strong></span><span className="text-green-600">🟢 BEST TIME TO NEGOTIATE</span></li>
              <li className="flex justify-between"><span><strong>Apr – Jul</strong></span><span className="text-yellow-600">🟡 Steady production, moderate flexibility</span></li>
              <li className="flex justify-between"><span><strong>Aug – Oct</strong></span><span className="text-red-600">🔴 Peak season — zero discount leverage</span></li>
              <li className="flex justify-between"><span><strong>Nov – Dec</strong></span><span className="text-green-600">🟢 Year-end push — good negotiation window</span></li>
            </ul>
          </div>

          <p>
            <strong>Late February through March</strong> is the golden window. Here&apos;s why: Chinese New Year shuts down the entire manufacturing sector for 2–4 weeks. Workers travel home, some don&apos;t come back, and when the factory reopens in mid-February, the order book is thin. Production lines are sitting idle. Management is looking at empty schedules and payroll that still needs to be met. This is when we&apos;re most motivated to fill capacity — and most flexible on pricing.
          </p>
          <p>
            I&apos;ve personally offered 12% below our standard rate in late February to land a contract that would keep two production lines running through March. In August? I wouldn&apos;t budge 3% on the same order — we&apos;re already at capacity and every new order means overtime pay.
          </p>
          <p>
            <strong>December is your second-best window.</strong> Factory owners want to close the year strong. Revenue targets, performance bonuses for management, annual reports for bank loans — all of these create a bias toward closing deals before December 31st. I&apos;ve approved 8–10% discounts in the last week of December that I would have rejected in October.
          </p>
          <p>
            <strong>The worst time to negotiate:</strong> September and October. Factories are running at 110% capacity to fulfill orders placed for the holiday season and the upcoming year. You have zero leverage. Every production hour is already sold.
          </p>

          {/* ─── Section 3: What Actually Gets You a Better Price ─── */}
          <h2 id="better-price" className="text-3xl font-bold mt-16 mb-6">What Actually Gets You a Better Price</h2>

          <p>
            Let&apos;s talk about the specific levers that move the price needle. These are the five things I actually adjust pricing for — in order of impact:
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">1. Volume Commitment Over Time (Impact: 10–18%)</h3>
          <p>
            A one-time order of 1,000 pieces is nice. A commitment to 300 pieces every month for 12 months is <em>transformative</em> for a factory. That&apos;s 3,600 pieces of predictable production I can plan around. I&apos;ll sharpen my pencil significantly for that kind of commitment — even if the per-order quantity is smaller than a competitor&apos;s one-off bulk purchase.
          </p>
          <p>
            <strong>How to use this:</strong> Instead of &quot;Can you do better on price?&quot;, say &quot;If we structure this as a 6-month commitment with monthly orders of 300 pieces, what kind of pricing can you offer?&quot; Then wait. Let the factory owner run the math. The silence is productive.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">2. Payment Terms (Impact: 3–8%)</h3>
          <p>
            Cash flow is the lifeblood of a Chinese factory. Raw materials are typically paid upfront to suppliers. Worker wages are monthly. Electricity bills don&apos;t wait. When a buyer offers better payment terms, they&apos;re effectively providing interest-free working capital — and that&apos;s worth a discount.
          </p>
          <div className="bg-gray-50 rounded-lg p-6 my-6">
            <h4 className="font-semibold mb-3">Payment Terms vs. Discount</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between"><span>30% deposit, 70% against B/L</span><span className="text-gray-500">Standard (baseline)</span></li>
              <li className="flex justify-between"><span>50% deposit, 50% before shipment</span><span className="text-green-600">3–5% discount</span></li>
              <li className="flex justify-between"><span>100% TT upfront</span><span className="text-green-600">5–8% discount</span></li>
            </ul>
            <p className="text-xs text-gray-400 mt-3">⚠️ Only use 100% upfront payment with established suppliers you&apos;ve verified through prior orders.</p>
          </div>

          <h3 className="text-xl font-semibold mt-8 mb-3">3. Mixed Container and Multi-Style Orders (Impact: 5–10%)</h3>
          <p>
            Single-style orders are inefficient for factories. We have to set up molds, configure machines, and retrain workers for each style — but once those are set up, producing additional styles doesn&apos;t add proportional cost. Ordering 3 styles at 200 pieces each instead of 1 style at 600 pieces gives the factory a fuller production pipeline with better material utilization, and that efficiency translates to better unit pricing.
          </p>
          <p>
            Plus, a mixed order tells me you&apos;re a real brand with a product line — not someone testing a single SKU and hoping for the best. That makes me more willing to invest in the relationship.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">4. Off-Season Production Slotting (Impact: 5–12%)</h3>
          <p>
            Refer back to the calendar above. If you can place your order for production in March instead of August, you&apos;re doing the factory a favor by filling idle capacity. Frame it that way: &quot;I see your calendar is probably lighter in March — if we slot production then, does that give us room on pricing?&quot; Most factory owners will appreciate that you understand their business dynamics and will reciprocate with a better rate.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">5. NDA and Exclusivity Agreements (Impact: 3–7%)</h3>
          <p>
            If you&apos;re developing custom OEM designs, ask for an NDA that also includes a volume commitment. &quot;We&apos;ll commit to 2,000 pieces over 12 months for this exclusive design.&quot; That exclusivity commitment signals serious intent and long-term partnership — two things that unlock better pricing. Check out our full guide on <Link href="/blog/oem-vs-odm" className="text-primary-600 hover:underline">OEM vs ODM manufacturing</Link> for more on this distinction.
          </p>

          {/* ─── Section 4: 5 Phrases That Kill Your Negotiation ─── */}
          <h2 id="killer-phrases" className="text-3xl font-bold mt-16 mb-6">5 Phrases That Kill Your Negotiation (And What to Say Instead)</h2>

          <p>
            These are actual things buyers have said to me that immediately downgraded their leverage. I&apos;m including them because I see them <em>constantly</em>:
          </p>

          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg">
              <p className="font-bold text-red-800 mb-1">❌ &quot;What&apos;s your best price?&quot;</p>
              <p className="text-gray-700 text-sm mb-2">This is the #1 most damaging opener in cross-border negotiation. Here&apos;s what I hear: &quot;I haven&apos;t done any research, I don&apos;t know what these cost to make, and I&apos;m going to pit you against every other factory on Alibaba.&quot; It signals price-shopping with zero loyalty — and I&apos;ll respond accordingly with a price that protects my margin because I don&apos;t expect to hear from you again.</p>
              <p className="font-bold text-green-800 mb-1">✅ Say instead:</p>
              <p className="text-gray-700 text-sm">&quot;We&apos;re looking for a long-term manufacturing partner for our sunglass line. I&apos;ve seen your catalog and I like the acetate collection. Can you walk me through your pricing structure for orders in the 300–500 piece range, and what factors would allow for better rates?&quot;</p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg">
              <p className="font-bold text-red-800 mb-1">❌ &quot;I can get this cheaper from [competitor].&quot;</p>
              <p className="text-gray-700 text-sm mb-2">This isn&apos;t a negotiation tactic in China — it&apos;s an insult. You&apos;re telling me my product is a commodity with no differentiation. My response is usually: &quot;Then you should buy from them.&quot; And I mean it. I&apos;m not going to chase a buyer who sees my decades of manufacturing expertise as interchangeable with the lowest bidder on a sourcing platform.</p>
              <p className="font-bold text-green-800 mb-1">✅ Say instead:</p>
              <p className="text-gray-700 text-sm">&quot;We&apos;re evaluating a few manufacturers, and your quality and communication have been the strongest so far. If we can get the pricing to around $3.80/unit for this spec, we&apos;re ready to move forward with you. Is that workable?&quot;</p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg">
              <p className="font-bold text-red-800 mb-1">❌ &quot;I need this by next week.&quot;</p>
              <p className="text-gray-700 text-sm mb-2">Rush orders in Chinese manufacturing mean overtime pay, disrupted production schedules, and expedited material procurement — all of which cost 20–30% more. When you demand urgency AND a discount, you&apos;ve just signaled that you don&apos;t understand how factories work. I&apos;ll give you the timeline, but the price will include every rush surcharge.</p>
              <p className="font-bold text-green-800 mb-1">✅ Say instead:</p>
              <p className="text-gray-700 text-sm">&quot;What&apos;s your standard production timeline for this quantity? We&apos;re flexible — if a longer lead time allows for better pricing, we can plan around that.&quot;</p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg">
              <p className="font-bold text-red-800 mb-1">❌ &quot;Can you just send me some free samples first?&quot;</p>
              <p className="text-gray-700 text-sm mb-2">I send 30–50 sample requests per month. The buyers who ask for free samples without offering to cover shipping almost never convert to orders. I&apos;ve tracked this for three years — the conversion rate is under 5%. So when you lead with &quot;free samples,&quot; you&apos;ve identified yourself as low-intent. I&apos;ll still send them, but you&apos;re now in the &quot;probably not serious&quot; mental category.</p>
              <p className="font-bold text-green-800 mb-1">✅ Say instead:</p>
              <p className="text-gray-700 text-sm">&quot;I&apos;d like to order 3 samples — the Wayfarer in tortoise, the Round in black, and the Aviator in gold. I can cover the samples plus DHL shipping. What&apos;s your process and timeline for sample orders?&quot;</p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg">
              <p className="font-bold text-red-800 mb-1">❌ &quot;I&apos;ll place a much bigger order later — just give me a good price now.&quot;</p>
              <p className="text-gray-700 text-sm mb-2">Every factory owner has heard this 1,000 times. It&apos;s the boy-who-cried-wolf of manufacturing. If I gave every buyer who promised future volume the discount upfront, I&apos;d be out of business. Future promises are worth exactly zero in today&apos;s negotiation.</p>
              <p className="font-bold text-green-800 mb-1">✅ Say instead:</p>
              <p className="text-gray-700 text-sm">&quot;Here&apos;s what I can commit to right now: an initial order of 300 pieces. If quality and delivery meet expectations, I&apos;d like to set up a purchase agreement for monthly reorders of 200–300 pieces. Can we structure pricing that reflects this progression?&quot;</p>
            </div>
          </div>

          {/* ─── Section 5: Building Guanxi ─── */}
          <h2 id="guanxi" className="text-3xl font-bold mt-16 mb-6">Building Guanxi — The Relationship Layer Western Buyers Miss</h2>

          <p>
            If you take one thing from this entire article, make it this: <strong>guanxi (关系) is not &quot;networking.&quot; It&apos;s a reciprocal relationship of trust and mutual obligation that directly affects your pricing, quality, and access.</strong>
          </p>
          <p>
            Here&apos;s a real story. Three years ago, a buyer from Melbourne — let&apos;s call him Dave — came to visit our factory in Xiamen. He spent two hours on the floor, asked smart questions about our acetate sourcing and hinge testing, and then joined me for hotpot at a place I like near the factory. We talked about his brand vision, his two kids, and his frustration with Australian retail markups. We exchanged WeChat contacts. He sends me pictures of his kids at the beach wearing prototypes. I send him CNY greetings.
          </p>
          <p>
            Last year, when Dave&apos;s biggest order had a minor hinge alignment issue discovered during QC, I pulled four workers off another production line to fix every unit by hand over a weekend. No charge. No delay. Try getting that level of service from a supplier you&apos;ve only exchanged 17 transactional emails with.
          </p>
          <p>
            <strong>Practical guanxi moves that cost you nothing:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Get on WeChat.</strong> Not WhatsApp. Not email. WeChat is where Chinese business happens. If you&apos;re not on WeChat, you&apos;re a foreign noise in the inbox. Download it, add your contact, and respond to messages within hours, not days.</li>
            <li><strong>Send a CNY greeting.</strong> Chinese New Year is our Christmas, Thanksgiving, and New Year&apos;s Eve rolled into one. A simple WeChat message in late January saying &quot;Happy New Year — wishing you and your family a prosperous Year of the Horse&quot; puts you in the top 10% of buyers on relationship effort alone.</li>
            <li><strong>Visit the factory if you can.</strong> I know flights to Xiamen aren&apos;t cheap. But a single factory visit can transform your relationship from &quot;overseas buyer #247&quot; to &quot;Dave from Melbourne who came all the way here.&quot; The ROI on that trip — in pricing, quality priority, and problem-solving — typically pays for itself within two orders.</li>
            <li><strong>Share a meal.</strong> Chinese business culture treats shared meals as relationship currency. If you visit, accept the dinner invitation. If the factory owner picks up the check, let them — and make a mental note to reciprocate on the next visit or with a gift. Refusing hospitality can be interpreted as rejecting the relationship.</li>
            <li><strong>Be reliable with payments.</strong> This sounds obvious, but paying on the exact date you committed to — not a day late — is noticed. Factory owners track this. A buyer who pays reliably for 3 consecutive orders gets preferential treatment that a late payer will never receive, no matter how large their orders.</li>
          </ul>

          {/* ─── Section 6: Sample Negotiation Script ─── */}
          <h2 id="script" className="text-3xl font-bold mt-16 mb-6">Sample Negotiation Script: From First Message to Closed Deal</h2>

          <p>
            Here&apos;s a template you can adapt. This is essentially what Buyer B (the one who got $3.65) said to me — I&apos;ve cleaned it up slightly for clarity, but the structure and tone are real:
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
            <h4 className="font-semibold mb-3">Message 1 — Introduction (Day 1)</h4>
            <p className="text-sm text-gray-700 italic mb-4">
              &quot;Hi — my name is [Name] from [Company]. We&apos;re launching a sunglass brand focused on [niche: sustainable fashion / outdoor sports / luxury streetwear]. I came across EyeView through your blog and I was impressed by your acetate collection. We&apos;re looking for a manufacturing partner, not just a supplier — someone we can grow with over the next few years. Is this something you&apos;d be open to discussing?&quot;
            </p>

            <h4 className="font-semibold mb-3">Message 2 — Specifics (Day 2–3, after initial response)</h4>
            <p className="text-sm text-gray-700 italic mb-4">
              &quot;Thanks for getting back to me. We&apos;re interested in three styles from your catalog — the Classic Wayfarer, the Round Metal, and the Oversized Square — in acetate with polarized lenses. Our initial quantities would be 200 pieces per style, and if the quality and lead time meet expectations, we&apos;d like to set up reorders every 6–8 weeks. Can you quote us based on this structure? We&apos;re also open to adjusting the timeline to match your production schedule if that helps on pricing.&quot;
            </p>

            <h4 className="font-semibold mb-3">Message 3 — Negotiation (after receiving quote)</h4>
            <p className="text-sm text-gray-700 italic mb-4">
              &quot;Thanks for the quote — the pricing breakdown is really helpful. I see you have the Wayfarer at $4.50 and the Round at $4.80. Given our commitment to regular reorders across three styles, is there flexibility to bring the blended price closer to $3.80–4.00? We can also offer 50% deposit upfront to help with your material costs. And if March production slots have lighter demand, we&apos;re happy to schedule then.&quot;
            </p>

            <h4 className="font-semibold mb-3">Message 4 — Closing</h4>
            <p className="text-sm text-gray-700 italic">
              &quot;That works — $4.05 blended across all three styles with 50% deposit is fair. Let&apos;s proceed with the sample order for the three styles. If samples meet our spec, we&apos;ll confirm the full order and deposit within 7 days. I&apos;ve also added you on WeChat — easier for quick updates. Looking forward to building something together.&quot;
            </p>
          </div>

          <p>
            Notice what this script <strong>doesn&apos;t</strong> do: demand the lowest price, threaten to walk away, or make empty volume promises. It frames the conversation as a partnership, uses specific quantities and timelines, offers a payment term concession, and respects the factory&apos;s production calendar. That&apos;s how you get the $3.65 price while the other guy is still stuck at $4.50.
          </p>

          <p>
            For more on understanding order quantities before you negotiate, read our guide on <Link href="/blog/sunglasses-moq-guide" className="text-primary-600 hover:underline">sunglasses MOQ requirements</Link> — knowing these numbers before you reach out puts you in the top tier of informed buyers immediately.
          </p>

          {/* ═══════ FAQ SECTION ═══════ */}
          <h2 id="faq" className="text-3xl font-bold mt-16 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* ═══════ CTA ═══════ */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center mt-16">
            <h2 className="text-3xl font-bold mb-4">Ready to Negotiate Like an Insider?</h2>
            <p className="text-xl mb-6 opacity-90">
              Skip the &quot;what&apos;s your best price&quot; opener. Tell me about your brand, your timeline, and where you want to be in 12 months — and I&apos;ll give you a quote that actually reflects what we can build together.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* ═══════ RELATED CONTENT ═══════ */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">More From the Factory Floor</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/products/" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Browse Our Catalog</h3>
                <p className="text-gray-600 text-sm">See our full range of acetate, metal, TR90, and eco-friendly frames — all available for OEM and ODM customization.</p>
              </Link>
              <Link href="/blog/sunglasses-moq-guide" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Sunglasses MOQ Guide</h3>
                <p className="text-gray-600 text-sm">Understand minimum order quantities across styles and manufacturing types — know your numbers before you negotiate.</p>
              </Link>
              <Link href="/blog/oem-vs-odm" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">OEM vs ODM: Which Is Right for You?</h3>
                <p className="text-gray-600 text-sm">The differences in cost, timeline, MOQ, and customization — pick the right path for your brand stage.</p>
              </Link>
              <Link href="/blog/import-sunglasses-from-china" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">How to Import Sunglasses from China</h3>
                <p className="text-gray-600 text-sm">Shipping, customs, duties, and compliance — everything after the factory door, explained step by step.</p>
              </Link>
              <Link href="/contact" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Contact Us</h3>
                <p className="text-gray-600 text-sm">Get a quote for your custom wholesale sunglasses order. Real pricing from a real factory owner.</p>
              </Link>
              <Link href="/products/" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">View All Products</h3>
                <p className="text-gray-600 text-sm">Acetate, metal, TR90, eco-friendly, and prescription-ready frames for every brand niche.</p>
              </Link>
            </div>
          </div>

          {/* ═══════ RELATED POSTS ═══════ */}
          <section className="mt-16 pt-8 border-t">
            <h2 className="text-2xl font-bold mb-6">Continue Reading</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/oem-vs-odm" className="card p-4">
                <h3 className="font-semibold mb-2">OEM vs ODM: Which Manufacturing Path Is Right for Your Brand?</h3>
                <p className="text-sm text-gray-600">Costs, timelines, MOQ differences — and which one to start with.</p>
              </Link>
              <Link href="/blog/import-sunglasses-from-china" className="card p-4">
                <h3 className="font-semibold mb-2">How to Import Sunglasses from China: A Complete Guide</h3>
                <p className="text-sm text-gray-600">Shipping options, customs clearance, duties, and compliance requirements.</p>
              </Link>
            </div>
          </section>

        </div>
      </div>
    </article>
  );
}
