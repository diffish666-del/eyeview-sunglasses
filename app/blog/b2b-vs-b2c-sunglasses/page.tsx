import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats, ProsCons } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'B2B vs B2C Sunglasses: Which Business Model Actually Makes Money in 2026?',
  description: 'A factory owner who supplies both B2B wholesalers and DTC brands compares the real numbers: margins, cash flow, customer acquisition costs, and which model survives a downturn.',
  keywords: ['B2B sunglasses business', 'B2C eyewear brand', 'wholesale vs DTC sunglasses', 'sunglasses business model', 'eyewear profit margins', 'start sunglasses brand', 'DTC sunglasses strategy'],
  alternates: {
    canonical: '/blog/b2b-vs-b2c-sunglasses',
  },
};

const takeaways = [
  'B2B wholesale is a volume game with 25–40% gross margins — predictable, lower risk, but you need $50K+ to start and the patience to wait 60–90 days for net payment terms to clear',
  'DTC (direct-to-consumer) delivers 65–80% gross margins but burns cash on acquisition — the average DTC sunglasses brand spends $18–35 to acquire one customer on Meta, and that number is climbing every quarter',
  'The hidden winner most people miss is the hybrid model: sell B2B to fund operations, use DTC to build brand equity — the factory-supplied brands that succeed almost always start wholesale-first',
  'Customer acquisition cost (CAC) in eyewear DTC has doubled since 2020 — a $29 pair of sunglasses with $25 CAC leaves you $4 before you have even paid for the product, packaging, shipping, or returns',
  'B2B cash flow is the silent killer: net-60 payment terms mean you might wait 90 days from placing your factory order to seeing revenue — plan for at least 3 months of operating capital before your first wholesale order ships',
  'The minimum viable brand is $8,000–15,000 for wholesale-only launch vs. $25,000–75,000 for DTC with a proper website, ad budget, and inventory buffer — and that DTC number assumes you get the ads right on the first try',
];

const quickStats = [
  { label: 'B2B Wholesale Margin', value: '25–40% gross' },
  { label: 'DTC Gross Margin', value: '65–80%' },
  { label: 'DTC CAC (Meta Ads, 2026)', value: '$18–35/customer' },
  { label: 'B2B Minimum Launch Capital', value: '$8K–15K' },
  { label: 'DTC Minimum Launch Capital', value: '$25K–75K' },
  { label: 'B2B Net Payment Terms', value: 'Net 30–90 days' },
];

const faqs = [
  {
    question: 'Which is more profitable: B2B wholesale or DTC sunglasses?',
    answer: 'Per-unit, DTC is far more profitable — 65–80% gross margin vs. 25–40% for wholesale. But profitability is not just margin; it is margin minus acquisition cost minus returns minus overhead. A DTC brand selling 1,000 pairs/month at $59 with 70% margin but spending $25 CAC on every pair is making roughly $16.30/unit before overhead. A B2B wholesaler moving 10,000 pairs at $8 FOB to one retail chain might make $1.50/unit but in a single transaction with zero ad spend. Volume × margin, not just margin percentage, determines which model makes more money.',
  },
  {
    question: 'How much money do I need to start a sunglasses brand?',
    answer: 'For a wholesale-only B2B brand: $8,000–15,000 covers samples (3–5 styles × $50–100 each), initial inventory (300–500 units across 5 styles at $3–8/unit FOB), basic branding, a simple website, and travel to one trade show. For a DTC brand: $25,000–75,000 covers the above plus a serious e-commerce build, professional product photography, 2–3 months of ad budget at $3,000–10,000/month, influencer seeding, and a larger inventory buffer (1,000–3,000 units). The biggest mistake I see is brands launching DTC with $10K — they run out of ad budget before they learn what works.',
  },
  {
    question: 'Can I do both B2B and DTC with the same brand?',
    answer: 'Yes, but be strategic about pricing. If you wholesale sunglasses at $8 FOB to retailers who sell them at $39.99, and you also sell the same styles DTC on your website at $29.99, you have just undercut your retail partners. The retailers will drop you. The hybrid play is: (1) sell different SKUs wholesale vs. DTC, or (2) sell at MSRP on your DTC channel and offer retailers a margin they can compete with, or (3) use your wholesale business to fund your DTC growth — build the brand direct while maintaining retailer relationships through exclusivity windows or channel-specific collections.',
  },
  {
    question: 'What is the biggest hidden cost in the DTC sunglasses model?',
    answer: 'Returns. The average return rate for online eyewear is 15–25% — far higher than most DTC categories because fit is subjective. Every returned pair costs you outbound shipping, return shipping, inspection, repackaging, and potential damage. On a $59 pair with $4 outbound shipping, a return might cost $12–15 in total logistics. If 20% of orders come back, that is effectively a $2.40–3.00 per-unit cost that doesn\'t show up in your initial P&L. Add to that chargeback fraud (customers claiming they never received the item), and your real DTC margin can shrink by 8–12 percentage points.',
  },
  {
    question: 'How long before a sunglasses brand becomes profitable?',
    answer: 'B2B wholesale: 6–12 months to profitability if you land 2–3 decent retail accounts ($3K–10K orders each) in your first quarter. DTC: 12–24 months is realistic, and 18+ months is common. The first year of DTC is almost always a loss — you are paying to learn which creatives work, which audiences convert, and what your sustainable CAC is. Brands that push for month-6 profitability often cut ad spend too aggressively and stall their growth. The brands that succeed treat year one as an investment in data and customer acquisition infrastructure.',
  },
];

const b2bPros = [
  'Predictable revenue from recurring wholesale accounts',
  'Zero ad spend — your retailers handle customer acquisition',
  'Lower startup capital required ($8K–15K)',
  'No returns headache — retailers eat returns, not you',
  'Easier to scale — one PO can be 5,000+ units',
];

const b2bCons = [
  'Net-60 payment terms = 90 days between order and cash in hand',
  '25–40% margins leave little room for error on factory pricing',
  'You are one chain buyer leaving their job away from losing 40% of revenue',
  'Chargebacks and markdown allowances chip away at your net revenue',
  'Limited brand equity: the customer knows the retailer, not you',
];

const dtcPros = [
  '65–80% gross margins — every sale feels like a win',
  'You own the customer data, email list, and brand equity',
  'Creative control — your vision, your brand, your pricing',
  'Unlimited upside — no buyer gatekeeping your growth',
  'Higher exit multiples — DTC brands sell for 2–4× revenue',
];

const dtcCons = [
  'CAC of $18–35/customer eats most of that margin before overhead',
  '15–25% return rate in eyewear drags net margin down 8–12 points',
  'Requires deep expertise in Meta Ads, email marketing, and CRO',
  '$25K–75K minimum launch capital; most first-time founders get the ad math wrong',
  'Cash-hungry: you will reinvest profits into ads for 12–18 months before seeing real net income',
];

const PUBLISH_DATE = '2026-07-27';
const SLUG = 'b2b-vs-b2c-sunglasses';

export default function B2BvsB2CSunglassesPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog/' },
          { name: 'B2B vs B2C Sunglasses: Which Business Model Actually Makes Money' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════ SCHEMA: Article ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "B2B vs B2C Sunglasses: Which Business Model Actually Makes Money in 2026?",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "A factory owner who supplies both B2B wholesalers and DTC brands compares the real numbers: margins, cash flow, customer acquisition costs, and which model survives a downturn.",
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
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Business Strategy</span>
            <span>{PUBLISH_DATE}</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            B2B vs B2C Sunglasses: Which Business Model Actually Makes Money in 2026?
          </h1>
          <p className="text-xl text-gray-600">
            I have watched brands try both paths from the factory floor. Some are now doing $2M/year. Others burned through six figures and disappeared. Here is the math that separates the two outcomes.
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
            <li><a href="#the-real-numbers" className="text-primary-600 hover:underline">The Real Numbers: B2B vs B2C Unit Economics</a></li>
            <li><a href="#b2b-deep" className="text-primary-600 hover:underline">B2B Wholesale: The Slow-Burn Empire Builder</a></li>
            <li><a href="#dtc-deep" className="text-primary-600 hover:underline">DTC: High Margins, High Stakes</a></li>
            <li><a href="#hybrid" className="text-primary-600 hover:underline">The Hybrid Model: Why the Smartest Brands Do Both</a></li>
            <li><a href="#which-for-you" className="text-primary-600 hover:underline">Which Model Fits Your Situation?</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Frequently Asked Questions</a></li>
          </ul>
        </nav>

        {/* ═══════ ARTICLE BODY ═══════ */}
        <div className="prose prose-lg max-w-none">

          {/* 🟢 GEO: Key Takeaways */}
          <KeyTakeaways items={takeaways} />

          {/* 🟡 GEO: Quick Stats */}
          <QuickStats stats={quickStats} title="B2B vs DTC at a Glance" />

          {/* ─── Section 1: The Real Numbers ─── */}
          <h2 id="the-real-numbers" className="text-3xl font-bold mt-16 mb-6">The Real Numbers: B2B vs B2C Unit Economics</h2>
          <p>Let me walk you through an actual pair of sunglasses. Not a hypothetical. A TR90 sport frame with polarized lenses — one of our best-selling wholesale styles. FOB factory price at 500 units: <strong>$4.80</strong> per pair, including basic branding and a microfiber pouch.</p>

          <p>If you sell that pair <strong>B2B wholesale</strong> to a retailer at $8.00 per unit, your gross margin is 40%. The retailer marks it up to $29.99 and keeps their own margin. You make $3.20 per pair, times however many the retailer orders. One chain order of 2,000 units = $6,400 in gross profit with essentially zero marketing cost beyond your initial outreach.</p>

          <p>If you sell the same pair <strong>DTC</strong> at $49.99 on your own website, your gross margin is 90.4% on cost of goods. Sounds incredible. But here is what actually happens: Facebook/Instagram ad to acquire that customer costs $22 on average. Credit card processing: $1.45. Packaging upgrade for DTC unboxing: $1.20. Outbound shipping: $4.50. You are now at $29.15 in costs before you have paid for your website, your email platform, your product photography, or your own salary. That 90% margin becomes 42% net before overhead — still good, but not &quot;I am going to retire on this&quot; good, and only if your ads convert consistently.</p>

          <p>Three years ago, I had a customer named Marcus who launched a DTC brand with one of our acetate styles at $69 retail. His first three months, CAC was $14 and he was ecstatic. By month six, iOS privacy changes had degraded his targeting and CAC crept to $31. He was losing $7 on every new customer. He pivoted to wholesale — same frames, same branding — and within four months had placement in 12 independent optical shops across California, doing $35K/month at 35% margins with zero ad spend. He still runs a DTC site, but it is now a brand showcase that funnels to his retail stockists, not his primary revenue engine.</p>

          {/* ─── Section 2: B2B Deep Dive ─── */}
          <h2 id="b2b-deep" className="text-3xl font-bold mt-16 mb-6">B2B Wholesale: The Slow-Burn Empire Builder</h2>

          <p>B2B wholesale is not sexy. You will not see wholesale brands on TechCrunch. There are no &quot;wholesale founder&quot; influencers on TikTok. But walk through any Sunglass Hut, any independent optical shop, any resort gift shop — every single pair on those shelves came through a wholesale supply chain. Someone made 25–40% margin on that sale, and they did it without spending a dollar on Instagram ads.</p>

          <h3 className="text-2xl font-bold mt-10 mb-4">How B2B Actually Works</h3>
          <p>You source sunglasses from a factory (or you are the factory). You build a catalog — typically 20–50 styles across 3–5 colorways each. You identify retail buyers: optical chains, independent boutiques, resort gift shops, cruise lines, corporate gift buyers, promotional products distributors. You send samples, negotiate pricing, and ship against purchase orders. Typical order: 100–500 units per style. Typical reorder cycle: every 3–6 months per account.</p>
          <p>The magic of B2B is <strong>compounding accounts</strong>. Land five accounts doing $5K each per quarter, and you are at $100K annual revenue with near-zero marketing overhead. Land twenty accounts at that level, and you are at $400K. The limiting factor is not ad budget — it is how many buyers you can get on the phone.</p>

          <ProsCons good={b2bPros} bad={b2bCons} title="B2B Wholesale" />

          <h3 className="text-2xl font-bold mt-10 mb-4">The B2B Cash Flow Trap</h3>
          <p>Here is what the margin numbers do not tell you: B2B runs on credit. You pay your factory 30% deposit to start production, 70% before shipment. Meanwhile, your retail customer pays you on net-30 or net-60 terms. Translation: you might pay the factory $12,000 in week one and not receive a dollar from your customer until week twelve. If you have three orders in flight simultaneously — which is what growth looks like — you could have $36,000+ of your own cash tied up at any given time.</p>
          <p>This is why I tell first-time wholesale brand owners: have six months of operating capital before you take your first order. Not three months. Six. Because the buyer who promised a PO in March might not actually sign until May, and their accounting department might take another 45 days to cut your first check. You are running a business, not a charity, and cash flow gaps kill businesses faster than bad products ever do.</p>

          {/* ─── Section 3: DTC Deep Dive ─── */}
          <h2 id="dtc-deep" className="text-3xl font-bold mt-16 mb-6">DTC: High Margins, High Stakes</h2>

          <p>Every factory owner in China has watched a DTC brand explode from a $3,000 test order to a $50,000 monthly reorder within six months. It happens. It is also the exception, not the rule. For every Warby Parker, there are 500 brands you have never heard of that burned through their launch capital and quietly shut down.</p>

          <h3 className="text-2xl font-bold mt-10 mb-4">The DTC Math That Nobody Posts on LinkedIn</h3>
          <p>A $59 pair of sunglasses. Cost of goods: $5.00 landed. Gross margin: 91.5%. Looks amazing on a pitch deck.</p>
          <p>Real costs per unit sold DTC:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Sunglasses (FOB + shipping): <strong>$5.00</strong></li>
            <li>Premium packaging (custom box, pouch, cleaning cloth, thank-you card): <strong>$2.20</strong></li>
            <li>Customer acquisition (Meta/Google/TikTok blended): <strong>$22.00</strong></li>
            <li>Credit card processing (2.9% + $0.30): <strong>$2.01</strong></li>
            <li>Outbound shipping (USPS/UPS average): <strong>$4.80</strong></li>
            <li>Returns reserve (20% return rate × $12 cost per return): <strong>$2.40</strong></li>
          </ul>
          <p>Total cost per unit sold: <strong>$38.41</strong>. Net contribution per unit: $20.59. That is a 35% net margin — still healthy, but worlds away from the 91.5% gross margin everyone quotes. And that $20.59 has to cover your Shopify subscription, Klaviyo email platform, product photography, influencer seeding, website development, your salary, and profit. Suddenly, selling 1,000 pairs a month at $20.59 contribution = $20,590 to cover all overhead. If your monthly fixed costs are $12,000 (salary, software, contractors, warehouse), your take-home is $8,590. Not bad. But you sold $59,000 worth of product to get there.</p>

          <ProsCons good={dtcPros} bad={dtcCons} title="DTC Sunglasses" />

          <h3 className="text-2xl font-bold mt-10 mb-4">The Ad Platform Tax</h3>
          <p>DTC brands do not compete on product — they compete on attention. And attention in 2026 is expensive. Meta CPMs (cost per thousand impressions) in the eyewear category have risen from $12–18 in 2020 to $28–45 in 2026. The same ad dollar buys half the impressions it did five years ago. TikTok offers lower CPMs but notoriously fickle conversion rates — great for awareness, terrible for predictable ROAS.</p>
          <p>The brands winning on DTC in 2026 are not the ones with the best ads. They are the ones with the best <strong>retention</strong>. If your average customer buys 1.0 times and disappears, you will almost certainly lose money on the first purchase and never recover it. If your average customer buys 2.5 times over two years — through repeat purchases, email campaigns, and new collection launches — the math flips. The best DTC eyewear brands I supply have a repeat purchase rate above 30% within 12 months. The ones that fail are stuck below 10%.</p>

          {/* ─── Section 4: Hybrid Model ─── */}
          <h2 id="hybrid" className="text-3xl font-bold mt-16 mb-6">The Hybrid Model: Why the Smartest Brands Do Both</h2>

          <p>There is a third path that does not get enough attention: wholesale-first, DTC-second. Here is why it works.</p>
          <p>You launch as a wholesale brand. You place your sunglasses in 10–15 independent retailers who handle the customer-facing work. You build cash flow — predictable purchase orders with 35% margins and zero ad spend. You learn which styles sell, which colorways move, and what customers actually want — data that comes free from your retail partners instead of costing you $22 per data point in ad testing.</p>
          <p>After 12–18 months, you have a validated product line, a recognizable brand name (because your logo is on 15 store shelves), and operating capital from wholesale profits. Now you launch DTC — not as a desperate gamble, but as a strategic expansion. Your wholesale business funds your ad testing. Your retail presence lends credibility to your website. Your existing customers can shop you at their local boutique AND online. And because you are not burning venture capital to survive, you can afford to be patient with your DTC growth.</p>
          <p>I have watched this exact playbook work for at least six brands I supply. They started with a $10K wholesale order, built to $200K–400K in wholesale revenue over 18–24 months, then launched DTC from a position of strength. None of them are famous. All of them are profitable.</p>

          {/* ─── Section 5: Which Model Fits You ─── */}
          <h2 id="which-for-you" className="text-3xl font-bold mt-16 mb-6">Which Model Fits Your Situation?</h2>

          <h3 className="text-2xl font-bold mt-10 mb-4">Go Wholesale-First If:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>You have $8,000–15,000 and a strong network in retail, hospitality, or corporate gifting</li>
            <li>You would rather spend time on the phone with 50 buyers than optimizing Facebook ads</li>
            <li>You want predictable, compounding revenue without the platform risk of Meta/Google algorithm changes</li>
            <li>You are okay with slower growth and lower per-unit margins in exchange for dramatically lower risk</li>
            <li>You plan to eventually launch DTC and want a funded runway to test ads without burning your own savings</li>
          </ul>

          <h3 className="text-2xl font-bold mt-10 mb-4">Go DTC-First If:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>You have $25,000–75,000 in launch capital and are comfortable losing money for 12–18 months</li>
            <li>You have deep expertise (or a co-founder with deep expertise) in paid social, email marketing, and conversion rate optimization</li>
            <li>Your brand concept is visually distinctive enough to stop a thumb mid-scroll — generic &quot;premium sunglasses for stylish people&quot; will not cut it</li>
            <li>You have a content engine: founder story, behind-the-scenes factory content, lifestyle UGC — DTC brands live and die on creative velocity</li>
            <li>Your goal is a venture-scale exit (50×+ revenue multiple) rather than a lifestyle business — DTC can scale faster than wholesale when it works</li>
          </ul>

          <h3 className="text-2xl font-bold mt-10 mb-4">Go Hybrid If:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>You have wholesale experience or access to retail buyers, but also want to build long-term brand equity</li>
            <li>You can manage channel conflict — different SKUs per channel, MAP pricing, retailer exclusivity windows</li>
            <li>You are patient: 18–24 months wholesale build-up, then DTC launch from a position of cash-flow strength</li>
          </ul>

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
            <h2 className="text-3xl font-bold mb-4">Ready to Manufacture Your First Collection?</h2>
            <p className="text-xl mb-6 opacity-90">Whether you are launching wholesale, DTC, or hybrid — we will help you build the right product line for your business model. MOQ as low as 100 pieces per style.</p>
            <Link
              href="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* ═══════ RELATED CONTENT ═══════ */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">More From the Factory Floor</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/wholesale-sunglasses-pricing-guide" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Wholesale Sunglasses Price Guide 2026</h3>
                <p className="text-gray-600 text-sm">Real factory-direct pricing by material, style, and quantity.</p>
              </Link>
              <Link href="/blog/start-sunglasses-brand" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">How to Start a Sunglasses Brand</h3>
                <p className="text-gray-600 text-sm">The complete roadmap from concept to first sale.</p>
              </Link>
              <Link href="/blog/sunglasses-pricing-strategy" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Sunglasses Pricing Strategy Guide</h3>
                <p className="text-gray-600 text-sm">How to price your line for wholesale, retail, and DTC.</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
