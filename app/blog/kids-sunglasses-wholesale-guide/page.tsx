import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'Kids Sunglasses Wholesale Guide: B2B Sourcing, Safety Standards & Bulk Pricing',
  description: 'Complete B2B guide to sourcing kids sunglasses wholesale: FDA/CE safety requirements, age-specific sizing, flexible frame materials, bulk pricing by quantity tier, and how to avoid the #1 mistake importers make with children\'s eyewear.',
  keywords: ['kids sunglasses wholesale', 'bulk kids sunglasses', 'children sunglasses manufacturer', 'kids eyewear safety standards', 'wholesale children sunglasses', 'kids sunglasses factory', 'bulk kids eyewear', 'FDA kids sunglasses', 'CE children sunglasses', 'kids sunglasses sizing guide'],
  alternates: {
    canonical: '/blog/kids-sunglasses-wholesale-guide',
  },
};

const takeaways = [
  'Kids sunglasses are not just smaller adult sunglasses — they require fundamentally different materials, safety certifications, and design considerations that affect sourcing decisions at every level',
  'FDA and CE compliance is non-negotiable for children\'s eyewear: impact-resistant lenses, no sharp edges, no small detachable parts (choking hazard), and nickel-free metal components are baseline requirements — missing any of these can get your shipment rejected at customs',
  'Flexible TPEE/TPR frames are the industry standard for kids under 8 because they bend without breaking and survive the "twist test" — rigid acetate or metal frames for young children are a return-rate disaster waiting to happen',
  'Bulk pricing for kids sunglasses follows a steep volume curve: 500 units at $2.80–4.50/pair (basic), 3,000+ drops to $1.80–2.80/pair, and contract manufacturing at 10,000+ units can hit $1.20–1.80/pair — the margin flip point is usually around 2,000 units',
  'Age-specific sizing is the most overlooked detail in kids eyewear sourcing: toddler (0–3Y), little kids (3–7Y), big kids (7–12Y), and tween/teen (12–16Y) each need different frame widths, bridge sizes, and temple lengths — one-size-fits-all kids sunglasses are a myth your customers will prove with returns',
  'The kids sunglasses market is growing at 6.8% CAGR globally through 2030, driven by increased UV awareness among parents and expanding school sun-safety policies — wholesalers who build a kids line now are getting ahead of a structural demand shift',
];

const quickStats = [
  { label: 'Global Kids Sunglasses CAGR (2026–2030)', value: '6.8%' },
  { label: 'MOQ for Custom Kids Frames', value: '500–1,000 units' },
  { label: 'Bulk Price at 3,000+ Units', value: '$1.80–2.80/pair' },
  { label: 'Contract Mfg Price at 10K+', value: '$1.20–1.80/pair' },
  { label: 'Key Safety Standard (US)', value: 'FDA 21 CFR 801.410' },
  { label: 'Key Safety Standard (EU)', value: 'EN ISO 12312-1' },
];

const faqs = [
  {
    question: 'What safety certifications do kids sunglasses need?',
    answer: 'In the US, kids sunglasses must comply with FDA 21 CFR 801.410 (impact-resistant lenses) and CPSIA (lead content limits, phthalate restrictions, third-party testing for children\'s products). In the EU, they need CE marking under EN ISO 12312-1, which covers UV protection (minimum UV400), impact resistance, and frame safety — including the critical requirement that frames have no sharp edges or projections. Australia/New Zealand requires AS/NZS 1067 compliance. Most reputable Chinese factories that export to Western markets are already familiar with these standards and can provide test reports from SGS, Intertek, or Bureau Veritas. Always request a copy of the lab report before placing your first order.',
  },
  {
    question: 'What is the best frame material for kids sunglasses?',
    answer: 'For children under 8, TPEE (thermoplastic polyester elastomer) or flexible TPR is the best choice — these materials bend without breaking, survive the twist-and-pull abuse kids dish out, and can be made BPA-free. For ages 8–12, TR90 is excellent: lightweight, flexible, and more durable than acetate. For teens 12+, acetate becomes viable because the breakage risk drops significantly and the premium feel matters more to older kids and parents. Metal frames for kids should be avoided unless they are specifically designed with spring hinges and nickel-free stainless steel — even then, they are best reserved for the teen segment. The number one mistake importers make is ordering rigid acetate frames for 4–7 year olds and dealing with a 15%+ breakage rate during shipping and retail handling.',
  },
  {
    question: 'What are the standard sizes for kids sunglasses by age group?',
    answer: 'Toddler (0–3 years): frame width 100–110mm, lens width 40–44mm, bridge 14–16mm, temple 110–120mm. Little kids (3–7 years): frame width 115–125mm, lens width 44–48mm, bridge 15–17mm, temple 120–130mm. Big kids (7–12 years): frame width 125–135mm, lens width 47–51mm, bridge 16–18mm, temple 125–135mm. Tween/teen (12–16 years): frame width 130–140mm, lens width 50–54mm, bridge 17–19mm, temple 130–140mm — many in this age group can wear small adult sizes. Most factories offer 2–3 size variants per style to cover the full age range, and the smartest wholesale strategy is to stock at minimum the "little kids" and "big kids" sizes, which together cover 80% of the children\'s market.',
  },
  {
    question: 'What are the UV protection requirements for kids sunglasses?',
    answer: 'Children\'s eyes are more susceptible to UV damage than adult eyes because their ocular lenses are clearer and transmit more UV radiation to the retina. The minimum standard is UV400 protection (blocks 99–100% of UVA and UVB rays up to 400nm). This is the same UV protection level required for adult sunglasses under FDA and CE standards, but for kids sunglasses it is absolutely non-negotiable — some jurisdictions (Australia, New Zealand) mandate Category 3 or higher lens tint for children\'s sunglasses, which blocks 82–92% of visible light in addition to UV. Polarized lenses are not required by regulation but are a strong selling feature for parents who want reduced glare during outdoor activities like beach trips, sports, and driving with kids in the car.',
  },
  {
    question: 'What is the typical MOQ for custom kids sunglasses?',
    answer: 'For stock OEM frames with custom logo printing: 300–500 units per style, per color. For fully custom molds (your own frame design): 1,000–2,000 units per style with mold fees of $300–800 per mold. Most kids sunglasses manufacturers in China, particularly in the Xiamen and Wenzhou clusters, will negotiate down to 500 units for a first order if you are ordering 3+ styles. The total first order with 3 styles × 500 units × 2 colors each (3,000 pairs) at $2.50/pair average comes to approximately $7,500 FOB — this is a realistic entry point for a kids sunglasses wholesale line.',
  },
  {
    question: 'How do I package kids sunglasses for retail?',
    answer: 'Kids sunglasses packaging needs to balance visibility (parents want to see what they are buying), durability (the packaging will be handled by small hands in-store), and safety (no sharp plastic edges, no small loose parts). The most popular formats are: (1) clear PVC zip pouches with hang-hole header cards — low cost, high visibility, preferred by discount retailers; (2) printed cardboard boxes with die-cut window — premium feel for gift-giving and boutique stores; (3) blister cards — tamper-proof but higher per-unit cost and plastic waste concerns. Include a soft microfiber pouch and a flexible neck strap with every pair — these two accessories cost under $0.15 combined at factory pricing but parents perceive them as essential for kids sunglasses, and retailers will specifically ask whether you include them.',
  },
];

const PUBLISH_DATE = '2026-08-04';
const SLUG = 'kids-sunglasses-wholesale-guide';

export default function KidsSunglassesWholesaleGuide() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog/' },
          { name: 'Kids Sunglasses Wholesale Guide' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════ SCHEMA: Article ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Kids Sunglasses Wholesale Guide: B2B Sourcing, Safety Standards & Bulk Pricing",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Complete B2B guide to sourcing kids sunglasses wholesale: FDA/CE safety requirements, age-specific sizing, flexible frame materials, bulk pricing, and how to avoid import mistakes.",
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
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Wholesale Guide</span>
            <span>{PUBLISH_DATE}</span>
            <span>•</span>
            <span>11 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Kids Sunglasses Wholesale Guide: B2B Sourcing, Safety Standards &amp; Bulk Pricing
          </h1>
          <p className="text-xl text-gray-600">
            In 15 years of manufacturing sunglasses, I have seen importers lose entire containers of kids eyewear at customs because of one missing safety document. I have also watched smart wholesalers turn a $7,500 first order into a $200K/year children\'s line. The difference is knowing what matters before you place the order.
          </p>
        </header>

        <KeyTakeaways items={takeaways} />

        {/* ═══════ WHY KIDS SUNGLASSES IS A GROWING B2B MARKET ═══════ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why the Kids Sunglasses Market Is Growing — and Why Most Wholesalers Ignore It</h2>
          <p className="text-lg text-gray-700 mb-4">
            The global kids sunglasses market is projected to grow at 6.8% CAGR from 2026 to 2030, according to industry data. This is outpacing the adult sunglasses segment (4.2% CAGR) by a significant margin. The drivers are structural, not cyclical:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li><strong>UV awareness among millennial parents</strong> — the generation that grew up with ozone layer warnings is now buying sunglasses for their children with the same diligence they apply to sunscreen</li>
            <li><strong>School sun-safety policies</strong> — Australia, New Zealand, and parts of the US now mandate or strongly recommend sunglasses as part of school sun protection, and this trend is spreading to Europe and Asia</li>
            <li><strong>Kids as a fashion category</strong> — children\'s eyewear is no longer purely functional; brands like Ray-Ban Junior, Nike Kids, and boutique labels have turned kids sunglasses into a legitimate fashion segment</li>
            <li><strong>Underserved wholesale channel</strong> — most sunglasses wholesalers focus on adult styles, creating a supply gap that early movers in the kids segment can exploit</li>
          </ul>
          <p className="text-lg text-gray-700">
            The math is compelling: a moderately successful adult wholesale line competes with hundreds of suppliers. A moderately successful kids wholesale line competes with maybe a dozen. The market is smaller in absolute terms, but the competitive moat is deeper.
          </p>
        </section>

        <QuickStats stats={quickStats} />

        {/* ═══════ SAFETY STANDARDS ═══════ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Safety Certifications: The Non-Negotiable Foundation</h2>
          <p className="text-lg text-gray-700 mb-4">
            If you take one thing from this guide, make it this: children\'s sunglasses are regulated differently from adult sunglasses in every major market. The compliance burden is higher, the testing is more rigorous, and the consequences of getting it wrong — CPSC recall, customs seizure, liability claims — are severe.
          </p>
          
          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">United States: FDA + CPSIA</h3>
          <p className="text-gray-700 mb-4">
            Two agencies regulate kids sunglasses in the US. The FDA (under 21 CFR 801.410) mandates impact-resistant lenses — this applies to all sunglasses, but enforcement is especially strict for children\'s products. The CPSC enforces the Consumer Product Safety Improvement Act (CPSIA), which requires:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>Third-party testing from a CPSC-accepted lab for lead content (≤100 ppm in accessible substrate materials, ≤90 ppm in surface coatings)</li>
            <li>Phthalate restrictions (≤0.1% for DEHP, DBP, BBP, DINP, DIDP, DnOP, DIBP)</li>
            <li>Children\'s Product Certificate (CPC) — a self-issued document backed by passing lab test reports, which you must provide to retailers and, upon request, to the CPSC</li>
          </ul>
          <p className="text-gray-700 mb-6">
            Pro tip: request CPSIA-compliant test reports from your factory <em>before</em> placing the order. A factory that cannot produce a valid SGS/Intertek report for lead and phthalates within 48 hours is a factory you should walk away from. The report should be less than 12 months old.
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">European Union: CE + REACH</h3>
          <p className="text-gray-700 mb-4">
            EU children\'s sunglasses must carry CE marking under EN ISO 12312-1 (sunglasses) and comply with REACH regulation (EC 1907/2006) for chemical substances. Additional requirements include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>EN 71-3 compliance for toys-like products — if your kids sunglasses are marketed with characters, bright colors, or packaging that appeals to children, they may fall under the toy safety directive</li>
            <li>Nickel release testing (EN 1811) for any metal components that contact skin</li>
            <li>Declaration of Conformity (DoC) signed by the manufacturer or importer</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Australia/New Zealand: AS/NZS 1067</h3>
          <p className="text-gray-700 mb-4">
            Australian Standard AS/NZS 1067 is one of the strictest sunglasses standards in the world. For children\'s sunglasses, Category 3 or 4 lenses are typically required, and the standard includes specific tests for frame durability that go beyond FDA and CE requirements. If you plan to sell into the Australian market, find a factory with documented AS/NZS 1067 compliance — do not assume CE compliance is sufficient.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
            <h4 className="font-bold text-amber-800 mb-2">⚠️ Customs Rejection Warning</h4>
            <p className="text-amber-800">
              The number one reason kids sunglasses shipments get flagged at US and EU customs is <strong>missing or incomplete Children\'s Product Certificates</strong>. A CPC must include: (1) product identification, (2) each applicable safety rule, (3) importer/manufacturer contact information, (4) third-party lab information and test report reference, (5) date and place of manufacture, and (6) date and place of testing. All six elements. Every single time. One missing field equals a detained container.
            </p>
          </div>
        </section>

        {/* ═══════ MATERIALS ═══════ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frame Materials by Age Group</h2>
          <p className="text-lg text-gray-700 mb-6">
            The frame material decision is where wholesale buyers either save themselves a world of returns or walk into a customer service disaster. Here is the breakdown by age:
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border-collapse border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Age Group</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Best Material</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Why</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Avoid</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 font-medium">0–3 years (Toddler)</td>
                  <td className="border border-gray-200 px-4 py-3">TPEE / Flexible TPR</td>
                  <td className="border border-gray-200 px-4 py-3">Bends 180° without breaking; survives chewing, twisting, throwing</td>
                  <td className="border border-gray-200 px-4 py-3 text-red-600">Acetate, metal, rigid plastic</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 font-medium">3–7 years</td>
                  <td className="border border-gray-200 px-4 py-3">TPEE / TR90</td>
                  <td className="border border-gray-200 px-4 py-3">Flexible but more style-conscious; balance of durability and design</td>
                  <td className="border border-gray-200 px-4 py-3 text-red-600">Thin acetate, all-metal frames</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 font-medium">7–12 years</td>
                  <td className="border border-gray-200 px-4 py-3">TR90 / Acetate</td>
                  <td className="border border-gray-200 px-4 py-3">Durability still matters but style preference increases; acetate is viable here</td>
                  <td className="border border-gray-200 px-4 py-3 text-red-600">Heavy metal frames</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 font-medium">12–16 years (Teen)</td>
                  <td className="border border-gray-200 px-4 py-3">Acetate / TR90 / Metal</td>
                  <td className="border border-gray-200 px-4 py-3">Adult materials work; style and brand perception dominate</td>
                  <td className="border border-gray-200 px-4 py-3 text-red-600">Overly "toy-like" designs</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Lens Material: Polycarbonate Is the Only Answer</h3>
          <p className="text-gray-700 mb-4">
            For kids sunglasses, polycarbonate lenses are the industry standard for a reason: they are naturally impact-resistant (meeting FDA drop-ball test requirements without additional treatment), lighter than CR-39, and provide inherent UV protection. Glass lenses should <strong>never</strong> be used in children\'s sunglasses — they shatter on impact and create sharp fragments. This is not a preference; it is a safety requirement in most jurisdictions.
          </p>
        </section>

        {/* ═══════ SIZING ═══════ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Age-Specific Sizing: One Size Does Not Fit All</h2>
          <p className="text-lg text-gray-700 mb-6">
            The single most common complaint from retailers about kids sunglasses is inconsistent sizing. A pair labeled "ages 4–10" that fits a 4-year-old will look absurd on a 9-year-old, and vice versa. Here is the sizing guide your factory needs to follow:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Age</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Frame Width</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Lens Width</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Bridge</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Temple</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 font-medium">0–3 yrs</td>
                  <td className="border border-gray-200 px-4 py-3">100–110mm</td>
                  <td className="border border-gray-200 px-4 py-3">40–44mm</td>
                  <td className="border border-gray-200 px-4 py-3">14–16mm</td>
                  <td className="border border-gray-200 px-4 py-3">110–120mm</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 font-medium">3–7 yrs</td>
                  <td className="border border-gray-200 px-4 py-3">115–125mm</td>
                  <td className="border border-gray-200 px-4 py-3">44–48mm</td>
                  <td className="border border-gray-200 px-4 py-3">15–17mm</td>
                  <td className="border border-gray-200 px-4 py-3">120–130mm</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 font-medium">7–12 yrs</td>
                  <td className="border border-gray-200 px-4 py-3">125–135mm</td>
                  <td className="border border-gray-200 px-4 py-3">47–51mm</td>
                  <td className="border border-gray-200 px-4 py-3">16–18mm</td>
                  <td className="border border-gray-200 px-4 py-3">125–135mm</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 font-medium">12–16 yrs</td>
                  <td className="border border-gray-200 px-4 py-3">130–140mm</td>
                  <td className="border border-gray-200 px-4 py-3">50–54mm</td>
                  <td className="border border-gray-200 px-4 py-3">17–19mm</td>
                  <td className="border border-gray-200 px-4 py-3">130–140mm</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 mb-4">
            The most cost-effective wholesale strategy is to cover the 3–7 and 7–12 age groups first — together they represent over 70% of the kids sunglasses market by volume. Toddler sizes (0–3) and teen sizes (12–16) can be added as a second phase.
          </p>
          <p className="text-gray-700">
            Critical quality check: have your factory confirm the <strong>temple-to-temple spring hinge tension</strong> for all kids frames. Too tight and it pinches the child\'s head; too loose and the glasses slide off. The sweet spot is 0.6–0.8 N·m of torque at 90° temple opening — your factory QC team should know this number, and if they do not, find a different factory.
          </p>
        </section>

        {/* ═══════ BULK PRICING ═══════ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Bulk Pricing: What Kids Sunglasses Actually Cost at the Factory</h2>
          <p className="text-lg text-gray-700 mb-6">
            Kids sunglasses are generally cheaper to manufacture than adult styles because they use less material and simpler construction. But the safety compliance premium — testing, certification, and material-grade requirements — partially offsets that savings. Here are real FOB price ranges from Chinese factories (Xiamen/Wenzhou clusters, as of 2026):
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Quantity</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Basic TPEE Frame</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">TR90 w/ Polarized Lens</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Custom Mold + Branding</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 font-medium">300–500 units</td>
                  <td className="border border-gray-200 px-4 py-3">$3.50–4.50/pair</td>
                  <td className="border border-gray-200 px-4 py-3">$4.80–6.50/pair</td>
                  <td className="border border-gray-200 px-4 py-3">$5.50–8.00/pair + mold fee</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 font-medium">1,000–2,000 units</td>
                  <td className="border border-gray-200 px-4 py-3">$2.50–3.50/pair</td>
                  <td className="border border-gray-200 px-4 py-3">$3.80–5.00/pair</td>
                  <td className="border border-gray-200 px-4 py-3">$3.80–5.50/pair</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 font-medium">3,000–5,000 units</td>
                  <td className="border border-gray-200 px-4 py-3">$1.80–2.80/pair</td>
                  <td className="border border-gray-200 px-4 py-3">$2.80–3.80/pair</td>
                  <td className="border border-gray-200 px-4 py-3">$2.50–4.00/pair</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 font-medium">10,000+ units</td>
                  <td className="border border-gray-200 px-4 py-3">$1.20–1.80/pair</td>
                  <td className="border border-gray-200 px-4 py-3">$2.00–3.00/pair</td>
                  <td className="border border-gray-200 px-4 py-3">$1.80–2.80/pair</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 mb-6">Prices are FOB (Free On Board) — shipping, duties, and customs clearance not included. Mold fees for custom frames typically range $300–800 per mold and are often waived for orders above 5,000 units.</p>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Retail Margin Math</h3>
          <p className="text-gray-700 mb-4">
            A basic TPEE kids sunglass that costs you $2.80 FOB at 3,000 units will land at roughly $3.80–4.20/pair after freight and duties. At a wholesale price to retailers of $6.50–8.00/pair, you are looking at 60–110% markup. The retailer then prices at $14.99–19.99, hitting standard 2.5–3× keystone margins. A polarized TR90 version landing at $4.50 can wholesale at $9–12 and retail at $24.99–29.99. The math works at every tier — provided you hit the minimum volume to unlock factory pricing.
          </p>
        </section>

        {/* ═══════ STYLES & TRENDS ═══════ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Popular Styles & Trends in Kids Sunglasses (2026)</h2>
          
          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Top-Selling Kids Styles</h3>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
            <li><strong>Round "John Lennon" frames</strong> — consistently the #1 selling kids style across all age groups; works for both boys and girls, easy to manufacture, universally cute</li>
            <li><strong>Wayfarer-inspired squares</strong> — the classic adult shape scaled down; best for ages 7+ where kids want to look "cool" rather than "cute"</li>
            <li><strong>Cat-eye for girls</strong> — strong seller in the 5–12 age range, especially in pastel and glitter colorways</li>
            <li><strong>Sport wrap styles</strong> — growing segment driven by kids sports participation; needs rubberized nose pads and temple tips for active use</li>
            <li><strong>Character-licensed frames</strong> — if your budget allows for licensing (Marvel, Disney, etc.), the premium is 15–25% on COGS but the retail velocity is 2–3× unbranded styles</li>
          </ul>

          <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Color Trends</h3>
          <p className="text-gray-700 mb-4">
            Kids sunglasses color preferences are dramatically different from adults. Pastels (baby pink, mint green, sky blue, lavender) dominate for girls under 10. Neon brights (electric blue, lime green, hot orange) are the top sellers for boys 5–10. Solid black and tortoise — the adult staples — barely move in kids under 12. Your color mix for a kids line should be roughly 40% pastels, 30% brights, 20% translucent/fun patterns (camo, tie-dye, ombre), and only 10% black/tortoise for the teen crossover segment.
          </p>
        </section>

        {/* ═══════ ACCESSORIES ═══════ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Accessories: The $0.15 Add-Ons That Close Retail Deals</h2>
          <p className="text-lg text-gray-700 mb-4">
            When a retail buyer is comparing your kids sunglasses line against a competitor\'s, the decision often comes down to what is <em>in the box</em>. These accessories cost almost nothing at factory pricing but create outsized perceived value:
          </p>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
            <li><strong>Adjustable neck strap</strong> ($0.08–0.12) — prevents glasses from falling off during play; parents love this, and it reduces your return rate because lost glasses = returned glasses</li>
            <li><strong>Microfiber pouch with drawstring</strong> ($0.10–0.15) — protects lenses in backpacks; doubles as packaging and a retail display element</li>
            <li><strong>Flexible silicone case</strong> ($0.25–0.40) — for premium lines; crush-proof cases that kids can sit on without destroying</li>
            <li><strong>UV test card</strong> ($0.02–0.03) — a small card that changes color under UV light; this is pure marketing genius — it gives parents an interactive way to verify UV protection and makes your product memorable</li>
          </ol>
          <p className="text-gray-700">
            A complete package — sunglasses + neck strap + microfiber pouch + UV test card — adds approximately $0.25 to your landed cost. At a $12 wholesale price, that is 2% of COGS for accessories that can make the difference between a $3,000 order and a "we\'ll think about it."
          </p>
        </section>

        {/* ═══════ SEASONAL STRATEGY ═══════ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Seasonal Buying Calendar for Kids Sunglasses Wholesale</h2>
          <p className="text-lg text-gray-700 mb-6">
            Kids sunglasses have a sharper seasonal curve than adult sunglasses because they are almost entirely an outdoor/summer purchase. Understanding the buying cycle is essential for inventory planning:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Month</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Retailer Activity</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">Wholesaler Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 font-medium">Jan–Feb</td>
                  <td className="border border-gray-200 px-4 py-3">Retailers place spring/summer orders</td>
                  <td className="border border-gray-200 px-4 py-3 font-semibold text-green-700">Place factory orders NOW for March delivery</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 font-medium">Mar–Apr</td>
                  <td className="border border-gray-200 px-4 py-3">Spring break and Easter promotions begin</td>
                  <td className="border border-gray-200 px-4 py-3">Stock arrives; ship to retailers immediately</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 font-medium">May–Jul</td>
                  <td className="border border-gray-200 px-4 py-3 font-semibold">PEAK SEASON — summer vacation, camps, beach</td>
                  <td className="border border-gray-200 px-4 py-3">Replenishment orders; expect 30–40% of annual volume in these 3 months</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 font-medium">Aug</td>
                  <td className="border border-gray-200 px-4 py-3">Back-to-school: secondary opportunity for school-required sunglasses</td>
                  <td className="border border-gray-200 px-4 py-3">Clear remaining summer inventory; prepare holiday gift-set packaging</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 font-medium">Sep–Oct</td>
                  <td className="border border-gray-200 px-4 py-3">Holiday pre-orders for gift sets</td>
                  <td className="border border-gray-200 px-4 py-3">Market kids sunglasses + case bundles as holiday gifts</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 font-medium">Nov–Dec</td>
                  <td className="border border-gray-200 px-4 py-3">Holiday gift sales; retailers plan next year</td>
                  <td className="border border-gray-200 px-4 py-3 font-semibold text-blue-700">Attend trade shows; secure next year\'s pre-orders</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700">
            The critical insight: if you are reading this in <strong>August</strong>, you have missed the peak summer window but are perfectly positioned to (1) clear remaining inventory, (2) plan your holiday gift-set strategy, and (3) start factory sampling for the January pre-order cycle. The wholesale sunglasses calendar runs 3–4 months ahead of the retail calendar — plan accordingly.
          </p>
        </section>

        {/* ═══════ AUTHOR ═══════ */}
        <section className="bg-gray-50 rounded-xl p-8 mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">JC</div>
            <div>
              <h3 className="font-semibold text-gray-900">Jacky Chen</h3>
              <p className="text-sm text-gray-600">Founder, EyeView Sunglasses</p>
            </div>
          </div>
          <p className="text-gray-700">
            15 years in the sunglasses manufacturing industry. I have produced over 2 million pairs of sunglasses for brands in 40+ countries, including children\'s lines for major retailers in the US, Europe, and Australia. When I am not on the factory floor, I write about the business side of eyewear because most sourcing advice online is written by people who have never placed a factory order.
          </p>
        </section>

        {/* ═══════ FAQ SECTION ═══════ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════ CTA ═══════ */}
        <section className="bg-primary-700 rounded-2xl p-10 text-center text-white mb-12">
          <h2 className="text-3xl font-bold mb-4">Looking for a Kids Sunglasses Factory?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            We produce FDA/CE-compliant children\'s sunglasses in TPEE, TR90, and acetate. CPSIA test reports, custom packaging, and neck straps included. Minimum order: 500 units per style.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-primary-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-colors">
              Request a Quote
            </Link>
            <Link href="/wholesale-sunglasses" className="bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-500 transition-colors border-2 border-primary-400">
              Browse Wholesale Catalog
            </Link>
          </div>
        </section>

        {/* ═══════ RELATED ═══════ */}
        <section className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/blog/sunglasses-moq-guide" className="group block p-6 border border-gray-200 rounded-xl hover:border-primary-300 transition-colors">
              <p className="text-sm text-primary-600 mb-2">Wholesale Guide</p>
              <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">Sunglasses MOQ Guide: Minimum Order Quantities Explained</h3>
              <p className="text-gray-600 text-sm">What MOQ actually means at the factory level — and how to negotiate it down.</p>
            </Link>
            <Link href="/blog/fda-ce-certification-sunglasses" className="group block p-6 border border-gray-200 rounded-xl hover:border-primary-300 transition-colors">
              <p className="text-sm text-primary-600 mb-2">Compliance</p>
              <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">FDA & CE Certification for Sunglasses: Complete Compliance Guide</h3>
              <p className="text-gray-600 text-sm">Everything importers need to know about sunglasses safety certifications.</p>
            </Link>
            <Link href="/blog/import-sunglasses-from-china" className="group block p-6 border border-gray-200 rounded-xl hover:border-primary-300 transition-colors">
              <p className="text-sm text-primary-600 mb-2">Sourcing</p>
              <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">How to Import Sunglasses from China: The 2026 Guide</h3>
              <p className="text-gray-600 text-sm">Step-by-step importing process, from factory selection to customs clearance.</p>
            </Link>
            <Link href="/blog/wholesale-sunglasses-pricing-guide" className="group block p-6 border border-gray-200 rounded-xl hover:border-primary-300 transition-colors">
              <p className="text-sm text-primary-600 mb-2">Pricing</p>
              <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">Wholesale Sunglasses Pricing Guide: How Factories Set Prices</h3>
              <p className="text-gray-600 text-sm">Understand factory pricing structures so you negotiate from an informed position.</p>
            </Link>
          </div>
        </section>

      </div>
    </article>
  );
}
