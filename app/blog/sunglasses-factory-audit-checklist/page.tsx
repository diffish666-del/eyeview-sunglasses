import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'Sunglasses Factory Audit: 20-Point Supplier Vetting Checklist',
  description: 'A factory owner\'s 20-point checklist to vet a sunglasses supplier before you wire money — facility, certifications, QC, samples, and trading-company red flags.',
  keywords: ['sunglasses factory audit', 'supplier vetting checklist', 'how to audit a factory', 'sunglasses manufacturer verification', 'factory audit checklist', 'trading company vs factory', 'sunglasses factory certification', 'OEM sunglasses supplier audit', 'China sunglasses factory audit', 'supplier quality audit checklist'],
  alternates: {
    canonical: '/blog/sunglasses-factory-audit-checklist',
    languages: {
      'de': '/de/blog/sonnenbrillen-fabrik-audit-checkliste',
      'es': '/es/blog/lista-auditoria-fabrica-gafas',
      'fr': '/fr/blog/checklist-audit-usine-lunettes',
      'it': '/it/blog/checklist-audit-fabbrica-occhiali',
      'pt': '/pt/blog/checklist-auditoria-fabrica-oculos',
    },
  },
};

const takeaways = [
  'Most "factory audits" fail because buyers verify the wrong things — a showroom tour and a wall of certificates prove nothing; a real audit proves the factory owns and runs the machines that will make your exact product, because that is the only thing a middleman cannot fake on a video call',
  'The 20-point checklist has one job: prove ownership of production. If a supplier cannot show your frame model\'s injection mold, the CNC programs for acetate cutting, and last month\'s QC records within 24 hours of you asking, you are talking to a sales office, not a factory',
  'Certifications are necessary but not sufficient — ISO 9001, CE marking, and FDA registration mean nothing unless you verify the certificate number against the issuing body\'s public database, because a forged CE test report costs about $20 to produce in Shenzhen',
  'The fastest way to spot a trading company: a Shenzhen business address with a Wenzhou phone number, a "we can make anything" answer, a custom sample delivered in under 7 days, and product photos that appear across dozens of Alibaba storefronts under different company names',
  'You have three audit options with three price points: a remote audit ($0, catches roughly 60% of scams), an on-site visit ($1,500–3,000, catches roughly 90%), and a third-party inspection like SGS or TÜV ($400–800 per man-day, gives you a defensible report but zero market knowledge)',
];

const quickStats = [
  { label: 'Forged CE test report in Shenzhen', value: '~$20' },
  { label: 'Alibaba "factories" that are really traders', value: '60–70%' },
  { label: 'On-site audit (flight + hotel + translator)', value: '$1,500–3,000' },
  { label: 'Third-party audit (SGS/BV/TÜV) per man-day', value: '$400–800' },
  { label: 'Remote audit catches of scams', value: '~60%' },
];

const faqs = [
  {
    question: 'How much does a sunglasses factory audit cost?',
    answer: 'It depends on the method. A remote audit — live video walkthroughs, document verification, and mold photo requests — costs nothing but your time and catches roughly 60% of scams. An on-site visit costs $1,500–3,000 when you include flights, hotels, and a translator, and it catches about 90%. A third-party inspection company like SGS, Bureau Veritas, or TÜV charges $400–800 per man-day for a standardized report. My rule: always start remote, spend the travel money only on orders above $20,000, and bring in a third party only when your retail buyer requires a specific compliance audit.',
  },
  {
    question: 'Can I audit a sunglasses factory remotely?',
    answer: 'Yes, and you should — but only if you make the audit adversarial. A live video call where you watch the factory walk a phone from the front gate to the injection machines, with today\'s date written on a whiteboard, proves more than a glossy PDF. Ask to see the mold for your exact frame model with the cavity count, request last month\'s QC defect records, and ask for the business license to be held up to the camera so you can verify the name and address against the national registry. If a supplier cannot produce these within 24 hours, treat it as a fail.',
  },
  {
    question: 'What certifications should a legitimate sunglasses factory have?',
    answer: 'At minimum, ISO 9001 for quality management, a CE test report to EN ISO 12312-1 if you sell into the EU, FDA establishment registration if you sell into the US, and batch-level UV400 lens test reports from a spectrophotometer. If your retail buyers require ethical sourcing, also look for a BSCI, Sedex, or SMETA audit. The key is verification: every one of these has a public database you can check. Ask for the certificate number and validate it yourself — a certificate on the wall that you have not checked is decoration, not assurance.',
  },
  {
    question: 'How do I tell a trading company from a real factory?',
    answer: 'Ask four questions: (1) Can I see the injection mold for my frame model, and how many cavities does it have? (2) Can I see the CNC machines that cut acetate frames? (3) What is the MOQ for a custom OEM frame? (4) Can I see last month\'s AQL inspection records? A real factory answers all four with specifics, photos, and numbers. A trading company answers "we have many partner factories," offers a 100-piece MOQ, and sends samples faster than a factory could possibly make tooling. Real OEM tooling takes 15–30 days — a 3-day "custom sample" is a bought sample.',
  },
  {
    question: 'What should I check on samples before placing a bulk order?',
    answer: 'You are not checking whether the sample "looks nice" — you are checking whether it is a sealed, reproducible standard. Confirm the pre-production sample (PPS) is signed and dated by both sides, because this is the golden sample your bulk order must match. Verify the actual material grade from the datasheet (which acetate sheet, which TR90 grade, which polycarbonate), not the vague "high-quality plastic." Check hinge tension, screw torque, lens insertion, and UV400 results against the spec. Then confirm the factory commits in writing that mass production will match the PPS with an AQL 2.5 inspection before shipping.',
  },
];

const PUBLISH_DATE = '2026-08-19';
const SLUG = 'sunglasses-factory-audit-checklist';

export default function SunglassesFactoryAuditChecklist() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog/' },
          { name: 'Sunglasses Factory Audit Checklist' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════ SCHEMA: Article ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "How to Audit a Sunglasses Factory: The 20-Point Supplier Vetting Checklist — A Factory Owner's Guide",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "A factory owner's 20-point checklist to vet a sunglasses supplier before you wire money — facility, certifications, QC, samples, and trading-company red flags.",
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
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Sourcing</span>
            <span>{PUBLISH_DATE}</span>
            <span>•</span>
            <span>9 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How to Audit a Sunglasses Factory: The 20-Point Supplier Vetting Checklist
          </h1>
          <p className="text-xl text-gray-600">
            Last year a buyer wired $34,000 to a "factory" in Shenzhen for 8,000 acetate sunglasses. He had done his audit — a video tour of a clean workshop, a PDF of an ISO 9001 certificate, three samples that looked perfect. What he did not know: the workshop was rented by the hour, the certificate was a Photoshop job, and the samples came from a different factory 60 kilometers away. Here is the 20-point checklist I use to make sure that never happens to one of my clients.
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
            <li><a href="#section-1" className="text-primary-600 hover:underline">Why Most "Factory Audits" Are a Waste of Time</a></li>
            <li><a href="#section-2" className="text-primary-600 hover:underline">The 20-Point Checklist: What to Verify Before You Send Money</a></li>
            <li><a href="#section-3" className="text-primary-600 hover:underline">Red Flags: Signs You're Dealing with a Trading Company, Not a Factory</a></li>
            <li><a href="#section-4" className="text-primary-600 hover:underline">How to Run the Audit: Remote vs On-Site vs Third-Party</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Frequently Asked Questions</a></li>
          </ul>
        </nav>

        {/* ═══════ ARTICLE BODY ═══════ */}
        <div className="prose prose-lg max-w-none">

          <KeyTakeaways items={takeaways} />

          {quickStats.length > 0 && (
            <QuickStats stats={quickStats} title="Sunglasses Factory Audit — Quick Facts" />
          )}

          {/* ─── Section 1 ─── */}
          <h2 id="section-1" className="text-3xl font-bold mt-16 mb-6">Why Most "Factory Audits" Are a Waste of Time</h2>

          <p>I have been on both sides of this table. For 20 years I have run a sunglasses factory, and I have watched hundreds of buyers fly to China, tour a building, shake hands, and wire money — only to discover months later that the building they toured was not the factory that made their order.</p>

          <p>The uncomfortable truth is that most factory audits check the wrong things. They check the things that are easy to fake. And in the Shenzhen-Wenzhou-Xiamen manufacturing triangle, easy-to-fake is a whole industry.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">What Buyers Usually Check — and Why It Proves Nothing</h3>

          <p><strong>The showroom.</strong> A clean room with samples on the wall is the single most overrated piece of evidence in sourcing. Every trading company in Shenzhen has a showroom. Some of them are nicer than mine. They rent them, stock them with samples bought from real factories, and take buyers there because a buyer who sees "product" stops asking about production. A showroom proves only that someone wants to sell you something.</p>

          <p><strong>The certificate wall.</strong> Framed ISO 9001 certificates, CE certificates, BSCI plaques — these are decoration. A forged ISO certificate costs about $20 and takes a day to produce. I have personally seen the same certificate number appear on three different "factory" websites with three different company names. If you did not verify the number against the issuing body\'s public database, you did not check a certificate. You looked at a piece of paper.</p>

          <p><strong>The sample.</strong> Here is the trap that catches the most buyers. A trader sends you a beautiful sample, you approve it, and you think the audit is done. But the sample was made by a real factory — just not the one you are talking to. The trader bought it from Factory A, shipped it to you, and when you order bulk, they source the cheapest bidder, Factory B, who has never seen your sample. Your "approved" sample and your production run now have nothing in common except the model name.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">What a Real Audit Actually Checks</h3>

          <p>A real audit has exactly one objective: <strong>prove that the entity you are paying owns and operates the means of production for your product.</strong> Not "has access to a factory." Not "works with partners." Owns the machines, runs the machines, and can show you the machines running your exact product today.</p>

          <p>This is the only thing a middleman cannot fake, because it is physical. A trading company cannot conjure an injection mold with your logo on the cavity. It cannot produce last month\'s QC defect logs with real serial numbers. It cannot walk a camera from its front gate to a running production line because it does not own a production line. Everything else — documents, photos, videos, showrooms, samples — can be bought, rented, or Photoshopped. The physical production line cannot.</p>

          <p>So when you audit, ignore the polish. Ignore the nice office and the good English in the emails and the smooth sales pitch. Those are marketing. Focus on one question, repeated twenty different ways: <em>can you prove you make this product yourself?</em> The rest of this guide is those twenty questions.</p>

          {/* ─── Section 2 ─── */}
          <h2 id="section-2" className="text-3xl font-bold mt-16 mb-6">The 20-Point Checklist: What to Verify Before You Send Money</h2>

          <p>This is the checklist I hand to first-time buyers before they wire a deposit. It is organized into five groups — facility, equipment, certifications, samples, and QC — because a supplier can fake any one group, but faking all five at once is nearly impossible. Go through every point. If more than three fail, walk away.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Facility &amp; Location (Points 1–4)</h3>

          <p><strong>1. Business license matches the physical address.</strong> Ask for the business license (营业执照) and verify the registered address, the legal representative, and — critically — the business scope. The scope must say "manufacturing" (制造), not "trading" or "wholesale" (贸易/批发). A company registered as a trading company will never become a factory, no matter what their website claims. Cross-check the address in the national registry.</p>

          <p><strong>2. Factory size makes sense for the claim.</strong> A real integrated sunglasses factory — injection, tumbling, painting, and assembly under one roof — needs at least 1,500–3,000 m². If a supplier claims full in-house production and their address is a 200 m² office in a Shenzhen commercial tower, the math does not work. Ask for the total floor area and the headcount, then ask yourself whether that footprint can physically contain the machines they claim to run.</p>

          <p><strong>3. Live floor walk, not a recorded video.</strong> Insist on a live video call where they walk the floor from the front gate. Have them write today\'s date and your name on a whiteboard and hold it up to the camera first. A recorded video is reusable and means nothing; a live walk with a dated whiteboard is hard to stage. If the connection is "bad" every single time, that is your answer.</p>

          <p><strong>4. They occupy the building they show you.</strong> Ask whose name is on the lease or the property deed. The rented-by-the-hour showroom trick is real: a middleman books a shared workshop space for an afternoon, stages it with samples, and runs three buyer tours back-to-back. A real factory\'s lease has the factory\'s name on it, and they will show you the utility bills or the property registration without blinking.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Equipment &amp; Tooling (Points 5–8)</h3>

          <p><strong>5. Injection molding machines — count and tonnage.</strong> If your frames are injected (TR90, polycarbonate, nylon, injected acetate-look), the factory must own injection molding machines, typically 80–250 ton. Ask how many, what brand (Haitian, Chen Hsong, etc.), and how many are currently running. No injection machines means no in-house injected frames, full stop.</p>

          <p><strong>6. The mold for YOUR frame model.</strong> This is the single most revealing request in the entire list. Ask for photos of the actual injection mold for your frame, including the cavity count. A 4-cavity mold runs roughly 1,500 frames a day. If the supplier owns the mold, they will photograph it immediately. If they own your design but not the mold, they are a trader. And always confirm who pays for the mold and who owns it when the order ends — this is written into every serious OEM contract.</p>

          <p><strong>7. CNC machines for acetate.</strong> Acetate frames are cut from sheet, not injected. If a supplier claims to make acetate frames and has no CNC routers or milling machines, they are buying finished acetate frames from Wenzhou and reselling them. Ask to see the CNC cutting your acetate shape, and ask for the CAD file of your frame — a real factory can send you the .dxf or .stp file for your own model within a day.</p>

          <p><strong>8. Finishing equipment.</strong> A complete factory has the finishing line too: tumbling barrels for polishing, spray booths for painting, a UV coating line, laser engraving, and pad printing for logos. If they subcontract painting or laser work, that is not automatically disqualifying — many good factories do — but they should be able to name the subcontractor and show you the incoming inspection records when the parts come back.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Certifications &amp; Compliance (Points 9–12)</h3>

          <p><strong>9. ISO 9001 — verified, not framed.</strong> Ask for the certificate number and the name of the certifying body, then look it up in the body\'s public database. A framed ISO certificate that is not in the registry is worthless. A valid ISO 9001 tells you the factory has documented quality processes — it does not tell you they follow them, but a missing one tells you something important.</p>

          <p><strong>10. CE test report to EN ISO 12312-1.</strong> If you sell into the EU, your sunglasses need a CE mark backed by a real test report showing UV400 protection, lens quality, and frame safety. Ask for the report number and the issuing lab (TÜV, SGS, Intertek, etc.), then verify it with the lab. A forged CE report is one of the most common counterfeit documents in the industry.</p>

          <p><strong>11. FDA establishment registration (US market).</strong> Sunglasses are a Class I medical device in the US, which means the factory should have an FDA establishment registration. You can verify this yourself in the FDA\'s public establishment registration database in under five minutes. If the factory says "FDA approved" — be careful with that phrase; FDA registers establishments and clears devices, it does not "approve" sunglasses. Sloppy language around FDA is a red flag all by itself.</p>

          <p><strong>12. UV400 and lens test reports — batch level.</strong> This is the one certificate that actually protects your customer\'s eyes, and the one most buyers never ask for. Every production batch of lenses should come with a spectrophotometer report showing UVA and UVB transmittance. Ask for the most recent batch\'s report, not a five-year-old type test. A factory that runs real lens QC can produce this in minutes.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Samples &amp; Pre-Production (Points 13–16)</h3>

          <p><strong>13. Sealed, signed pre-production sample.</strong> Before bulk production, you approve a pre-production sample (PPS). That sample must be signed and dated by both parties, sealed, and stored as the "golden sample" that mass production must match. If the factory does not offer a PPS stage, or treats it as optional, treat that as a fail. No golden sample, no legal basis for a quality dispute later.</p>

          <p><strong>14. Material datasheet, not adjectives.</strong> "High-quality plastic" is not a material. Get the actual datasheet: which acetate sheet (e.g., Mazzucchelli M49 or equivalent), which TR90 grade, which polycarbonate resin and supplier. The datasheet has a manufacturer, a grade number, and physical properties. A factory that cannot produce a material datasheet is buying mystery plastic.</p>

          <p><strong>15. Color matching with a physical swatch.</strong> Color is where bulk orders go to die. Approve colors against a physical swatch set and lock in a Pantone or factory color code. Then specify the light source the match is judged under (D65 daylight is standard). "It will be close to the sample" is not a color spec. Get the exact code in writing.</p>

          <p><strong>16. Hardware and hinge spec.</strong> The hinge is the first thing to fail on cheap sunglasses, and buyers never think about it. Specify the hinge type (barrel, spring, or flex), the screw torque, and whether the hinge is plated stainless or base metal. Ask for the hinge supplier and the plating spec. A $0.02 hinge on a $4 frame is how you get a 15% return rate.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">QC Process &amp; Production (Points 17–20)</h3>

          <p><strong>17. Last run\'s QC records, not a promise.</strong> Ask for the AQL inspection reports from the most recent production run — the actual defect counts, the sampling plan, and the disposition. Every real factory has these. A supplier who answers "we check everything 100%" without showing you a single record is a trader with a script.</p>

          <p><strong>18. AQL standard in writing.</strong> For sunglasses, the industry default is AQL 2.5 on major defects and 4.0 on minor, level II sampling. Get the factory to commit to this in the PO. If they balk at putting a defect standard in writing, they are planning to ship you whatever comes off the line.</p>

          <p><strong>19. In-line vs. final inspection.</strong> A competent factory does QC at multiple stages — incoming material inspection, in-line checks after injection and after painting, and a final AQL inspection before packing. Ask them to walk you through their QC points on the live call. "We check at the end" is how a factory ends up with 8,000 pairs of stripped screws discovered only after they land in your warehouse.</p>

          <p><strong>20. Packaging and labeling capability.</strong> Retail-ready packaging — barcode, hangtag, carton marking, and compliance labels — is where a lot of "factories" quietly hand off to a trading office. Confirm the factory does its own packaging and can produce your carton with correct markings and a barcode you can verify. If packaging happens "at our partner," you just found the middleman.</p>

          {/* ─── Section 3 ─── */}
          <h2 id="section-3" className="text-3xl font-bold mt-16 mb-6">Red Flags: Signs You're Dealing with a Trading Company, Not a Factory</h2>

          <p>Somewhere between 60% and 70% of the "factories" advertising sunglasses OEM on Alibaba and Made-in-China are trading companies. Some of them are honest — a good trading company can get you a better price than you would negotiate yourself. But most are not honest, and the difference between a $6 frame and a $1.50 frame that falls apart is whether the person you are paying actually controls production. Here are the red flags I teach my clients to recognize.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">The Address-Phone Mismatch</h3>

          <p>Wenzhou is the acetate capital of China. Xiamen and Taizhou dominate metal and sport frames. Shenzhen is where the trading offices live. So when a "factory" lists a Shenzhen address but a Wenzhou phone number — or a Wenzhou address with a Hong Kong bank account — you are almost certainly dealing with a middleman. Ask for the landline and call it. Ask who answers and in which city. A two-minute phone call reveals more than ten pages of a website.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">"We Can Make Anything"</h3>

          <p>A real factory makes what its machines can make. It has 200–500 SKUs it specializes in, and it will tell you "we do acetate and injected frames, but metal is not our strength." A trading company says yes to everything — acetate, metal, wood, titanium, children\'s, sports, prescription. "We can make anything" is not a capability statement; it is an admission that the speaker does not own any specific machines and will source whatever you ask for from whoever is cheapest this week.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">The Impossible Sample Timeline</h3>

          <p>Custom OEM tooling takes time. A new injection mold for your frame design is 15–30 days. CNC programming and cutting a new acetate shape is 1–2 weeks. So when a "factory" promises a custom sample in 3–5 days, they are not making you a sample — they are buying an existing frame and sticking your logo on it. Real factories quote real timelines, and they will push back when you ask for the impossible. Traders never push back; they just say yes and figure out the lie later.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">The Photos That Are Everywhere</h3>

          <p>Reverse-image-search the product photos on their storefront. If the same frame appears under 50 different company names, none of those companies made it — the actual factory\'s photos leaked and every trader in the ecosystem uses them. The same goes for the "our factory" photos on the website: if the photo is a stock image of a generic cleanroom, or it appears on a dozen sites, it is not their factory. A real factory\'s photos are slightly messy, slightly dated, and uniquely theirs.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">The Suspiciously Low MOQ</h3>

          <p>Real OEM factories have real minimums. For custom frames with your own mold, the MOQ is typically 1,000–3,000 pieces per color. For custom packaging on stock frames, maybe 500. A trading company will happily take 100 pieces because they are not making anything — they are buying from someone else and adding a margin. If the MOQ is low and the price is low and the lead time is short, you are not getting a deal; you are getting a trader.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">The Price That Cannot Be Real</h3>

          <p>Do the material math. A good acetate sheet, a pair of quality CR-39 or polycarbonate lenses with UV400, decent hinges, and finishing work — the material cost alone for a decent frame lands around $1.20–1.50. So when someone offers you a "high-quality" frame at $0.80 FOB, one of two things is true: the materials are not what they claim, or someone in the chain is losing money (and it will not be them). A price below material cost is not competitive; it is evidence of a lie.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">The Payment Terms That Scream Trader</h3>

          <p>Real factories work on 30% deposit, 70% balance before shipment, via T/T — sometimes with a letter of credit for large orders. They are selling production capacity, and they have cash flow. A trading company, by contrast, needs your money before they can pay the real factory, so they pressure for 100% upfront or push you to unsecured channels. Be suspicious of anyone who needs 100% prepayment and cannot show you a machine. And never — never — send a deposit to a personal account or an account in a different name than the company on the license.</p>

          {/* ─── Section 4 ─── */}
          <h2 id="section-4" className="text-3xl font-bold mt-16 mb-6">How to Run the Audit: Remote vs On-Site vs Third-Party</h2>

          <p>You have three ways to run this audit, and they answer different questions at different costs. Here is the honest breakdown from someone who has watched all three fail and all three succeed.</p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Method</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Cost</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">What It Catches</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Remote audit</strong></td>
                  <td className="border border-gray-300 px-4 py-2">$0 + your time</td>
                  <td className="border border-gray-300 px-4 py-2">~60% of scams (license checks, live floor walk, mold photos, QC records)</td>
                  <td className="border border-gray-300 px-4 py-2">Every order — do this first, always</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>On-site visit</strong></td>
                  <td className="border border-gray-300 px-4 py-2">$1,500–3,000 (flight, hotel, translator)</td>
                  <td className="border border-gray-300 px-4 py-2">~90% of scams (you touch the mold, smell the paint line, watch QC)</td>
                  <td className="border border-gray-300 px-4 py-2">Orders over $20,000 or a long-term partnership</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>Third-party (SGS/BV/TÜV)</strong></td>
                  <td className="border border-gray-300 px-4 py-2">$400–800 per man-day</td>
                  <td className="border border-gray-300 px-4 py-2">Documented compliance, but not market or product knowledge</td>
                  <td className="border border-gray-300 px-4 py-2">When a retail buyer demands a specific audit (BSCI, SMETA, etc.)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">The Remote Audit — Free, Fast, and Non-Negotiable</h3>

          <p>A remote audit costs you nothing but an hour and a firm tone. It will catch the lazy scams — the ones where the "factory" cannot produce a license, a mold photo, or a live walk. Run the 20-point checklist over video: business license held to the camera, dated whiteboard, live floor walk, mold photos, last month\'s QC records. A remote audit is not a substitute for the other two, but it is a filter. Any supplier who fails it should never receive a cent. Any supplier who passes it has earned a conversation.</p>

          <p>The most common mistake buyers make remotely is being too polite. They ask "could you maybe show me the factory?" and accept a glossy PDF in return. Do not do that. Be specific and be adversarial — politely. "Send me a photo of the injection mold for frame EV-204 with the cavity count, and the AQL report from your last run, within 24 hours." Specific requests cannot be satisfied by marketing material. Vague requests can.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">The On-Site Visit — When the Money Justifies the Trip</h3>

          <p>Nothing beats standing on the factory floor. You smell the paint line, you hear the injection machines, you watch the QC team reject a bad pair in real time, and you shake the hand of the person who actually signs the production schedule. That trip costs $1,500–3,000 by the time you add flights, hotels, and a translator, so it only makes sense when the order size justifies it — my rule of thumb is orders over $20,000, or any supplier you plan to use for years.</p>

          <p>When you go, bring the checklist. Don\'t let them control the itinerary — a trading company will arrange a day of meetings and meals and showrooms and keep you away from any actual production floor. You want to see three things with your own eyes: the mold for your product, the machines making your product category, and the QC records for the last batch. If the "factory tour" never actually shows you a running machine, you toured a sales office.</p>

          <p>And take someone who speaks the language and the industry. A general translator will nod along to a factory manager\'s claims and not know that a "250-ton injection machine" cannot produce a 20-gram frame at the rate the supplier just quoted. You want someone who can tell the difference between a real production line and a staged one.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">The Third-Party Audit — Defensible, but Limited</h3>

          <p>Companies like SGS, Bureau Veritas, and TÜV Rheinland will audit a factory and hand you a standardized report — facility, workforce, documentation, compliance. This is genuinely valuable in one specific situation: when a big retail buyer demands a specific audit standard before they will stock your brand. BSCI, SMETA, and SEDEX audits exist because retailers need a defensible paper trail on labor and environmental compliance, and a third-party report is the currency of that world.</p>

          <p>But understand what a third-party audit does not do. The auditor is checking compliance against a checklist, not whether the factory makes good sunglasses or whether the price is fair or whether the mold for your frame actually exists. An auditor will confirm the factory has a fire extinguisher and an HR policy and will not tell you the injection machine is running your competitor\'s frame, not yours. Third-party audits answer "is this a compliant factory," not "is this the right factory for me."</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">My Recommendation, in One Sentence</h3>

          <p>Run the remote audit on every supplier, fly on-site when the order passes $20,000 or the relationship becomes long-term, and bring in a third party only when a specific compliance report is the gate to a big retail account. And never, under any circumstance, wire money to someone who failed the remote audit because they "seemed nice on the video call." Nice is free. A real factory is verifiable.</p>

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
            <h2 className="text-3xl font-bold mb-4">Ready to Skip the Middlemen?</h2>
            <p className="text-xl mb-6 opacity-90">Send me your spec. I\'ll walk you through a real factory on a live call — the mold, the machines, and last month\'s QC records — so you can vet us with this exact checklist before you wire a single dollar.</p>
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
              <Link href="/blog/find-sunglasses-manufacturer" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">How to Find a Sunglasses Manufacturer</h3>
                <p className="text-gray-600 text-sm">Where to look, what to ask, and how to build a shortlist without getting scammed.</p>
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
