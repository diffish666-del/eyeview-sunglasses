import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'Seasonal Sunglasses Buying Calendar for Retailers: Order Smart',
  description: 'Month-by-month wholesale buying calendar for sunglass retailers. Factory lead times, seasonal demand curves, inventory planning, and when to place orders for maximum margin.',
  keywords: ['seasonal sunglasses buying calendar', 'sunglasses wholesale ordering schedule', 'retail sunglasses inventory planning', 'when to order sunglasses wholesale', 'sunglasses lead times', 'seasonal inventory sunglasses'],
  alternates: {
    canonical: '/blog/seasonal-sunglasses-buying-calendar',
    languages: {
      'en': '/blog/seasonal-sunglasses-buying-calendar',
    },
  },
};

const takeaways = [
  'The biggest money-losing mistake in wholesale sunglasses: ordering summer stock in March. By the time production finishes (30-45 days) and shipping clears (15-30 days), you miss the peak April-May pre-season buying window',
  'Factory lead times are 30-45 days for standard orders, 60-90 days for custom/OEM — add 15-30 days for ocean freight or 5-7 days for air (3-5x the cost), and another 7 days for customs clearance',
  'Place summer season orders by November-December for February delivery; fall/winter orders by May-June for August delivery — this gives you inventory in hand 4-6 weeks before the season starts',
  'Off-season ordering (September-October for summer stock) gets you 10-15% lower factory pricing and priority production slots, because factories are hungry for orders during their slow season',
  'The 70/20/10 inventory rule: 70% core styles (year-round sellers like classic aviators and wayfarers), 20% seasonal colors (pastels for spring, neon for summer, tortoise for fall), 10% test styles for trend-chasing',
  'Chinese New Year (late January/February) shuts down factories for 2-4 weeks — any order placed after December 15 risks a 45-60 day delay that can destroy your summer season',
];

const quickStats = [
  { label: 'Standard prod. lead time', value: '30–45 days' },
  { label: 'Custom/OEM lead time', value: '60–90 days' },
  { label: 'Ocean freight (Asia→US)', value: '15–30 days' },
  { label: 'Air freight', value: '5–7 days (3-5x cost)' },
  { label: 'Pre-season ordering window', value: '4–6 weeks before peak' },
  { label: 'Off-season discount', value: '10–15% lower pricing' },
];

const faqs = [
  {
    question: 'When is the best time to order wholesale sunglasses for summer?',
    answer: 'Place orders in November-December for February delivery. This gives you inventory in hand by March, 4-6 weeks before the peak April-June buying season. Ordering any later than January risks missing the pre-season window due to Chinese New Year factory closures and standard 30-45 day production lead times. If you miss the window, air freight can compress delivery to 10-14 days total but adds $0.50-1.50 per pair in shipping cost.',
  },
  {
    question: 'How do Chinese New Year factory closures affect sunglasses ordering?',
    answer: 'Chinese New Year (late January through mid-February) shuts down manufacturing for 2-4 weeks, but the ripple effect is 6-8 weeks of disruption. Workers start leaving 1-2 weeks before the holiday, factories take 1-2 weeks to ramp back up to full capacity. Any order placed after December 15 may not ship until mid-March — a 60+ day delay. Smart buyers place Q1 orders by early December or wait until late February when production normalizes.',
  },
  {
    question: 'What is the 70/20/10 inventory rule for sunglasses retail?',
    answer: '70% of your order should be core year-round styles (classic aviators, wayfarers, round frames in black, tortoise, and gunmetal), 20% seasonal color variations (pastels for spring, bright colors for summer, warm tones for fall), and 10% trend-testing styles (new shapes, experimental colors) to discover next season\'s winners without over-committing capital. This balances reliable revenue with trend exposure.',
  },
  {
    question: 'Should I order sunglasses in the off-season to save money?',
    answer: 'Yes — September through October is the best time to negotiate. Factories have excess capacity after summer production winds down and are hungry for orders. You can typically negotiate 10-15% lower pricing, faster production slots, and more flexible MOQs. The trade-off: you tie up capital in inventory for 6 months and need warehouse space. For established retailers with predictable sales volumes, this is one of the highest-ROI moves in the business.',
  },
  {
    question: 'How many units should a first-time sunglasses retailer order?',
    answer: 'Start with 300-500 units across 8-12 SKUs for a small boutique or online store, 1,000-2,000 units for a mid-size shop or multi-location retailer. The most common beginner mistake is ordering too many SKUs with too few units per SKU — you end up with 50 styles and no depth on bestsellers. Order deep on 3-5 core styles (100+ units each) and shallow on the rest (30-50 units each). Test the market, then reorder winners.',
  },
];

const PUBLISH_DATE = '2026-08-03';
const SLUG = 'seasonal-sunglasses-buying-calendar';

/* ─── Month abbreviations for table ─── */
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function SeasonalBuyingCalendarPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Blog', href: '/blog/' }, { name: 'Seasonal Sunglasses Buying Calendar for Retailers' }]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Seasonal Sunglasses Buying Calendar for Retailers: Order Smart",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Month-by-month wholesale buying calendar for sunglass retailers with factory lead times and inventory planning.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": `https://eyeviewsunglasses.com/blog/${SLUG}` }
        })}} />

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

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Retail Strategy</span>
            <span>{PUBLISH_DATE}</span>
            <span>•</span>
            <span>15 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Seasonal Sunglasses Buying Calendar for Retailers: Order Smart
          </h1>
          <p className="text-xl text-gray-600">
            The difference between a profitable sunglasses season and a warehouse full of dead
            stock is about six weeks. Six weeks of timing. Here&apos;s the calendar that tells
            you exactly when to order, when to ship, and when to hold.
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
            <li><a href="#why-timing" className="text-primary-600 hover:underline">Why Timing Is Everything</a></li>
            <li><a href="#lead-times" className="text-primary-600 hover:underline">Understanding Lead Times: Factory → Your Door</a></li>
            <li><a href="#monthly-calendar" className="text-primary-600 hover:underline">The Month-by-Month Buying Calendar</a></li>
            <li><a href="#chinese-new-year" className="text-primary-600 hover:underline">The Chinese New Year Problem (and How to Beat It)</a></li>
            <li><a href="#inventory-strategy" className="text-primary-600 hover:underline">Inventory Strategy: The 70/20/10 Rule</a></li>
            <li><a href="#off-season" className="text-primary-600 hover:underline">Off-Season Ordering: The Smart Money Play</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Frequently Asked Questions</a></li>
          </ul>
        </nav>

        <div className="prose prose-lg max-w-none">

          <KeyTakeaways items={takeaways} />

          <QuickStats stats={quickStats} title="Sunglasses Supply Chain at a Glance" />

          <p className="text-xl text-gray-600 mb-8">
            Every January, a buyer calls me in a panic. &ldquo;Jacky, I need 500 pairs by March 1.&rdquo;
            I check the calendar. It&apos;s January 20. Chinese New Year starts in two weeks. Even if
            we rush the order, production won&apos;t start until late February. Best-case delivery:
            late March. Their summer pre-season window? Gone. Their competitors who ordered in November?
            Already fully stocked. This phone call happens every single year, and it costs retailers
            thousands in lost revenue. Don&apos;t be that buyer. Here&apos;s your calendar.
          </p>

          <h2 id="why-timing" className="text-3xl font-bold mt-16 mb-6">Why Timing Is Everything</h2>

          <p>
            Sunglasses are one of the most seasonally concentrated product categories in retail.
            Depending on your market, 60-80% of annual sunglasses sales happen between April and
            September. That means you have a 6-month selling window to generate essentially your
            entire year&apos;s revenue. Miss the window by four weeks, and you don&apos;t lose
            four weeks of sales — you lose the best four weeks of the entire year.
          </p>

          <p>
            The pre-season rush — April through early June — is when customers are planning vacations,
            updating their wardrobes, and looking for fresh styles. You want inventory on shelves and
            on your website by mid-March at the latest. Work backward from that date.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <h3 className="font-bold text-lg mb-2 text-blue-800">🔑 The Backward Planning Formula</h3>
            <p className="text-blue-900 mb-2">
              <strong>Target in-stock date</strong> minus shipping time minus customs clearance minus production lead time = <strong>order placement date</strong>
            </p>
            <p className="text-blue-800 text-sm">
              Example: Want stock by March 1 → minus 30 days ocean freight → minus 7 days customs → minus 45 days production = Order by November 18. Simple math. Ignored constantly.
            </p>
          </div>

          <h2 id="lead-times" className="text-3xl font-bold mt-16 mb-6">Understanding Lead Times: Factory → Your Door</h2>

          <p>
            Most new buyers dramatically underestimate how long the full supply chain takes.
            Here&apos;s the reality, broken down:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left">Stage</th>
                  <th className="px-6 py-4 text-left">Standard</th>
                  <th className="px-6 py-4 text-left">Custom/OEM</th>
                  <th className="px-6 py-4 text-left">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white">
                  <td className="px-6 py-4 font-medium">Sample approval</td>
                  <td className="px-6 py-4">5–10 days</td>
                  <td className="px-6 py-4">10–20 days</td>
                  <td className="px-6 py-4 text-sm">Includes shipping. Custom molds add 15-30 days.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Production</td>
                  <td className="px-6 py-4">30–45 days</td>
                  <td className="px-6 py-4">60–90 days</td>
                  <td className="px-6 py-4 text-sm">Depends on order size and factory queue</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-medium">Ocean freight</td>
                  <td className="px-6 py-4">15–30 days</td>
                  <td className="px-6 py-4">15–30 days</td>
                  <td className="px-6 py-4 text-sm">Asia→US West Coast: 15d, East Coast: 25-30d</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Air freight</td>
                  <td className="px-6 py-4">5–7 days</td>
                  <td className="px-6 py-4">5–7 days</td>
                  <td className="px-6 py-4 text-sm">3-5x ocean cost. ~$0.50-1.50/pair extra</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-medium">Customs clearance</td>
                  <td className="px-6 py-4">3–7 days</td>
                  <td className="px-6 py-4">3–7 days</td>
                  <td className="px-6 py-4 text-sm">Can stretch to 14 days if paperwork issues</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-medium">Last-mile delivery</td>
                  <td className="px-6 py-4">2–5 days</td>
                  <td className="px-6 py-4">2–5 days</td>
                  <td className="px-6 py-4 text-sm">Port→warehouse or warehouse→stores</td>
                </tr>
                <tr className="bg-gray-900 text-white">
                  <td className="px-6 py-4 font-bold">TOTAL</td>
                  <td className="px-6 py-4 font-bold">55–97 days</td>
                  <td className="px-6 py-4 font-bold">85–152 days</td>
                  <td className="px-6 py-4 text-sm">Plan for the longer end of every range</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            In plain English: a standard order placed today takes 2-3 months to reach your warehouse.
            A custom order takes 3-5 months. If you&apos;re reading this during peak season and
            thinking about placing an order, you&apos;re already too late for this season. You&apos;re
            ordering for next season. That&apos;s not a problem — it&apos;s just a calendar you need
            to internalize.
          </p>

          <h2 id="monthly-calendar" className="text-3xl font-bold mt-16 mb-6">The Month-by-Month Buying Calendar</h2>

          <p>
            Here&apos;s the 12-month playbook. Print this out. Tape it to your office wall.
            Or save it somewhere you&apos;ll actually see it — because the calendar only works if
            you follow it.
          </p>

          <div className="space-y-8 mt-8">
            {/* September */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-bold text-sm">SEP</span>
                <h3 className="font-bold text-xl">September — Off-Season: Place Summer Orders</h3>
              </div>
              <p className="text-gray-600 mb-2">
                <strong>What to do:</strong> This is your best-kept secret. Factories are slow after the summer production rush. Production slots are wide open. Pricing is 10-15% lower. Place your Q1/Q2 orders NOW for pre-summer delivery.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>✅ Negotiate off-season pricing with factories</li>
                <li>✅ Review this year&apos;s sell-through data — what sold and what didn&apos;t</li>
                <li>✅ Place orders for your 70% core styles</li>
                <li>✅ Start trend research for next year&apos;s 10% test styles</li>
              </ul>
            </div>

            {/* October */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-bold text-sm">OCT</span>
                <h3 className="font-bold text-xl">October — Trade Show Season</h3>
              </div>
              <p className="text-gray-600 mb-2">
                <strong>What to do:</strong> Major eyewear trade shows happen in October (SILMO Paris, Hong Kong Optical Fair). Walk the floor. Touch the products. Meet new suppliers. Place orders while factory slots are still available.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>✅ Attend SILMO Paris or HK Optical Fair for trend scouting</li>
                <li>✅ Finalize next year&apos;s seasonal color selections</li>
                <li>✅ Place orders for seasonal color variations (20% of your mix)</li>
                <li>✅ Order samples from 2-3 new suppliers to test for next year</li>
              </ul>
            </div>

            {/* November */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-bold text-sm">NOV</span>
                <h3 className="font-bold text-xl">November — Last Call Before Chinese New Year</h3>
              </div>
              <p className="text-gray-600 mb-2">
                <strong>What to do:</strong> This is your hard deadline for pre-CNY production. Any order placed after November 30 risks getting stuck behind the holiday shutdown. Factories are starting to fill their January production slots.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>✅ Place ALL remaining summer season orders by November 30</li>
                <li>✅ Confirm shipping method and estimated delivery dates in writing</li>
                <li>✅ Lock in freight rates — they spike in December/January</li>
                <li>✅ Send purchase orders with explicit delivery deadlines and penalty clauses</li>
              </ul>
            </div>

            {/* December */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-bold text-sm">DEC</span>
                <h3 className="font-bold text-xl">December — Production in Progress. Do Not Panic-Order.</h3>
              </div>
              <p className="text-gray-600 mb-2">
                <strong>What to do:</strong> Orders placed now are a gamble. Production started in November finishes this month. New orders placed after December 15 will not start production until late February at the earliest. If you must order, use air freight.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>⚠️ Emergency orders only — and accept air freight costs</li>
                <li>✅ Track in-progress orders; request production status updates</li>
                <li>✅ Prepare customs documentation for January shipments</li>
                <li>✅ Review your website/store for the pre-season refresh in Q1</li>
              </ul>
            </div>

            {/* January */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-bold text-sm">JAN</span>
                <h3 className="font-bold text-xl">January — Chinese New Year Shutdown Zone</h3>
              </div>
              <p className="text-gray-600 mb-2">
                <strong>What to do:</strong> Nothing ships. Factories are closing or already closed. Even if a sales rep tells you they&apos;re still producing, assume anything ordered now ships in March. Use this month for marketing prep, not ordering.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>🚫 Do not place new production orders</li>
                <li>✅ Plan your Q1 marketing campaigns and product launches</li>
                <li>✅ Update your website with pre-season content and lookbooks</li>
                <li>✅ Track shipments already in transit</li>
              </ul>
            </div>

            {/* February */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-bold text-sm">FEB</span>
                <h3 className="font-bold text-xl">February — Factories Reopen. Inventory Arrives.</h3>
              </div>
              <p className="text-gray-600 mb-2">
                <strong>What to do:</strong> Factories slowly ramp back up. Your November orders should be arriving now. QC everything immediately — if there are issues, you have 4-6 weeks to resolve them before peak season.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>✅ Inspect arriving inventory immediately — do not let it sit in boxes</li>
                <li>✅ Resolve any QC issues with the factory while production slots are available</li>
                <li>✅ Prepare your online store: product photos, descriptions, pricing</li>
                <li>✅ Start social media and email marketing for pre-season buzz</li>
              </ul>
            </div>

            {/* March */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold text-sm">MAR</span>
                <h3 className="font-bold text-xl">March — Pre-Season Launch</h3>
              </div>
              <p className="text-gray-600 mb-2">
                <strong>What to do:</strong> Your full inventory should be live. Spring break travelers are shopping. This is when the money starts coming in. If stock isn&apos;t in hand by March 15, you&apos;re already losing.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>✅ Launch all product pages, lookbooks, and seasonal campaigns</li>
                <li>✅ Track sell-through by SKU — identify early winners</li>
                <li>✅ Place reorders for bestsellers (use air freight for speed)</li>
                <li>✅ Start planning your mid-season restock order</li>
              </ul>
            </div>

            {/* April–August */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold text-sm">APR–AUG</span>
                <h3 className="font-bold text-xl">April through August — Peak Selling Season</h3>
              </div>
              <p className="text-gray-600 mb-2">
                <strong>What to do:</strong> Sell. Reorder bestsellers. Track data. That&apos;s it. This is not the time for new styles or supplier experiments — you&apos;re capturing demand, not building supply chains. New orders placed now arrive September-October.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>✅ Focus 100% on sales, marketing, and customer experience</li>
                <li>✅ Reorder top-selling SKUs (target 2-week air freight turnaround)</li>
                <li>✅ Collect detailed sell-through data by SKU, color, and price point</li>
                <li>✅ Start planning the next season&apos;s order in July-August</li>
              </ul>
            </div>
          </div>

          <h2 id="chinese-new-year" className="text-3xl font-bold mt-16 mb-6">The Chinese New Year Problem (and How to Beat It)</h2>

          <p>
            If you take nothing else from this article, memorize this: Chinese New Year is not a
            &ldquo;one-week holiday.&rdquo; It&apos;s a 6-8 week production disruption that has
            destroyed more retail seasons than any other single factor.
          </p>

          <p>
            Here&apos;s what actually happens. The official holiday is 7 days, usually in late
            January or early February. But the reality:
          </p>

          <ul>
            <li><strong>2-3 weeks before CNY:</strong> Workers start leaving for their hometowns.
            Production slows to 30-50% capacity. Quality drops because experienced workers leave
            early and temporary replacements fill in.</li>
            <li><strong>1 week during CNY:</strong> Factory closed. Zero production.</li>
            <li><strong>2-3 weeks after CNY:</strong> Workers trickle back. Some don&apos;t return
            at all — they find jobs closer to home. Factories operate at 50-70% capacity while
            hiring and training replacements. Production quality is inconsistent during this ramp-up.</li>
          </ul>

          <p>
            Total disruption: 6-8 weeks. If Chinese New Year starts January 29, that means production
            is compromised from approximately January 10 through March 10. An order placed December 15
            might not ship until mid-March. That&apos;s 90 days for what should be a 45-day production run.
          </p>

          <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-8">
            <h3 className="font-bold text-lg mb-2 text-red-800">🔥 The Three Rules of Chinese New Year</h3>
            <ol className="space-y-2 text-red-900">
              <li><strong>Orders placed after December 10 ship after March 1.</strong> Accept this as a law of physics. Plan around it.</li>
              <li><strong>Never accept &ldquo;we can squeeze it in before the holiday&rdquo;</strong> from a sales rep. Squeezed production = rushed production = defective production.</li>
              <li><strong>If you MUST order in the December-February window, use air freight and expect a 15-25% quality premium.</strong> Good factories charge more during this window because they&apos;re paying overtime to skilled workers who stay.</li>
            </ol>
          </div>

          <h2 id="inventory-strategy" className="text-3xl font-bold mt-16 mb-6">Inventory Strategy: The 70/20/10 Rule</h2>

          <p>
            I learned this framework from a retailer who has been buying from our factory for 12
            years. He runs a chain of 8 sunglass shops across Florida. His inventory turns 4x per
            year with almost zero markdowns. Here&apos;s his formula:
          </p>

          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-bold text-lg text-blue-800 mb-2">70% — Core Styles (Year-Round)</h3>
              <p className="text-blue-900">
                Classic shapes and colors that sell every month, regardless of season. Black wayfarers.
                Gold aviators. Tortoise round frames. Gunmetal squares. These are your revenue
                backbone. Order them deep — 200+ units per SKU. These are the styles you reorder
                continuously. See our{' '}
                <Link href="/blog/sunglasses-design-trends-2026" className="text-blue-600 hover:underline font-medium">
                  design trends guide
                </Link>{' '}
                for the classic styles that never go out of fashion.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-bold text-lg text-green-800 mb-2">20% — Seasonal Variations</h3>
              <p className="text-green-900">
                Same core shapes, seasonal colors. Pastel acetate for spring. Bright neon TR90 for
                summer pool/beach market. Warm tortoise and amber for fall. These create the
                &ldquo;new arrivals&rdquo; energy that brings customers back. Order moderate depth
                — 50-100 units per SKU. When they sell out, they sell out. Don&apos;t reorder
                seasonal colors late in the season — you&apos;ll be stuck with inventory.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <h3 className="font-bold text-lg text-purple-800 mb-2">10% — Trend Tests</h3>
              <p className="text-purple-900">
                New shapes. Experimental colors. The cat-eye you saw on Instagram. The oversized
                shield lens everyone&apos;s talking about. Order shallow — 20-30 units per SKU.
                If one blows up, you have a winner for next season&apos;s 70% core. If it flops,
                you&apos;re stuck with 30 pairs, not 300. This is R&amp;D, not inventory. Budget it that way.
              </p>
            </div>
          </div>

          <h2 id="off-season" className="text-3xl font-bold mt-16 mb-6">Off-Season Ordering: The Smart Money Play</h2>

          <p>
            September and October are when factories are slowest — and most negotiable. Summer
            production has finished. Workers are available. Production lines are idle. This is when
            you can get:
          </p>

          <ul>
            <li><strong>10-15% lower pricing</strong> on standard frames because the factory needs
            to keep lines running and workers paid</li>
            <li><strong>Faster production:</strong> 30-day lead times instead of 45 because there&apos;s
            no queue ahead of you</li>
            <li><strong>Better QC attention:</strong> When the factory isn&apos;t rushing to fulfill
            15 orders simultaneously, your order gets more care</li>
            <li><strong>Flexible MOQs:</strong> Factories are more willing to accept 100-unit minimums
            when they need orders, versus 300-500 unit minimums during peak season</li>
          </ul>

          <p>
            The trade-off is obvious: you tie up working capital in inventory for 4-6 months. You
            need warehouse space. You carry the risk that trends shift and your pre-bought styles
            are less relevant next season.
          </p>

          <p>
            For established retailers with predictable sell-through patterns, off-season ordering
            is the single highest-margin move in the sunglasses business. A 15% unit cost reduction
            on a $3,000 order saves $450 — that&apos;s essentially the profit on 30-50 pairs.
            Multiply that across a $20,000 annual order and you&apos;re looking at $3,000 in pure
            savings. See our{' '}
            <Link href="/blog/wholesale-sunglasses-pricing-guide" className="text-primary-600 hover:underline">
              wholesale pricing guide
            </Link>{' '}
            for the full cost breakdown.
          </p>

          <h2 id="faq" className="text-3xl font-bold mt-16 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center mt-16">
            <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Next Season?</h2>
            <p className="text-xl mb-6 opacity-90">
              Tell us your target launch date and order volume. We&apos;ll build you a
              production timeline with hard delivery dates — no &ldquo;approximately,&rdquo;
              no &ldquo;hopefully.&rdquo;
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Get a Production Timeline Quote
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">More From the Retail Strategy Desk</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/sunglasses-trade-shows-guide" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Sunglasses Trade Shows 2026 Guide</h3>
                <p className="text-gray-600 text-sm">Plan your trade show calendar around the same seasonal rhythm — SILMO, Mido, Vision Expo dates.</p>
              </Link>
              <Link href="/blog/b2b-vs-b2c-sunglasses" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">B2B vs B2C Sunglasses: Which Business Model</h3>
                <p className="text-gray-600 text-sm">Seasonal buying strategy looks different for wholesale vs direct-to-consumer models.</p>
              </Link>
              <Link href="/blog/sunglasses-pricing-strategy" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Sunglasses Pricing Strategy: Wholesale &amp; Retail</h3>
                <p className="text-gray-600 text-sm">How timing affects your pricing — and why off-season buying is a margin multiplier.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
