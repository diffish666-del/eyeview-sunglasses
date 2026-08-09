import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'Sunglasses Import Duties & Tariffs Guide 2026: US, EU, UK, AU, CA Rates',
  description: 'Complete sunglasses import duties guide. HS codes, tariff rates by country, free trade agreements, and how to calculate landed cost. Factory owner\'s practical guide to saving on customs.',
  keywords: ['sunglasses import duties', 'sunglasses tariff rates', 'HS code sunglasses', 'import duty calculator', 'sunglasses customs clearance', 'eyewear import tax', 'US sunglasses tariff', 'EU sunglasses duty'],
  alternates: {
    canonical: '/blog/sunglasses-import-duties',
  },
};

const takeaways = [
  'HS Code 9004.10: Sunglasses fall under this harmonized code globally — US duty 2.0%, EU 2.9%, UK 2.0%, Australia 5.0% (but often 0% via FTAs), Canada 0% under CPTPP rules',
  'The biggest cost isn\'t the duty — it\'s shipping and brokerage fees. A $5,000 eyewear shipment might pay $100 in duty but $400 in freight forwarder fees. Choose your logistics partner carefully.',
  'Certificate of Origin is your most powerful duty-reduction tool. If your sunglasses are manufactured in China (or Vietnam/India), you can claim preferential rates under multiple FTAs — but only with the paperwork',
  'Section 301 tariffs on Chinese eyewear (HS 9004.10.0000) added 7.5% on top of the base 2.0% for US imports as of 2026 — total effective rate is 9.5% unless you qualify for an exclusion',
  'Landed cost formula: (FOB Price × Quantity + Freight + Insurance) × (1 + Duty Rate) + Brokerage + Port Fees + Last-Mile Delivery. Most new importers underestimate by 15-20% on their first order',
  'Value thresholds matter: US de minimis is $800 (shipments under this pay zero duty), EU\'s IOSS scheme allows pre-collected VAT at 150 EUR or below, UK has £135 threshold. Structure small sample orders to stay under these limits',
];

const quickStats = [
  { label: 'US Base Duty (HS 9004.10)', value: '2.0%' },
  { label: 'US Section 301 Surcharge', value: '+7.5%' },
  { label: 'EU Duty Rate', value: '2.9%' },
  { label: 'UK Duty Rate', value: '2.0%' },
  { label: 'Australia Duty Rate', value: '5.0% (0% with CoO)' },
  { label: 'Canada Duty Rate', value: '0% (CPTPP)' },
];

const faqs = [
  {
    question: 'What is the HS code for sunglasses?',
    answer: 'Sunglasses are classified under HS Code 9004.10 — "Spectacles, goggles and the like, corrective, protective or other, sunglasses." This is the harmonized code used globally. The US-specific subheading is 9004.10.0000. For prescription sunglasses, use 9004.90.0000. For safety/industrial eyewear, use 9004.90.0090. Always confirm with your customs broker — misclassification penalties start at 2× the duty owed.',
  },
  {
    question: 'How much import duty do I pay on sunglasses from China to the USA?',
    answer: 'Base US duty for HS 9004.10 is 2.0%. However, Section 301 tariffs on Chinese-origin goods add 7.5% (as of 2026), making the effective rate 9.5%. On a $10,000 FOB shipment, that\'s $950 in duties before adding freight, insurance, and brokerage fees. If you manufacture in Vietnam, India, or Bangladesh, you avoid the Section 301 surcharge entirely — only the 2.0% base applies.',
  },
  {
    question: 'What is the EU import duty on sunglasses from China?',
    answer: 'The EU applies a 2.9% duty rate on HS 9004.10 sunglasses from China. No additional tariffs beyond the standard rate. For a €8,000 shipment, that\'s approximately €232 in duties. The EU has no Section 301 equivalent. However, VAT applies at the destination country\'s rate (19-27% depending on the member state). Use the IOSS (Import One-Stop Shop) system for shipments under €150 to pre-collect VAT and streamline customs clearance.',
  },
  {
    question: 'Do I need a Certificate of Origin to reduce import duties?',
    answer: 'Yes — a Certificate of Origin (CoO) is the single most important document for duty reduction. For US imports from China, a CoO doesn\'t reduce the Section 301 surcharge currently, but it\'s essential for FTA claims with other origins. For imports into Australia, Canada, or the UK under CPTPP or bilateral FTAs, a valid CoO can reduce duty to 0%. Your factory should provide this as part of the shipping documents — if they can\'t or won\'t, find a different supplier. The CoO must be stamped by CCPIT (China Council for the Promotion of International Trade) to be valid, which costs about $30-50 and takes 2-3 business days.',
  },
  {
    question: 'How do I calculate the total landed cost for a sunglasses order?',
    answer: 'Landed cost = FOB Price × Quantity + Ocean Freight (or Air Freight) + Insurance (typically 0.3-0.5% of CIF value) + Customs Duty (% of CIF) + Brokerage Fee ($75-200 per entry) + Port/Destination Charges + Last-Mile Delivery. Example: 1,000 pairs at $5/pair FOB = $5,000. Ocean freight = $600. Insurance = $28. CIF = $5,628. US duty at 9.5% = $535. Brokerage = $125. Port charges = $85. Delivery = $250. Total landed = $6,623. Per-unit cost = $6.62. Always add a 5-10% buffer for currency fluctuation and unexpected fees.',
  },
];

const PUBLISH_DATE = '2026-07-27';
const SLUG = 'sunglasses-import-duties';

export default function SunglassesImportDutiesPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog/' },
          { name: 'Sunglasses Import Duties & Tariffs 2026' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════ SCHEMA: Article ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Sunglasses Import Duties & Tariffs Guide 2026: US, EU, UK, AU, CA Rates",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Complete sunglasses import duties guide. HS codes, tariff rates by country, free trade agreements, and how to calculate landed cost. Factory owner's practical guide to saving on customs.",
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
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Import & Logistics</span>
            <span>{PUBLISH_DATE}</span>
            <span>•</span>
            <span>13 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sunglasses Import Duties & Tariffs Guide 2026: Country-by-Country Rates
          </h1>
          <p className="text-xl text-gray-600">
            After 20 years of shipping eyewear from China to 50+ countries, here&apos;s the truth about duties — the numbers, the loopholes, and the paperwork that actually saves you money.
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
            <li><a href="#hs-codes" className="text-primary-600 hover:underline">HS Codes for Sunglasses: Getting Classification Right</a></li>
            <li><a href="#us-duties" className="text-primary-600 hover:underline">US Import Duties: Section 301 &amp; the 9.5% Reality</a></li>
            <li><a href="#eu-duties" className="text-primary-600 hover:underline">EU Import Duties: Low Tariffs, High VAT</a></li>
            <li><a href="#uk-au-ca" className="text-primary-600 hover:underline">UK, Australia &amp; Canada: FTA Opportunities</a></li>
            <li><a href="#landed-cost" className="text-primary-600 hover:underline">How to Calculate Landed Cost (With Real Numbers)</a></li>
            <li><a href="#duty-reduction" className="text-primary-600 hover:underline">7 Ways to Reduce Your Import Duties</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Frequently Asked Questions</a></li>
          </ul>
        </nav>

        {/* ═══════ ARTICLE BODY ═══════ */}
        <div className="prose prose-lg max-w-none">

          <KeyTakeaways items={takeaways} />

          <QuickStats stats={quickStats} title="Sunglasses Import Duty Rates at a Glance" />

          {/* ─── Section 1: HS Codes ─── */}
          <h2 id="hs-codes" className="text-3xl font-bold mt-16 mb-6">HS Codes for Sunglasses: Getting Classification Right</h2>
          <p>
            Before we talk about duty rates, let&apos;s get one thing straight: if your customs broker files the wrong HS code, you&apos;re not saving money — you&apos;re creating a liability. I&apos;ve seen importers try to classify sunglasses as &quot;plastic accessories&quot; (HS 3926) to get a lower rate, and CBP caught every single one.
          </p>
          <p>
            Sunglasses fall under <strong>HS 9004.10</strong> — &quot;Spectacles, goggles and the like, corrective, protective or other, sunglasses.&quot; This is harmonized globally, meaning every country uses the same first six digits. The key sub-classifications:
          </p>
          <ul>
            <li><strong>9004.10.0000 (US):</strong> Sunglasses — non-prescription, including fashion and sport sunglasses</li>
            <li><strong>9004.90.0000 (US):</strong> Other spectacles — prescription sunglasses, safety goggles, reading glasses</li>
            <li><strong>9004.10.1000 (EU):</strong> Sunglasses with optically worked lenses</li>
            <li><strong>9004.10.9100 (EU):</strong> Sunglasses with simply shaped lenses (most Chinese exports fall here)</li>
          </ul>
          <p>
            <strong>Pro tip from the factory floor:</strong> If your sunglasses have UV400 protection (which ours do by default), they still go under 9004.10. The &quot;corrective vs. protective&quot; distinction only matters if you&apos;re importing prescription eyewear. Most wholesale sunglasses orders from suppliers like EyeView are correctly classified as 9004.10 regardless of lens features.
          </p>

          {/* ─── Section 2: US Duties ─── */}
          <h2 id="us-duties" className="text-3xl font-bold mt-16 mb-6">US Import Duties: Section 301 &amp; the 9.5% Reality</h2>
          <p>
            The United States is the largest market for sunglasses imports — and the most expensive in terms of duties if you&apos;re sourcing from China. Here&apos;s the breakdown:
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Base MFN Rate: 2.0%</h3>
          <p>
            Under normal trade relations (MFN), HS 9004.10.0000 carries a 2.0% ad valorem duty. That&apos;s $20 per $1,000 of declared value. Not bad.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Section 301 Surcharge: +7.5%</h3>
          <p>
            Here&apos;s where it gets expensive. Section 301 tariffs — imposed on Chinese-origin goods since 2018 — apply an additional 7.5% on HS 9004.10.0000 as of 2026. The original 25% rate was reduced to 7.5% in 2020 and has stayed there. <strong>Total effective US duty on Chinese sunglasses: 9.5%.</strong>
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-6">
            <p className="font-bold text-amber-800 mb-2">⚠️ Section 301 Applies to Country of Origin, Not Country of Shipment</p>
            <p className="text-amber-700 text-sm">If your sunglasses are manufactured in China but shipped from a Hong Kong warehouse, Section 301 still applies. US Customs looks at where the goods were made, not where they were loaded onto the ship. The only way to avoid Section 301 is to manufacture outside China entirely.</p>
          </div>

          <h3 className="text-2xl font-bold mt-10 mb-4">De Minimis: The $800 Loophole</h3>
          <p>
            Under Section 321, shipments valued at $800 or less enter the US duty-free — including Section 301 goods. This is how many small brands start: order 50-100 pairs as samples, split into multiple shipments under $800 each, and pay zero duty. It&apos;s completely legal as long as each shipment is genuinely under the threshold and you&apos;re not artificially splitting orders to evade duties (that&apos;s called &quot;structured de minimis abuse&quot; and CBP is cracking down).
          </p>

          {/* ─── Section 3: EU Duties ─── */}
          <h2 id="eu-duties" className="text-3xl font-bold mt-16 mb-6">EU Import Duties: Low Tariffs, High VAT</h2>
          <p>
            The EU is refreshingly straightforward compared to the US — no Section 301, no trade war surcharges. But VAT is where the real cost hides.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Standard Duty: 2.9%</h3>
          <p>
            Under the EU Common Customs Tariff (TARIC), HS 9004.10.9100 (sunglasses with simply shaped lenses, which covers most wholesale imports) carries a 2.9% duty rate. That&apos;s less than half the effective US rate. For an order valued at €10,000 CIF, you pay €290 in duties.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">VAT: The Real Cost</h3>
          <p>
            Here&apos;s what catches new importers: the EU adds VAT on top of the duty-paid value. If your goods land in Germany (19% VAT), the calculation is:
          </p>
          <div className="bg-gray-100 rounded-lg p-4 my-4 font-mono text-sm">
            <p>CIF Value: €10,000</p>
            <p>Duty (2.9%): +€290</p>
            <p>Duty-Paid Value: €10,290</p>
            <p>VAT (19%): +€1,955</p>
            <p className="font-bold">Total at Customs: €12,245</p>
          </div>
          <p>
            <strong>Important:</strong> VAT is generally recoverable if you&apos;re a VAT-registered business. You pay it at import, claim it back on your next VAT return. But you need cash flow to cover the 90-120 day gap between payment and refund.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">IOSS: Pre-Paid VAT for Small Orders</h3>
          <p>
            The Import One-Stop Shop (IOSS) lets you pre-collect VAT at the point of sale for shipments under €150. The buyer pays VAT at checkout, you remit it to a single EU tax authority monthly, and goods clear customs without the recipient paying anything on delivery. EyeView supports IOSS-compatible invoicing — tell us at order time and we&apos;ll format your commercial invoice accordingly.
          </p>

          {/* ─── Section 4: UK, AU, CA ─── */}
          <h2 id="uk-au-ca" className="text-3xl font-bold mt-16 mb-6">UK, Australia &amp; Canada: FTA Opportunities</h2>
          <p>
            These three markets have the best duty-reduction opportunities if you know the trade agreements.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">United Kingdom: 2.0% Base, GSP Available</h3>
          <p>
            Post-Brexit UK applies a 2.0% duty on HS 9004.10 sunglasses. Under the UK Generalised Scheme of Preferences (GSP), goods from China qualify for preferential rates — but the preference margin on 9004.10 is zero (the MFN rate is already the GSP floor). What changes the math: the UK Developing Countries Trading Scheme (DCTS) offers 0% duty for sunglasses manufactured in 65 eligible countries, including India and Pakistan. If you can source acetate frames from an Indian factory, UK duty drops to zero.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Australia: 5.0% Standard, 0% Under FTA</h3>
          <p>
            Australia&apos;s standard tariff on HS 9004.10 is 5.0% — the highest among major markets. But the China-Australia Free Trade Agreement (ChAFTA) eliminated tariffs on sunglasses in 2019. <strong>With a valid Certificate of Origin, Australian duty is 0%.</strong> Every Australian customer I&apos;ve shipped to saves the full 5% with proper CoO documentation. The paperwork costs $35 at CCPIT and takes 3 days. For a $20,000 order, that&apos;s $1,000 saved.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Canada: 0% Under CPTPP</h3>
          <p>
            Canada eliminated tariffs on Chinese-origin sunglasses under the Comprehensive and Progressive Agreement for Trans-Pacific Partnership (CPTPP). <strong>Canadian importers pay 0% duty on HS 9004.10 from China</strong> — one of the few categories where the China-Canada trade relationship works in the importer&apos;s favor. Just make sure your commercial invoice clearly states the country of origin as China and the HS code as 9004.10.
          </p>

          {/* ─── Section 5: Landed Cost ─── */}
          <h2 id="landed-cost" className="text-3xl font-bold mt-16 mb-6">How to Calculate Landed Cost (With Real Numbers)</h2>
          <p>
            Most new importers look at the per-unit FOB price and think that&apos;s their cost. It&apos;s not. Here&apos;s a real landed cost calculation for a typical order:
          </p>

          <div className="bg-gray-100 rounded-lg p-6 my-6 font-mono text-sm space-y-1">
            <p className="font-bold text-base mb-3">Example: 1,000 Pairs Acetate Sunglasses → USA</p>
            <p>FOB Price (1,000 × $5.00): <span className="float-right">$5,000.00</span></p>
            <p>Ocean Freight (LCL, Shanghai→LA): <span className="float-right">+$600.00</span></p>
            <p>Marine Insurance (0.5% of CIF): <span className="float-right">+$28.00</span></p>
            <p className="border-t border-gray-300 pt-1">CIF Value (Customs Basis): <span className="float-right">$5,628.00</span></p>
            <p>US Duty (9.5% of CIF): <span className="float-right">+$534.66</span></p>
            <p>Customs Broker Fee: <span className="float-right">+$125.00</span></p>
            <p>MPF (Merchandise Processing Fee): <span className="float-right">+$29.66</span></p>
            <p>HMF (Harbor Maintenance Fee, 0.125%): <span className="float-right">+$7.04</span></p>
            <p>Port/CFS Charges: <span className="float-right">+$85.00</span></p>
            <p>Last-Mile Trucking (Port→Warehouse): <span className="float-right">+$250.00</span></p>
            <p className="border-t border-gray-300 pt-1 font-bold">Total Landed Cost: <span className="float-right">$6,659.36</span></p>
            <p className="font-bold text-primary-600">Landed Cost Per Pair: <span className="float-right">$6.66</span></p>
          </div>

          <p>
            That $5.00 FOB pair actually costs $6.66 by the time it reaches your warehouse — a 33% markup above the factory price. And this is a best-case scenario with ocean freight. Air freight would add $800-1,200, pushing the landed cost above $7.50/pair.
          </p>

          {/* ─── Section 6: Duty Reduction ─── */}
          <h2 id="duty-reduction" className="text-3xl font-bold mt-16 mb-6">7 Ways to Reduce Your Import Duties</h2>

          <h3 className="text-2xl font-bold mt-10 mb-4">1. Get the Certificate of Origin — Every Time</h3>
          <p>
            This is non-negotiable for Australia, Canada, and any market where FTAs apply. Ask your factory to include a CCPIT-stamped CoO with every shipment over $500 in value. Cost: $30-50. Potential savings: 5% of CIF value. ROI: 100× or more.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">2. Use De Minimis for Samples and Small Orders</h3>
          <p>
            Keep initial sample orders under $800 (US), €150 (EU), or £135 (UK) to enter duty-free. This is the single best hack for testing new styles before committing to volume.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">3. Consider Split Manufacturing</h3>
          <p>
            If you&apos;re shipping to the US and the 7.5% Section 301 surcharge is killing your margins, consider manufacturing in Vietnam or India instead of China. Vietnam has MFN-only rates (2.0%) with no Section 301. The per-unit factory cost might be $0.30-0.50 higher, but the duty savings often exceed the manufacturing premium on orders above $10,000.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">4. Declare Accurate — But Not Inflated — Values</h3>
          <p>
            Under-declaring customs value is illegal. But over-declaring is just throwing money away. Declare the actual transaction value (what you paid the factory). Don&apos;t inflate it &quot;for insurance purposes&quot; — get separate cargo insurance instead. A $1,000 over-declaration on a US-bound shipment costs $95 in unnecessary duties.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">5. Ship FCL Instead of LCL When Possible</h3>
          <p>
            If you&apos;re ordering 3,000+ pairs, a full container load (FCL) is cheaper per unit than less-than-container-load (LCL) and avoids CFS (Container Freight Station) charges at destination. The break-even point is typically around 5-8 cubic meters of eyewear — roughly 2,000-3,000 pairs with packaging.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">6. Use a Licensed Customs Broker, Not Your Freight Forwarder&apos;s Default</h3>
          <p>
            Freight forwarders often bundle customs clearance at inflated rates. A dedicated licensed customs broker charges $75-150 per entry vs. $200-350 from forwarders who subcontract the work. For frequent importers (12+ shipments/year), a continuous customs bond ($500/year) is cheaper than single-entry bonds ($50-75 each).
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">7. Time Your Shipments Around Peak Season</h3>
          <p>
            Ocean freight rates spike 40-80% during peak season (August-October for holiday inventory, January-February before Chinese New Year). Since freight is part of your CIF value — and duties are calculated on CIF — higher freight means higher duties. Ship in March-May or November to get lower freight rates and, by extension, lower duty calculations.
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
            <h2 className="text-3xl font-bold mb-4">Shipping Documents? We Handle It.</h2>
            <p className="text-xl mb-6 opacity-90">Every EyeView order includes a CCPIT-stamped Certificate of Origin, commercial invoice with correct HS codes, and packing list formatted for your country&apos;s customs requirements. Tell us your destination and we&apos;ll optimize your paperwork to minimize duties.</p>
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
              <Link href="/blog/import-sunglasses-from-china" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Import Sunglasses from China</h3>
                <p className="text-gray-600 text-sm">Step-by-step import guide: customs, shipping, quality control.</p>
              </Link>
              <Link href="/blog/sunglasses-moq-guide" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Sunglasses MOQ Guide</h3>
                <p className="text-gray-600 text-sm">How many pairs should you order first? Smart scaling strategies.</p>
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
