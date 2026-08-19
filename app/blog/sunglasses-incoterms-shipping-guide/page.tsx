import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'Sunglasses Incoterms & Shipping Guide: FOB, CIF, EXW, DDP Explained',
  description: 'A factory owner explains FOB, CIF, EXW, and DDP for sunglasses importers — real shipping numbers, who pays what, and how to choose the right Incoterm for your first order.',
  keywords: ['sunglasses incoterms', 'FOB vs CIF vs EXW vs DDP', 'sunglasses shipping guide', 'import sunglasses from china', 'sunglasses freight cost', 'incoterms explained for importers', 'sunglasses FOB price', 'sunglasses DDP shipping', 'china sunglasses shipping', 'customs clearance sunglasses'],
  alternates: {
    canonical: '/blog/sunglasses-incoterms-shipping-guide',
    languages: {
      'de': '/de/blog/sonnenbrillen-incoterms-versand-ratgeber',
      'es': '/es/blog/guia-incoterms-envio-gafas-sol',
      'fr': '/fr/blog/guide-incoterms-expedition-lunettes',
      'it': '/it/blog/guida-incoterms-spedizione-occhiali',
      'pt': '/pt/blog/guia-incoterms-envio-oculos',
    },
  },
};

const takeaways = [
  'Incoterms are a risk-transfer contract, not a price menu — FOB, CIF, EXW, and DDP each define a specific handoff point where responsibility (and cost) for the cargo moves from seller to buyer, and getting the handoff wrong is how importers quietly lose thousands on a single container',
  'For a first-time sunglasses importer, FOB is almost always the right answer: the factory handles export clearance and loads the goods on the vessel at a named Chinese port, and you control the freight forwarder, the insurance, and the delivery — total landed cost is usually 10–15% lower than letting the seller run CIF or DDP',
  'EXW (ex-works) looks cheap on the quote but is a trap for new buyers — it loads every export task, every export document, and every risk onto you from the factory gate, and a buyer who cannot handle Chinese export customs will pay more in mistakes than they ever saved on the sticker price',
  'DDP is the only term where the seller is responsible for destination-country duties and taxes, which makes it seductive for Amazon FBA and retail sellers — but you are paying a 8–15% premium for the seller to absorb customs risk, and you lose visibility into the exact landed cost you are actually paying for',
  'The three hidden costs that destroy importer margins are demurrage and detention fees (charging $50–150 per day when a container sits too long at the port), destination terminal handling charges (often $200–500 per container), and uninsured cargo — and none of them appear on the FOB unit price your supplier quoted',
];

const quickStats = [
  { label: 'Typical ocean freight, 40ft container CN→US', value: '$2,500–4,500' },
  { label: 'Landed-cost premium of CIF/DDP vs FOB', value: '8–15%' },
  { label: 'Demurrage/detention fee per day, per container', value: '$50–150' },
  { label: 'Destination terminal handling charge (THC)', value: '$200–500' },
  { label: 'Share of first-time importers who overpay on freight', value: '~40%' },
];

const faqs = [
  {
    question: 'What is the difference between FOB and CIF for sunglasses imports?',
    answer: 'Under FOB (Free On Board), the factory pays for export clearance and loading at the named Chinese port, and you take over from there — you book the ocean freight, arrange insurance, and handle import clearance. Under CIF (Cost, Insurance, Freight), the seller pays the freight and a basic insurance policy up to the destination port, then hands the cargo to you. FOB gives you control of your own freight forwarder and usually lands cheaper; CIF is simpler but the seller picks the forwarder and you pay a markup on both freight and insurance. For sunglasses — light, low-cube cargo — the freight margin a seller adds on CIF can easily be 8–15%.',
  },
  {
    question: 'Which Incoterm is best for a first-time sunglasses importer?',
    answer: 'FOB, in almost every case. It forces the factory to handle the hard part — Chinese export clearance — while giving you control of the freight forwarder, insurance, and destination delivery, which is where first-time importers lose the most money when someone else runs it. The one exception: if your order is small enough to ship by air courier (DDP by express), or if you are doing Amazon FBA and want the seller to deliver to an Amazon warehouse with duties paid, DDP becomes genuinely worth the premium for the simplicity. For a first full container, start with FOB.',
  },
  {
    question: 'Who pays the customs duties and taxes under each Incoterm?',
    answer: 'Under EXW, FOB, CIF, and CFR, the importer (you) pays all destination-country customs duties, VAT, and import taxes — the seller\'s responsibility ends before the goods reach your country. Under DDP (Delivered Duty Paid), the seller is responsible for destination duties and taxes, which is the entire reason DDP commands a premium. Note that DDP on a sea shipment still requires the seller (or their customs broker) to clear the goods in your name in many countries, which adds complexity and cost — most sellers price DDP 8–15% above FOB to cover that risk.',
  },
  {
    question: 'How much does it cost to ship sunglasses from China?',
    answer: 'It depends on volume and destination, but here are real numbers. A 40-foot container from China to the US East Coast runs roughly $2,500–4,500 in ocean freight depending on the season; to Europe it is often $2,000–3,500. Sunglasses are light and low-cube, so a single 40ft container can hold 100,000–150,000 pairs in polybags, which puts the freight cost at only $0.02–0.05 per pair. The mistake first-time importers make is paying air freight for a sea-sized order — air freight for sunglasses runs $4–7 per kilogram, versus $0.05–0.15 per kilogram by sea, and that difference erases your margin.',
  },
  {
    question: 'What are demurrage and detention fees, and how do I avoid them?',
    answer: 'Demurrage is the fee the shipping line charges when a container sits in the port past its free time (typically 3–7 free days); detention is the fee when you hold the empty container past the allowed return window (typically 5–14 free days). Both run $50–150 per day. Importers get hit when their customs paperwork is late or their trucker does not pick up on time. You avoid them by having your customs broker, your freight forwarder, and your delivery appointment all lined up before the vessel even arrives — the container is on a clock from the moment it is discharged.',
  },
];

const PUBLISH_DATE = '2026-08-19';
const SLUG = 'sunglasses-incoterms-shipping-guide';

export default function SunglassesIncotermsShippingGuide() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog/' },
          { name: 'Sunglasses Incoterms & Shipping Guide' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════ SCHEMA: Article ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Sunglasses Incoterms & Shipping Guide: FOB, CIF, EXW, DDP Explained for Importers",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "A factory owner explains FOB, CIF, EXW, and DDP for sunglasses importers — real shipping numbers, who pays what, and how to choose the right Incoterm for your first order.",
          "inLanguage": "en",
          "mainEntityOfPage": { "@type": "WebPage", "@id": `https://eyeviewsunglasses.com/blog/${SLUG}` }
        })}} />

        {/* ═══════ SCHEMA: FAQPage ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "inLanguage": "en",
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
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Import &amp; Logistics</span>
            <span>{PUBLISH_DATE}</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sunglasses Incoterms &amp; Shipping Guide: FOB, CIF, EXW, DDP Explained
          </h1>
          <p className="text-xl text-gray-600">
            A buyer once emailed me a competitor\'s quote and asked why it was 12% cheaper than mine. Same frame, same MOQ, same specs. The difference was the three letters at the end of the price: EXW. The competitor was quoting ex-works, which meant the buyer would pay export clearance, trucking to the port, ocean freight, insurance, and import duties out of his own pocket — none of which showed on the quote. Here is everything I wish first-time importers understood about Incoterms before they wire a deposit.
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
            <li><a href="#section-1" className="text-primary-600 hover:underline">What Incoterms Actually Are (And Why Importers Get Burned)</a></li>
            <li><a href="#section-2" className="text-primary-600 hover:underline">FOB vs CIF vs EXW vs DDP: A Factory Owner's Real Numbers</a></li>
            <li><a href="#section-3" className="text-primary-600 hover:underline">How to Choose the Right Incoterm for Your First Order</a></li>
            <li><a href="#section-4" className="text-primary-600 hover:underline">Hidden Costs Importers Always Miss</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Frequently Asked Questions</a></li>
          </ul>
        </nav>

        {/* ═══════ ARTICLE BODY ═══════ */}
        <div className="prose prose-lg max-w-none">

          <KeyTakeaways items={takeaways} />

          {quickStats.length > 0 && (
            <QuickStats stats={quickStats} title="Sunglasses Shipping — Quick Facts" />
          )}

          {/* ─── Section 1 ─── */}
          <h2 id="section-1" className="text-3xl font-bold mt-16 mb-6">What Incoterms Actually Are (And Why Importers Get Burned)</h2>

          <p>Incoterms — short for International Commercial Terms — are a set of three-letter codes published by the International Chamber of Commerce that define one thing and one thing only: <strong>the point at which risk and cost for the goods transfer from the seller to the buyer.</strong> That is the entire job. They do not define who owns the goods. They do not define the payment terms. They define the handoff.</p>

          <p>If you remember nothing else from this guide, remember that sentence. Incoterms are a handoff point. Everything downstream of that handoff is your problem and your cost; everything upstream is the seller\'s.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Why the Handoff Point Matters More Than the Price</h3>

          <p>Two suppliers can quote you the "same" sunglasses at two very different prices, and neither is lying. A factory quoting <strong>$1.80 FOB Shenzhen</strong> is saying: "I will get these cleared for export, trucked to the port, and loaded onto the ship for $1.80 a pair." A trader quoting <strong>$1.50 EXW</strong> is saying: "I will hand you these in my warehouse parking lot for $1.50, and you figure out the rest." The $0.30 "saving" evaporates the moment you pay for the export customs broker, the port trucking, the terminal handling, and the mistakes you will make doing all of it for the first time.</p>

          <p>This is why experienced importers always compare quotes <em>on the same Incoterm.</em> Comparing an FOB quote against an EXW quote is comparing apples to a bag of unassembled apple parts. The single most valuable thing you can do as a buyer is force every supplier onto the same term before you compare prices.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">The Four Terms You Will Actually See</h3>

          <p>There are eleven Incoterms in the 2020 edition, but in the sunglasses trade you will see four of them 95% of the time. Here is each one in one plain sentence, because the legalese versions are what trip buyers up.</p>

          <p><strong>EXW (Ex Works).</strong> The seller\'s only obligation is to have the goods ready at their premises. You are responsible for everything from loading the truck at their factory gate to clearing import customs in your own country. This is the cheapest-looking quote and the most expensive real cost for a new buyer.</p>

          <p><strong>FOB (Free On Board).</strong> The seller handles export clearance and loads the goods onto the vessel you nominate at the named port. Risk and cost transfer to you the moment the goods are on board. This is the workhorse term of the sunglasses import trade.</p>

          <p><strong>CIF (Cost, Insurance, Freight).</strong> The seller pays the freight and a basic insurance policy to the destination port, and hands you the goods (and the documents) there. You still pay import duties and clear customs. The catch: the seller picks the forwarder and marks up both freight and insurance.</p>

          <p><strong>DDP (Delivered Duty Paid).</strong> The seller takes responsibility all the way to your named destination, including destination-country duties and taxes. This is the maximum-responsibility term for the seller, which is exactly why it commands the highest price.</p>

          <p>There are also <strong>CFR</strong> (like CIF but without the insurance) and <strong>FCA</strong> (the air-freight sibling of FOB), and you will bump into them occasionally. But master EXW, FOB, CIF, and DDP first, and you will understand the rest instantly.</p>

          {/* ─── Section 2 ─── */}
          <h2 id="section-2" className="text-3xl font-bold mt-16 mb-6">FOB vs CIF vs EXW vs DDP: A Factory Owner's Real Numbers</h2>

          <p>Let me put actual numbers on this, because Incoterms are meaningless in the abstract and everything in the concrete. I am going to walk through a realistic order: <strong>10,000 pairs of acetate sunglasses at $1.80 FOB Shenzhen</strong>, shipping to a buyer in Rotterdam, Netherlands, by sea.</p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Cost Item</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">EXW</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">FOB</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">CIF</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">DDP</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Unit price (10,000 pairs)</td>
                  <td className="border border-gray-300 px-4 py-2">$1.50</td>
                  <td className="border border-gray-300 px-4 py-2">$1.80</td>
                  <td className="border border-gray-300 px-4 py-2">$1.95</td>
                  <td className="border border-gray-300 px-4 py-2">$2.15</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Export clearance + China trucking</td>
                  <td className="border border-gray-300 px-4 py-2">Buyer pays</td>
                  <td className="border border-gray-300 px-4 py-2">Included</td>
                  <td className="border border-gray-300 px-4 py-2">Included</td>
                  <td className="border border-gray-300 px-4 py-2">Included</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Ocean freight (consolidated LCL)</td>
                  <td className="border border-gray-300 px-4 py-2">Buyer pays</td>
                  <td className="border border-gray-300 px-4 py-2">Buyer pays</td>
                  <td className="border border-gray-300 px-4 py-2">Included (marked up)</td>
                  <td className="border border-gray-300 px-4 py-2">Included</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Insurance</td>
                  <td className="border border-gray-300 px-4 py-2">Buyer pays</td>
                  <td className="border border-gray-300 px-4 py-2">Buyer pays</td>
                  <td className="border border-gray-300 px-4 py-2">Included (minimum cover)</td>
                  <td className="border border-gray-300 px-4 py-2">Included</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Destination duties + VAT</td>
                  <td className="border border-gray-300 px-4 py-2">Buyer pays</td>
                  <td className="border border-gray-300 px-4 py-2">Buyer pays</td>
                  <td className="border border-gray-300 px-4 py-2">Buyer pays</td>
                  <td className="border border-gray-300 px-4 py-2">Seller pays</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Who controls the forwarder?</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Buyer</td>
                  <td className="border border-gray-300 px-4 py-2"><strong>Buyer</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Seller</td>
                  <td className="border border-gray-300 px-4 py-2">Seller</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Reading the Table: Where the Money Actually Goes</h3>

          <p>Look at the unit prices. EXW looks $0.30 cheaper than FOB, but that $0.30 buys you exactly nothing — you still have to pay export clearance and trucking, which for 10,000 pairs of sunglasses costs roughly $300–600 regardless of how cheap the unit price was. A buyer who "saved" $3,000 by choosing EXW over FOB will spend at least that much on a Chinese export broker, port trucking, and the terminal handling charge the factory would have absorbed under FOB.</p>

          <p>Now look at CIF. The seller has added $0.15 per pair ($1,500 total) for freight and insurance. For a 10,000-pair LCL shipment — sunglasses are light, so this is maybe 8–12 cubic meters — the actual freight from Shenzhen to Rotterdam is around $400–700 on a consolidated load. The seller is charging you roughly double the real freight cost and calling it convenience. That is the CIF markup, and it is how sellers quietly earn more on your logistics than they do on their own product.</p>

          <p>And DDP at $2.15? The seller has added $0.35 per pair to cover destination duties, VAT handling, and the risk of getting a duty classification wrong. For a buyer who has never imported before, that $0.35 (about $3,500 on this order) is arguably money well spent — you are paying someone else to eat the customs risk. For a buyer who has done this a few times, that same $3,500 is margin you could keep by running FOB and clearing it yourself with a local broker.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">The One Number That Changes Everything: Freight Per Pair</h3>

          <p>Here is the factory-owner secret that most importers never calculate: <strong>freight cost per pair.</strong> Sunglasses are absurdly light and low-cube. A pair of acetate sunglasses in a polybag weighs about 25–35 grams and takes up about 0.6–1 liter packed. A 40-foot container carries roughly 100,000–150,000 pairs. So a $3,000 container of freight spread over 120,000 pairs works out to $0.025 per pair — two and a half cents.</p>

          <p>Compare that to air freight at $4–7 per kilogram: a 30-gram pair costs $0.12–0.21 to fly. That is 5–8 times more per pair. Air freight only makes sense for samples, for urgent restocks of a fast-selling SKU, or for high-value brands where speed is worth the premium. For a routine wholesale order, sea freight at two cents a pair is the entire reason importing sunglasses from China is profitable at all. If a supplier is quietly routing your "cheap" order by air without telling you, they have just erased your margin — this is why you always confirm the routing, not just the price.</p>

          {/* ─── Section 3 ─── */}
          <h2 id="section-3" className="text-3xl font-bold mt-16 mb-6">How to Choose the Right Incoterm for Your First Order</h2>

          <p>There is no single "correct" Incoterm — there is only the correct Incoterm for <em>your situation.</em> Here is the decision framework I give my buyers, in order of how often I recommend each one.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Start With FOB (Almost Always)</h3>

          <p>For a first full order by sea, FOB is the default. The reason is simple: it puts the two hardest things — Chinese export clearance and getting the goods loaded on a vessel — in the hands of the party who does it every day (the factory), while keeping the freight and destination clearance in your hands, where you can control the cost and pick a forwarder you trust. The factory\'s job ends cleanly at the port rail, and from there you have full visibility.</p>

          <p>The only real skill FOB requires of you is finding a decent freight forwarder and a local customs broker. Both are commodity services — ask three forwarders for a quote on the same shipment and you will see the spread. This is not a reason to avoid FOB; it is a reason to spend an afternoon getting three quotes.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Use DDP for Small Orders, Amazon FBA, and Speed</h3>

          <p>DDP earns its premium in three specific situations. First, <strong>small orders</strong>: if you are importing 500 pairs by air courier, the simplicity of the seller handling duties beats the savings of doing it yourself. Second, <strong>Amazon FBA</strong>: a seller who will deliver your goods to an Amazon warehouse with duties paid and a proper FBA carton label removes a huge amount of operational headache for an FBA seller who does not want to touch customs. Third, <strong>retail dropshipping or time-sensitive launches</strong> where predictability matters more than margin.</p>

          <p>Just go in with your eyes open. DDP means the seller controls the whole chain, which means you lose visibility into the breakdown of what you are actually paying. That is fine when the order is small and the alternative is a customs nightmare; it is less fine when you are importing 20,000 pairs and the DDP premium is $7,000 you could have kept with a competent broker.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Consider CIF Only If You Have No Forwarder Yet</h3>

          <p>CIF is the middle ground: the seller runs the freight and hands you the goods at your destination port. It is genuinely useful when you do not yet have a freight forwarder and the order is too big for DDP comfort but too small to justify building a freight relationship. The tradeoff, again, is the markup and the loss of control — the seller picks the forwarder, and the forwarder works for the seller, not for you.</p>

          <p>My honest advice: skip CIF entirely for repeat business. Use it once, on your first order, while you are still learning. Then get your own forwarder on order two and move everything to FOB. CIF is training wheels; FOB is the bike.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Avoid EXW Until You Know Chinese Export Logistics Cold</h3>

          <p>EXW has exactly one legitimate use case: you already have a freight forwarder in China with an export license, a Chinese trucking arrangement, and a customs broker who handles export clearance for you, and you want to strip every logistics penny out of the unit price. That is a real, sophisticated setup — some large importers run it. It is not, however, where anyone starts.</p>

          <p>For a first-time buyer, EXW is a trap with a discount sticker on it. You will pay a Chinese broker to clear export customs, pay a trucker to move the goods to the port, pay terminal handling, and if anything goes wrong between the factory gate and the vessel, it is entirely on you. The factory, having handed you the goods at their gate, has zero responsibility and zero incentive to help. Whatever you saved on the unit price, you will spend — and likely overspend — learning the hard way.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">The Decision Matrix in One Look</h3>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Your Situation</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Recommended Incoterm</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Why</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">First full sea container</td>
                  <td className="border border-gray-300 px-4 py-2"><strong>FOB</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Factory handles export; you control freight and destination</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Small order by air courier</td>
                  <td className="border border-gray-300 px-4 py-2"><strong>DDP</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Simplicity beats savings on small volumes</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Amazon FBA delivery</td>
                  <td className="border border-gray-300 px-4 py-2"><strong>DDP</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Duties paid, delivered to warehouse, FBA label handled</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">No forwarder yet, medium order</td>
                  <td className="border border-gray-300 px-4 py-2"><strong>CIF</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Seller runs freight while you build a forwarder relationship</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Own China forwarder + export license</td>
                  <td className="border border-gray-300 px-4 py-2"><strong>EXW</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Strip logistics cost when you can run it yourself</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ─── Section 4 ─── */}
          <h2 id="section-4" className="text-3xl font-bold mt-16 mb-6">Hidden Costs Importers Always Miss</h2>

          <p>The unit price is never the price. Every time a first-time importer sends me their "great deal" and asks why the goods landed at 40% more than expected, the answer is the same five hidden costs. Here they are, so they do not surprise you.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">1. Demurrage and Detention — The Port Clock</h3>

          <p>When your container arrives, the shipping line gives you a few "free days" to pick it up — typically 3–7 days for demurrage (the loaded container sitting in the port). Once you have it, you get 5–14 free days of "detention" to unload and return the empty box. Exceed either window and the clock starts: <strong>$50–150 per day.</strong> A customs hold that lasts two weeks can quietly add $1,000–2,000 to your landed cost, and it is the single most common way importers bleed money without noticing. The fix is preparation: have your broker, your forwarder, and your trucker appointment lined up before the vessel docks.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">2. Destination Terminal Handling and Local Charges</h3>

          <p>Even on an FOB or CIF shipment, the destination port has a pile of fees the seller\'s quote never includes: the terminal handling charge (THC), documentation fees, the carrier\'s security fee, and the "port service charge" that varies by terminal. Together these run <strong>$200–500 per container</strong> and are billed to the importer on arrival. Ask your forwarder for an <em>all-in</em> destination quote up front — the ones that itemize everything — so the arrival bill is not a surprise.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">3. Duty and VAT on the Landed Value, Not the FOB Price</h3>

          <p>Most importers know duties exist; most underestimate the base. Import duty is calculated on the <em>customs value</em>, which in most jurisdictions is the FOB price plus freight plus insurance — the CIF value, essentially — not the factory FOB price you negotiated. Then VAT is charged on top of the duty-inclusive value. So your 8% duty is not 8% of $1.80; it is 8% of the landed value, and your 21% VAT is stacked on top of that. The effective tax hit is almost always higher than the headline duty rate. Get your broker to model the real landed cost before you commit to a unit price.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">4. The Insurance You Never Bought</h3>

          <p>Under FOB and EXW, insurance is your responsibility, and most first-time buyers skip it. That is a mistake. A lost or damaged container without insurance is a total loss — you still paid the factory, and the shipping line\'s liability is capped at a tiny amount per kilogram under international conventions. Marine cargo insurance costs roughly <strong>0.3–0.5% of the cargo value</strong> — a few dollars to insure a few thousand dollars of sunglasses. Buy it. The moment you own the risk (FOB on board, EXW at the gate), you should own the insurance too.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">5. The Cost of Getting the HS Code Wrong</h3>

          <p>Sunglasses fall under a specific Harmonized System (HS) code — typically 9004.10 for sunglasses, with sub-codes depending on materials. Get the classification wrong and customs will reclassify your goods, often at a higher duty rate, plus penalties, plus the days of delay (and the demurrage fees from point 1) while they sort it out. A competent customs broker will confirm the correct HS code before you ship. A cheap one will copy whatever code the supplier\'s invoice happens to list. This is not the place to save $50.</p>

          <p>Add those five together and you see why a $1.80 FOB frame lands at $2.40–2.80 by the time it is in your warehouse — and why a buyer who only compared unit prices thinks they are being cheated when the real culprit is the freight, duty, and port costs they never saw coming.</p>

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
            <h2 className="text-3xl font-bold mb-4">Get a Landed-Cost Quote, Not Just a Unit Price</h2>
            <p className="text-xl mb-6 opacity-90">Send me your spec and destination port. I\'ll give you the FOB price, the freight estimate, and a full landed-cost breakdown — so you know exactly what lands in your warehouse before you wire a deposit.</p>
            <Link
              href="/contact/"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* ═══════ RELATED CONTENT ═══════ */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">More From the Factory Floor</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/sunglasses-factory-audit-checklist" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Sunglasses Factory Audit Checklist</h3>
                <p className="text-gray-600 text-sm">A 20-point checklist to vet a supplier before you wire money.</p>
              </Link>
              <Link href="/blog/how-to-choose-sunglasses-manufacturer" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">How to Choose a Sunglasses Manufacturer</h3>
                <p className="text-gray-600 text-sm">The selection criteria that separate a real factory from a polished website.</p>
              </Link>
              <Link href="/contact/" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
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
