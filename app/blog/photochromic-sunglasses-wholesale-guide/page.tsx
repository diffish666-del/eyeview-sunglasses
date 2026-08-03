import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'Photochromic Sunglasses Wholesale Guide: Transition Lenses Pricing, MOQ & Factory Sourcing',
  description: 'Factory-direct guide to photochromic sunglasses wholesale: lens quality grades, bulk pricing by quantity, MOQ minimums, fade-speed testing, and how to avoid the cheap photochromic lenses that ruin your brand reputation.',
  keywords: ['photochromic sunglasses wholesale', 'transition lenses bulk', 'photochromic sunglasses manufacturer', 'light-adaptive sunglasses wholesale', 'photochromic lens pricing', 'transition sunglasses factory', 'bulk photochromic eyewear', 'photochromic sunglasses MOQ', 'photochromic lens quality grades', 'wholesale transition glasses'],
  alternates: {
    canonical: '/blog/photochromic-sunglasses-wholesale-guide',
  },
};

const takeaways = [
  'Not all photochromic lenses are created equal — there is a massive quality gap between the $1.50/pair photochromic lenses in generic wholesale catalogs and the $8–12/pair lenses that actually darken fast, fade back clear indoors, and last 2+ years without degradation',
  'Photochromic lens quality comes down to three things: activation speed (how fast they darken in sunlight), fade-back speed (how fast they clear indoors), and cycle life (how many darken/clear cycles before the photochromic dye degrades) — cheap lenses fail all three and your customers will notice within weeks',
  'Chinese factories offer photochromic lenses at three tiers: entry-grade (photochromic dye only on lens surface, ~$1.50–3/pair), mid-grade (in-mass photochromic, ~$3–6/pair), and high-grade (in-mass with UV-stabilized dye, ~$6–12/pair in bulk) — the mid-grade tier is the sweet spot for most wholesale buyers',
  'MOQ for custom photochromic sunglasses starts at 500–1,000 units per style, but you can test the market with 300 units of stock OEM frames with photochromic lenses — a $900–1,500 trial order that lets you validate demand before committing to custom tooling',
  'The biggest complaint from end customers about photochromic sunglasses is that they "don\'t work in the car" — most photochromic lenses are UV-activated and car windshields block UV, so they stay clear inside vehicles; if your wholesale customers sell to drivers, you need to specify "in-car" photochromic lenses or be upfront about this limitation',
  'The global photochromic lens market is projected to hit $8.9 billion by 2030 (8.2% CAGR), driven by aging populations needing prescription photochromics and outdoor enthusiasts wanting one pair that works in all light conditions — wholesalers who add a photochromic line now are positioning for a category that is growing faster than standard sunglasses',
];

const quickStats = [
  { label: 'Global Photochromic Market (2030)', value: '$8.9B' },
  { label: 'Market CAGR (2024–2030)', value: '8.2%' },
  { label: 'Entry-Level Photochromic Lens', value: '$1.50–3.00/pair' },
  { label: 'Mid-Grade Photochromic Lens', value: '$3.00–6.00/pair' },
  { label: 'High-Grade Photochromic Lens', value: '$6.00–12.00/pair' },
  { label: 'Custom Frame MOQ (Photochromic)', value: '500–1,000 units' },
  { label: 'Activation Time (Quality Lens)', value: '15–30 seconds' },
  { label: 'Fade-Back Time (Indoors)', value: '2–5 minutes' },
];

const faqs = [
  {
    question: 'What is the difference between photochromic and polarized lenses?',
    answer: 'Photochromic lenses change tint based on UV light exposure — they darken outdoors and clear up indoors. Polarized lenses have a fixed tint with a chemical film that blocks horizontal glare. They serve completely different purposes. Photochromic is about convenience (one pair for indoor/outdoor), polarized is about glare reduction (especially on water, snow, and roads). You can get photochromic polarized lenses, but they cost more ($8–18/pair at wholesale) because you\'re combining two technologies in one lens. Most wholesale buyers start with standard photochromic and add polarized photochromic as a premium SKU later.',
  },
  {
    question: 'How long do photochromic lenses last before they stop working?',
    answer: 'Quality photochromic lenses (in-mass dye, UV-stabilized) typically last 2–3 years of daily use before the darkening effect noticeably weakens. The degradation is gradual — the lenses don\'t get as dark as they used to, and the fade-back time gets longer. Entry-level surface-coated photochromic lenses can start degrading in 6–12 months, especially if the wearer is outdoors 4+ hours daily. This is the #1 reason to avoid the cheapest photochromic lenses for any brand that cares about repeat customers. The photochromic dye molecules literally wear out from repeated UV exposure — every darken/clear cycle causes a tiny amount of molecular fatigue. At the factory level, we test cycle life using a UV lamp and timer: a good lens should maintain >80% of its darkening ability after 3,000 cycles.',
  },
  {
    question: 'Why do photochromic sunglasses cost more than regular sunglasses?',
    answer: 'The cost difference comes from the photochromic dye itself and the manufacturing complexity. Regular sunglass lenses use a fixed dye that is mixed into the lens monomer before injection or casting — simple, cheap, well-established. Photochromic lenses require either embedding photochromic molecules throughout the lens material (in-mass method) or applying a photochromic coating to the lens surface. The in-mass method uses proprietary photochromic dyes that cost 5–10× more than standard dyes, and the manufacturing process requires tighter temperature control because heat degrades the photochromic compound. At wholesale, a standard TAC polarized lens might cost $1.20/pair in bulk; a mid-grade photochromic lens costs $3.50–5.00/pair. The premium is real — it is not just marketing markup.',
  },
  {
    question: 'Can I get prescription photochromic sunglasses wholesale?',
    answer: 'Yes, but prescription photochromic is a different supply chain than plano (non-prescription) photochromic. Plano photochromic sunglasses are produced in bulk at the factory level using injection-molded or cast lenses. Prescription photochromic lenses are typically made by optical labs that grind the prescription into a photochromic lens blank. Some Chinese factories with in-house optical labs can produce Rx photochromic sunglasses in bulk (500+ units), but the pricing is higher — expect $12–25/pair for single-vision photochromic Rx and $25–50/pair for progressive photochromic Rx, depending on the prescription complexity and frame integration. For wholesale buyers entering the Rx photochromic market, the simplest approach is to offer photochromic frames with demo lenses and partner with a local optical lab for prescription fulfillment — this avoids the inventory nightmare of stocking every possible prescription combination.',
  },
  {
    question: 'What should I check when buying photochromic sunglasses from a Chinese factory?',
    answer: 'Three things to test before placing a bulk order: (1) Activation and fade speed — take a sample pair outside into direct sunlight and count how long it takes to fully darken (should be under 30 seconds for quality lenses) and how long to clear indoors (under 5 minutes). (2) Temperature sensitivity — photochromic lenses darken more in cold weather and less in hot weather; a good lens should still achieve 70%+ tint in 35°C/95°F heat. Cheap lenses barely darken at all on hot days. (3) Cycle life — ask the factory for their photochromic dye supplier and cycle test report. Reputable factories use dyes from companies like Transitions Optical (now owned by EssilorLuxottica), Hoya, or Corning — or their Chinese equivalents like Conant Optical or Mingyue Optical. If the factory cannot name their dye supplier, walk away. Also, always specify that lenses must meet ANSI Z80.3 or EN ISO 12312-1 standards for UV protection — photochromic does not automatically mean UV400, and you need both.',
  },
  {
    question: 'What are the most popular photochromic lens colors for wholesale?',
    answer: 'Grey photochromic is the bestseller across all markets — it provides the most natural color perception and pairs well with any frame color. Brown/amber photochromic is the second most popular, especially in markets with variable weather (UK, Northern Europe, Pacific Northwest) because it enhances contrast on overcast days. Green photochromic (often marketed as G-15 photochromic) has a niche following among outdoor enthusiasts and military/law enforcement buyers. Blue photochromic is growing in the fashion segment, particularly in the Korean and Japanese markets. For a first wholesale photochromic order, I recommend 60% grey, 30% brown, 10% green/other — this split covers 95% of customer preference across most markets. Avoid stocking novelty colors (pink, purple, yellow photochromic) unless you have a specific buyer requesting them — they look interesting on a spec sheet but sit in inventory.',
  },
];

const PUBLISH_DATE = '2026-08-04';
const SLUG = 'photochromic-sunglasses-wholesale-guide';

export default function PhotochromicSunglassesWholesaleGuide() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog/' },
          { name: 'Photochromic Sunglasses Wholesale Guide' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════ SCHEMA: Article ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Photochromic Sunglasses Wholesale Guide: Transition Lenses Pricing, MOQ & Factory Sourcing",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Factory-direct guide to photochromic sunglasses wholesale: lens quality grades, bulk pricing, MOQ, fade-speed testing, and avoiding cheap photochromic lenses that hurt your brand.",
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
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Product Guide</span>
            <span>{PUBLISH_DATE}</span>
            <span>•</span>
            <span>14 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Photochromic Sunglasses Wholesale Guide: Transition Lenses Pricing, MOQ & Factory Sourcing
          </h1>
          <p className="text-xl text-gray-600">
            Most wholesale buyers know photochromic lenses exist. What they don&apos;t know is that the quality gap between a $1.50 photochromic lens and an $8 one is the difference between a customer who buys once and a customer who tells everyone they know not to trust your brand. This guide covers what I&apos;ve learned shipping photochromic sunglasses to buyers in 40+ countries.
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
            <li><a href="#how-they-work" className="text-primary-600 hover:underline">How Photochromic Lenses Actually Work</a></li>
            <li><a href="#quality-tiers" className="text-primary-600 hover:underline">The Three Quality Tiers: What You&apos;re Really Paying For</a></li>
            <li><a href="#pricing-moq" className="text-primary-600 hover:underline">Bulk Pricing &amp; MOQ: What a Real Factory Order Looks Like</a></li>
            <li><a href="#market-demand" className="text-primary-600 hover:underline">Who&apos;s Buying Photochromic Wholesale Right Now</a></li>
            <li><a href="#qc-testing" className="text-primary-600 hover:underline">Quality Control: How to Test Photochromic Lenses Before You Buy</a></li>
            <li><a href="#common-problems" className="text-primary-600 hover:underline">The 4 Problems Nobody Warns You About</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Frequently Asked Questions</a></li>
          </ul>
        </nav>

        {/* ═══════ ARTICLE BODY ═══════ */}
        <div className="prose prose-lg max-w-none">

          {/* 🟢 GEO: Key Takeaways */}
          <KeyTakeaways items={takeaways} />

          {/* 🟡 GEO: Quick Stats */}
          <QuickStats stats={quickStats} title="Quick Facts" />

          {/* ─── Section 1: How They Work ─── */}
          <h2 id="how-they-work" className="text-3xl font-bold mt-16 mb-6">How Photochromic Lenses Actually Work</h2>
          
          <p>I get a version of this question from almost every new wholesale buyer: &quot;Are photochromic lenses a coating or are they inside the lens?&quot; Fair question — the answer determines what you&apos;re paying for.</p>
          
          <p>Photochromic molecules — usually silver halide or organic naphthopyran compounds — are embedded in the lens material. When UV light hits these molecules, they undergo a chemical reaction that changes their molecular structure, making them absorb more visible light. That is what makes the lens look darker. When the UV source goes away (you walk indoors), the molecules revert to their original structure and the lens clears up.</p>
          
          <p>There are two ways factories put these molecules into a lens:</p>
          
          <p><strong>In-mass photochromic:</strong> The photochromic dye is mixed into the liquid lens monomer before the lens is cast or injected. The dye is distributed through the entire lens thickness. This is what Transitions Optical pioneered in the 1990s, and it is what every quality photochromic lens uses today. The downside: it costs more because you&apos;re using photochromic dye throughout the lens, not just on the surface.</p>
          
          <p><strong>Surface-coated photochromic:</strong> The photochromic dye is applied as a coating to the front surface of a standard lens. It is cheaper — the dye only goes on the surface — but it wears off. Every scratch, every cleaning with a rough cloth, every drop of sunscreen that lands on the lens degrades the coating a little. After 6–12 months of regular use, you&apos;ve got a pair of sunglasses that barely darken at all.</p>
          
          <p>When a supplier quotes you $1.50/pair for photochromic lenses, you are getting surface-coated. Period. Nobody can profitably produce in-mass photochromic at that price. The dye raw material alone costs more.</p>

          {/* ─── Section 2: Quality Tiers ─── */}
          <h2 id="quality-tiers" className="text-3xl font-bold mt-16 mb-6">The Three Quality Tiers: What You&apos;re Really Paying For</h2>
          
          <p>I have been on the factory floor when a buyer argued that &quot;photochromic is photochromic&quot; and all lenses are the same. They are not. Here is what the market actually offers, from the bottom up.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Tier 1: Entry-Grade (Surface-Coated) — $1.50–$3.00/pair</h3>
          
          <p>These are the photochromic sunglasses you see on Alibaba for $0.80–$1.20 FOB. The lens is a standard TAC or polycarbonate lens with a thin photochromic coating applied to the surface. They darken slowly — 60–90 seconds to reach full tint — and fade back even slower, sometimes 8–10 minutes. After 6 months of daily use, they barely darken at all. The activation range is narrow: they work decently at 15–25°C but barely activate above 30°C.</p>
          
          <p>The worst part: these lenses often do not meet UV400 standards consistently. The photochromic coating can have pinholes or uneven application that lets UV through. If you are selling to markets with strong consumer protection laws (EU, Australia, US), these are a liability. I have seen shipments rejected at EU customs because the lab test showed inconsistent UV blocking across the lens surface.</p>
          
          <p><strong>Who buys these:</strong> Street vendors, dollar stores, carnival giveaways, markets where nobody sues over sunglasses. Not for anyone building a brand.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Tier 2: Mid-Grade (In-Mass, Standard Dye) — $3.00–$6.00/pair</h3>
          
          <p>This is where things get interesting. Mid-grade photochromic lenses use in-mass dye — the photochromic compound is mixed into the lens material before molding. Activation time drops to 20–40 seconds, fade-back is 3–5 minutes, and the lenses maintain decent performance for 18–24 months. UV400 is consistent across the lens surface because the UV-blocking agents are also in-mass.</p>
          
          <p>The dye used at this tier is typically a generic naphthopyran compound sourced from Chinese chemical suppliers like Conant Optical. It is not Transitions-grade, but it is functional. The main limitation is temperature sensitivity — these lenses will under-darken on a 35°C summer day, which is a real issue if your customers are in hot climates.</p>
          
          <p><strong>Who buys these:</strong> Mid-market brands, Amazon sellers, boutique optical shops, promotional product companies that care about repeat business. This is where 70% of our photochromic orders land. The value proposition works for most wholesale buyers: the lenses actually work, customers are happy, and the price leaves room for healthy retail margins.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Tier 3: High-Grade (In-Mass, UV-Stabilized Dye) — $6.00–$12.00/pair</h3>
          
          <p>These use premium photochromic dyes — either licensed from Transitions Optical, Hoya, or high-end Chinese equivalents that match their performance. Activation is 10–20 seconds, fade-back is under 2 minutes, and temperature stability is much better: these lenses still reach 75–85% tint even at 35°C. Cycle life exceeds 3,000 darken/clear cycles with minimal degradation.</p>
          
          <p>The additional cost comes from three things: the premium dye (3–4× the cost of mid-grade), a UV-stabilizing compound added to the lens monomer that protects the photochromic molecules from fatigue, and tighter QC (each batch is tested for activation speed, fade speed, and UV blocking before release).</p>
          
          <p><strong>Who buys these:</strong> Premium brands, optical chains, anyone selling sunglasses above $50 retail. If your brand positioning is &quot;quality,&quot; this is your tier. The difference in customer experience between a Tier 2 and Tier 3 lens is noticeable — and your customers will notice.</p>
          
          <p>A practical note: some factories market Tier 2 lenses as &quot;Transitions-quality&quot; or &quot;Transitions-comparable.&quot; They are not. If a factory cannot provide the dye supplier name and a batch test report, assume you are getting Tier 2 at best.</p>

          {/* ─── Section 3: Pricing & MOQ ─── */}
          <h2 id="pricing-moq" className="text-3xl font-bold mt-16 mb-6">Bulk Pricing &amp; MOQ: What a Real Factory Order Looks Like</h2>
          
          <p>Let me give you real numbers, not catalogue prices. These are FOB Xiamen quotes I would send to a wholesale buyer today, assuming standard acetate or TR90 frames with photochromic lenses.</p>
          
          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Quantity</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Tier 1 (Surface)</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Tier 2 (In-Mass)</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Tier 3 (Premium)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">300–500 units</td>
                  <td className="border border-gray-300 px-4 py-2">$2.80–3.50</td>
                  <td className="border border-gray-300 px-4 py-2">$5.00–7.00</td>
                  <td className="border border-gray-300 px-4 py-2">$10.00–14.00</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">1,000–3,000 units</td>
                  <td className="border border-gray-300 px-4 py-2">$2.00–2.80</td>
                  <td className="border border-gray-300 px-4 py-2">$3.80–5.00</td>
                  <td className="border border-gray-300 px-4 py-2">$7.50–10.00</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">3,000–10,000 units</td>
                  <td className="border border-gray-300 px-4 py-2">$1.50–2.00</td>
                  <td className="border border-gray-300 px-4 py-2">$3.00–3.80</td>
                  <td className="border border-gray-300 px-4 py-2">$6.00–7.50</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">10,000+ units</td>
                  <td className="border border-gray-300 px-4 py-2">$1.20–1.50</td>
                  <td className="border border-gray-300 px-4 py-2">$2.50–3.00</td>
                  <td className="border border-gray-300 px-4 py-2">$5.00–6.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p>These prices include the frame, photochromic lenses, basic packaging (polybag + cleaning cloth), and standard QC. Custom packaging, logo printing, hangtags, and premium cases add $0.30–$1.50/unit depending on complexity.</p>
          
          <p><strong>MOQ reality check:</strong> Most factories in Xiamen and Wenzhou will quote 1,000–2,000 units MOQ for photochromic sunglasses. But here is what actually happens on the floor: if you are ordering stock OEM frames (existing molds) and just swapping in photochromic lenses, many factories will accept 300–500 units for a trial order — especially if you are ordering 3+ styles. The per-unit price goes up at low quantities, but a $1,500 trial order is a lot smarter than committing $10,000 to a product you have not tested in your market.</p>
          
          <p><strong>Custom frame tooling:</strong> If you want your own frame design with photochromic lenses, mold fees run $300–800 per mold, and you will need 2–4 molds per style (different sizes or colors). The MOQ jumps to 1,000–2,000 units per style because the factory needs to amortize the mold cost. Total first order for a custom photochromic line with 3 styles × 1,000 units each: roughly $12,000–$18,000 at Tier 2 pricing, plus $2,000–$3,000 in mold fees.</p>
          
          <p><strong>Lead time:</strong> 25–35 days for stock OEM with photochromic lenses. 45–60 days for custom frames with photochromic. Add 2 weeks if you are doing custom packaging with branded boxes. The photochromic lens production itself does not add significant lead time — the bottleneck is almost always the frame production, not the lens.</p>

          {/* ─── Section 4: Market Demand ─── */}
          <h2 id="market-demand" className="text-3xl font-bold mt-16 mb-6">Who&apos;s Buying Photochromic Wholesale Right Now</h2>
          
          <p>I track our photochromic order data quarterly. Here is what the demand looks like as of mid-2026.</p>
          
          <p><strong>Optical shops and optometrists</strong> are the fastest-growing segment. They are adding plano (non-prescription) photochromic sunglasses as an add-on sale to prescription eyewear customers. The pitch is simple: &quot;You already have prescription glasses. Here is a pair of photochromic sunglasses for when you are outdoors.&quot; Average order: 200–500 units, mostly Tier 2, grey lenses.</p>
          
          <p><strong>Outdoor and sports retailers</strong> are the second biggest segment — hiking, fishing, cycling, golf shops. These buyers want polarized photochromic (Tier 2 or 3) and they are picky about frame durability. They ask about hinge quality, lens scratch resistance, and whether the frame floats. Average order: 300–800 units.</p>
          
          <p><strong>Promotional product companies</strong> are buying photochromic for corporate gifts and event giveaways. They usually order Tier 1 because the budget is tight and the end user is not paying for the glasses. But some higher-end corporate clients (banks, insurance companies, luxury car dealers) order Tier 2 photochromic with custom logo as premium client gifts. Average order: 500–2,000 units.</p>
          
          <p><strong>Amazon and e-commerce sellers</strong> are a mixed bag. The smart ones order Tier 2, price at $25–40 retail, and build a brand around &quot;affordable photochromic.&quot; The less experienced ones order Tier 1, price at $15, and drown in 1-star reviews about lenses that stopped working. I have watched at least a dozen Amazon photochromic listings die this way. Do not be one of them.</p>
          
          <p><strong>Geographic demand patterns:</strong> Northern Europe and the UK love photochromic — the weather changes constantly and people do not want to carry two pairs of glasses. Australia and the Middle East are challenging markets because high temperatures reduce photochromic activation — if you are selling into these regions, Tier 3 lenses are almost mandatory. The US market splits roughly 60/40 between optical shops (prescription-adjacent) and direct-to-consumer e-commerce.</p>

          {/* ─── Section 5: QC Testing ─── */}
          <h2 id="qc-testing" className="text-3xl font-bold mt-16 mb-6">Quality Control: How to Test Photochromic Lenses Before You Buy</h2>
          
          <p>You do not need a lab to catch bad photochromic lenses. Here is what I tell every buyer to do with their samples before placing an order.</p>
          
          <p><strong>1. The doorframe test.</strong> Stand in a well-lit indoor room. Hold one lens halfway through an open doorway into direct sunlight. Count how many seconds until the exposed half is visibly darker than the indoor half. Under 20 seconds: excellent. 20–40 seconds: acceptable. Over 60 seconds: reject. This is the simplest test and it catches the worst lenses immediately.</p>
          
          <p><strong>2. The fade-back test.</strong> After the lens is fully darkened outdoors, walk indoors and place the sunglasses on a white piece of paper. Time how long it takes for the lens to return to near-clear. Under 3 minutes: excellent. 3–5 minutes: acceptable. Over 8 minutes: reject — your customers will walk into a restaurant and sit there looking like they are wearing sunglasses at dinner for 10 minutes.</p>
          
          <p><strong>3. The hot day test.</strong> Test the lenses on a hot day (30°C+ / 86°F+). Photochromic lenses naturally darken less in heat, but a quality lens should still reach 70%+ of its maximum tint. If the lens barely changes on a hot day, it will be useless in summer — which is exactly when most people wear sunglasses.</p>
          
          <p><strong>4. The UV card test.</strong> Buy a UV test card (they cost about $2 on Amazon). Shine a UV flashlight through the lens onto the card. The card should show zero or near-zero UV transmission. If the card lights up purple, the lens is not blocking UV — and UV protection is the entire point of sunglasses, photochromic or not.</p>
          
          <p><strong>5. The scratch test (optional but revealing).</strong> Lightly scratch the lens surface with a key — just once, on the edge. If the scratch reveals a clear base layer underneath a darker surface layer, you have a surface-coated photochromic lens. In-mass photochromic lenses look the same color all the way through. This is a destructive test, but it tells you exactly what you are paying for.</p>
          
          <p>For bulk orders, insist on these from the factory: a UV transmission spectrometer report (showing UV400 compliance across the entire lens surface, not just the center), an activation/fade speed test video or report, and a batch certificate naming the photochromic dye supplier. A factory that cannot provide these is either hiding something or does not know what they are selling — neither is acceptable.</p>

          {/* ─── Section 6: Common Problems ─── */}
          <h2 id="common-problems" className="text-3xl font-bold mt-16 mb-6">The 4 Problems Nobody Warns You About</h2>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Problem 1: They Don&apos;t Work in Cars</h3>
          
          <p>Most car windshields are laminated glass with a UV-blocking interlayer. That interlayer blocks 98–99% of UV — which is great for your skin but kills photochromic activation. Your photochromic sunglasses will stay clear or barely tinted while you are driving. This is the #1 customer complaint about photochromic lenses, and it is not a defect — it is physics. Some premium photochromic lenses (like Transitions XTRActive) are formulated to react to visible light as well as UV, so they do work partially behind a windshield. But these are more expensive ($12–18/pair at wholesale) and still do not get as dark as they would in direct sunlight. If your wholesale customers are selling to drivers, either specify &quot;in-car&quot; photochromic lenses or put a clear disclaimer on the packaging.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Problem 2: Temperature Kills Performance</h3>
          
          <p>Photochromic molecules are temperature-sensitive by nature. At 0°C, they darken deeply and fade slowly. At 35°C, the same lens might only reach 50–60% of its maximum tint. This is a fundamental limitation of photochromic chemistry — the thermal energy at high temperatures pushes the molecules back toward their clear state faster than UV can push them toward their dark state. Tier 3 lenses mitigate this with UV-stabilized dyes that shift the equilibrium point, but no photochromic lens performs as well at 35°C as it does at 20°C. If you are selling into hot climates (Southeast Asia, Middle East, Southern US in summer), be upfront with your buyers about this. Or sell them polarized sunglasses instead.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Problem 3: Uneven Darkening in the First Month</h3>
          
          <p>New photochromic lenses sometimes darken unevenly — the center reaches full tint before the edges, or vice versa. This is usually a manufacturing defect from uneven dye distribution during the casting or injection process. It is most common in Tier 1 lenses (uneven coating application) but can happen in Tier 2 if the factory&apos;s mixing process is sloppy. Always check 5–10 random samples from different positions in the production batch for even darkening. If more than 10% show unevenness, reject the batch. This problem does not fix itself — it gets worse as the lens ages.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Problem 4: The &quot;Photochromic&quot; Label Is Sometimes a Lie</h3>
          
          <p>I have caught suppliers selling tinted lenses with a gradient fade and calling them photochromic. The lens is permanently tinted darker at the top and lighter at the bottom — it looks like a photochromic lens that is partially activated, but it never changes. The way to catch this: put the sunglasses in a dark drawer for an hour, then check if the lens is completely clear. If there is still visible tint, it is not photochromic — it is a fixed gradient tint. This scam is more common than you would think, especially on B2B platforms where the buyer is ordering remotely and trusting photos. Always, always test samples yourself before wiring money.</p>

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
            <h2 className="text-3xl font-bold mb-4">Need Photochromic Sunglasses for Your Wholesale Line?</h2>
            <p className="text-xl mb-6 opacity-90">Tell me your target market, quantity range, and which tier you are interested in. I will send you sample specs and a quote within 24 hours — no pressure, just real numbers from a factory that has been doing this for 20 years.</p>
            <Link
              href="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Request Photochromic Samples &amp; Quote
            </Link>
          </div>

          {/* ═══════ RELATED CONTENT ═══════ */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">More From the Factory Floor</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/uv400-vs-polarized" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">UV400 vs Polarized: What Actually Matters</h3>
                <p className="text-gray-600 text-sm">The difference explained by someone who makes both kinds every day.</p>
              </Link>
              <Link href="/blog/sunglasses-lens-guide" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Sunglasses Lens Guide</h3>
                <p className="text-gray-600 text-sm">TAC, polycarbonate, nylon, glass — which lens material fits your market.</p>
              </Link>
              <Link href="/contact" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Contact Us</h3>
                <p className="text-gray-600 text-sm">Get a quote for your custom wholesale sunglasses order.</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
