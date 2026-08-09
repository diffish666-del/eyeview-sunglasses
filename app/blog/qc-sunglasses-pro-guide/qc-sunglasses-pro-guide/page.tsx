import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'How to QC Sunglasses Like a Pro: Insider Inspection Tactics',
  description: 'Factory-level QC strategies most buyers never learn. How to spot hidden defects, negotiate inspection rights, build a rejection protocol, and train your eye like a veteran inspector.',
  keywords: ['QC sunglasses like a pro', 'sunglasses inspection tactics', 'factory quality control tips', 'hidden sunglasses defects', 'eyewear QC negotiation', 'sunglasses rejection protocol'],
  alternates: {
    canonical: '/blog/qc-sunglasses-pro-guide',
    languages: {
      'en': '/blog/qc-sunglasses-pro-guide',
    },
  },
};

const takeaways = [
  'The best QC happens BEFORE production starts — negotiate a pre-production sample sign-off process that legally binds the factory to match quality, not just design',
  'Use a "golden sample" sealed and signed by both parties as your QC benchmark — photos and specs alone are not enough when disputes happen',
  'The text-through-lens test catches 22% of all defects in 3 seconds, but most buyers do it wrong: hold lenses 30cm from a printed page, rotate 360°, check all four quadrants',
  'Build a defect classification system (Critical/Major/Minor) into your purchase contract with specific thresholds — never rely on the factory\'s judgment of what "acceptable" means',
  'Third-party inspection is cost-effective above $3,000 order value, but you must specify inspection points beyond AQL: UV testing, hinge cycle count, salt-spray for metal frames',
  'The #1 pro tip: request video of the actual QC process, not just the report — a 3-minute factory-floor video catches things that polished PDF reports conveniently omit',
];

const quickStats = [
  { label: 'QC ROI', value: '10–50x savings' },
  { label: '#1 Defect (lens distortion)', value: '22% of all defects' },
  { label: '3rd-party inspection cost', value: '$200–400/day' },
  { label: 'Golden sample prevents', value: '~90% of disputes' },
];

const faqs = [
  {
    question: 'How do I negotiate QC inspection rights with a Chinese factory?',
    answer: 'Put it in the purchase order before you pay the deposit. Specify: (1) your right to inspect at any production stage, (2) acceptance of third-party inspectors on premises, (3) your AQL standard and defect classification, (4) what happens when a batch fails — rework timeline, re-inspection cost, and at what point you can cancel. Factories that push back on these terms are the ones you need them most with.',
  },
  {
    question: "What's a golden sample and why do I need one?",
    answer: 'A golden sample is a physical pair of sunglasses that has passed your full QC inspection and is sealed in a tamper-evident bag, signed and dated by both you and the factory manager. It becomes the legally binding quality benchmark for the entire production run. Without one, if a dispute arises, the factory says "this is normal variation" and you say "this is defective" — and you have no objective reference. Seal it, photograph it, store it. It has saved us from six-figure disputes.',
  },
  {
    question: 'How do I train myself to spot defects that factories hide?',
    answer: 'Practice the 5-minute drill: take 10 pairs, give yourself exactly 5 minutes, and try to find every defect. Time pressure forces your eye to develop pattern recognition. After 20-30 rounds, you\'ll spot uneven hinge tension and lens waviness in under 30 seconds. Also: always inspect under 500-lux lighting (about bright office level), never under factory floor light — dim lighting hides surface scratches and coating defects.',
  },
  {
    question: 'What should I do when a QC inspection fails?',
    answer: 'Never accept "we\'ll fix it in the next batch" without a written corrective action plan. Your contract should specify: (1) rework deadline (typically 7-14 days), (2) who pays for re-inspection (factory, if their fault), (3) liquidated damages for late delivery caused by rework, (4) your right to cancel with full refund if reworked batch also fails. The factories that respect these terms are the factories that rarely trigger them — because they have internal QC that catches issues before you do.',
  },
  {
    question: 'How do I QC sunglasses remotely if I can\'t visit the factory?',
    answer: 'Three must-haves for remote QC: (1) Hire a local third-party inspector — QIMA, SGS, Bureau Veritas all have China offices and cost $200-400 per inspection. (2) Require a video call walkthrough of YOUR specific batch — not a generic factory tour. Ask them to hold pairs up to text on camera, flex hinges, show symmetry on a flat surface. (3) Request pre-shipment photos of 20+ randomly selected pairs from your batch, photographed under bright light from multiple angles. Cross-reference with your golden sample.',
  },
];

const PUBLISH_DATE = '2026-08-03';
const SLUG = 'qc-sunglasses-pro-guide';

export default function QCProGuidePage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Blog', href: '/blog/' }, { name: 'How to QC Sunglasses Like a Pro' }]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "How to QC Sunglasses Like a Pro: Insider Inspection Tactics",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Factory-level QC strategies most buyers never learn — hidden defects, golden samples, rejection protocols, and how to train your eye like a veteran inspector.",
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
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Manufacturing</span>
            <span>{PUBLISH_DATE}</span>
            <span>•</span>
            <span>16 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How to QC Sunglasses Like a Pro: Insider Inspection Tactics
          </h1>
          <p className="text-xl text-gray-600">
            Most buyers walk into a factory, look at a few pairs, and say &ldquo;looks good.&rdquo;
            That&apos;s not QC — that&apos;s wishful thinking. Here&apos;s how the pros do it: the
            tactics, the contract language, and the judgment calls that separate &ldquo;I hope they&apos;re good&rdquo;
            from &ldquo;I know they&apos;re good.&rdquo;
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
            <li><a href="#golden-sample" className="text-primary-600 hover:underline">The Golden Sample: Your Most Powerful QC Tool</a></li>
            <li><a href="#contract-language" className="text-primary-600 hover:underline">QC Contract Language That Actually Works</a></li>
            <li><a href="#defect-classification" className="text-primary-600 hover:underline">Build Your Own Defect Classification System</a></li>
            <li><a href="#hidden-defects" className="text-primary-600 hover:underline">5 Defects Most Buyers Never Catch</a></li>
            <li><a href="#remote-qc" className="text-primary-600 hover:underline">How to QC Remotely (Without Flying to China)</a></li>
            <li><a href="#when-to-reject" className="text-primary-600 hover:underline">When to Reject a Batch — and When to Accept It</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Frequently Asked Questions</a></li>
          </ul>
        </nav>

        <div className="prose prose-lg max-w-none">

          <KeyTakeaways items={takeaways} />

          <QuickStats stats={quickStats} title="QC Pro Tips at a Glance" />

          <p className="text-xl text-gray-600 mb-8">
            I&apos;ve been on both sides of the QC table. I&apos;ve inspected 10,000+ pairs in our own
            factory. And I&apos;ve watched buyers — some veterans, some first-timers — inspect our
            production. The difference is night and day. A pro walks in, spends 15 minutes, and catches
            things the rookie misses in two hours. The difference isn&apos;t skill. It&apos;s system.
            Here&apos;s the system.
          </p>

          <h2 id="golden-sample" className="text-3xl font-bold mt-16 mb-6">The Golden Sample: Your Most Powerful QC Tool</h2>

          <p>
            If you take one thing from this article, take this: get a golden sample. Not a photo. Not
            a spec sheet. A physical, sealed, signed pair of sunglasses that represents exactly what
            you expect to receive.
          </p>

          <p>
            Here&apos;s how a golden sample works in practice. Before production, the factory produces
            3-5 pre-production samples using the actual materials and molds that will be used for your
            order. You inspect them. You approve ONE pair. That pair goes into a tamper-evident bag.
            You sign across the seal. The factory manager signs across the seal. You take a photo of
            the sealed bag with both signatures visible. That photo goes into your purchase order file.
          </p>

          <p>
            Three months later, when your 2,000 pairs arrive and the temple finish looks slightly
            different from what you remember, you don&apos;t have an argument. You have a reference.
            You open the golden sample, hold it next to a production pair under the same light, and
            suddenly &ldquo;it looks different to me&rdquo; becomes &ldquo;the production pair has 40%
            less gloss than the approved sample.&rdquo; That&apos;s not a feeling. That&apos;s a
            fact. And factories respect facts.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8">
            <h3 className="font-bold text-lg mb-2 text-amber-800">⚠️ The Most Common Golden Sample Mistake</h3>
            <p className="text-amber-900">
              Buyers often approve a hand-made sample that looks perfect — then wonder why mass production
              doesn&apos;t match. A pre-production sample MUST be made using the actual production mold
              and assembly line, not by the factory&apos;s best craftsman working on one pair for three hours.
              If the factory says &ldquo;we&apos;ll make it by hand for now, the mold isn&apos;t ready,&rdquo;
              tell them you&apos;ll wait for the mold. I cannot stress this enough: a hand-made golden
              sample is worse than no golden sample, because it sets an expectation production cannot meet.
            </p>
          </div>

          <p>
            I keep a shelf in our office with sealed golden samples from every major order we&apos;ve
            produced for the last five years. It has settled exactly zero disputes — because the
            existence of the shelf prevents disputes from happening in the first place. The factory
            knows the standard. The buyer knows the standard. End of story.
          </p>

          <h2 id="contract-language" className="text-3xl font-bold mt-16 mb-6">QC Contract Language That Actually Works</h2>

          <p>
            Most purchase orders have one line about quality: &ldquo;Products must meet buyer&apos;s
            quality standards.&rdquo; That line is meaningless. Whose standards? Defined how? With
            what consequences?
          </p>

          <p>
            Here is the QC clause I use in my own purchase orders — and I tell every buyer I work
            with to use something similar:
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8 font-mono text-sm">
            <p className="mb-2"><strong>Quality Control Terms:</strong></p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Golden Sample (S/N: ____) sealed and signed by both parties on ____ serves as the binding quality benchmark for this order.</li>
              <li>Inspection Standard: AQL 2.5 for Major defects, AQL 4.0 for Minor defects, AQL 0 (zero tolerance) for Critical defects, per ANSI/ASQ Z1.4-2008 sampling tables.</li>
              <li>Buyer reserves the right to conduct in-line inspection during production and pre-shipment inspection at factory premises, with or without a third-party inspector.</li>
              <li>If pre-shipment inspection fails, factory has 10 business days to rework and present for re-inspection. Re-inspection costs are borne by the factory.</li>
              <li>If re-inspected batch fails, buyer may cancel the order with full refund of deposit within 15 business days.</li>
              <li>Defect definitions per attached Defect Classification Table (Appendix A).</li>
            </ol>
          </div>

          <p>
            Notice what this does: it defines everything. What &ldquo;defect&rdquo; means. What &ldquo;fail&rdquo;
            means. What happens next. Who pays. When you get your money back. There is zero ambiguity.
            If a factory pushes back on these terms, ask yourself why. A factory with good internal QC
            will sign this without blinking because their reject rate is already below AQL thresholds.
          </p>

          <h2 id="defect-classification" className="text-3xl font-bold mt-16 mb-6">Build Your Own Defect Classification System</h2>

          <p>
            Every buyer should have a written defect classification table. Not in your head — on paper,
            attached to your purchase order. Here&apos;s why: without it, the factory decides what
            &ldquo;defective&rdquo; means. And their definition is always more generous than yours.
          </p>

          <p>Here&apos;s the framework I recommend, built from 15 years of dispute resolution:</p>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left">Classification</th>
                  <th className="px-6 py-4 text-left">Definition</th>
                  <th className="px-6 py-4 text-left">AQL Level</th>
                  <th className="px-6 py-4 text-left">Examples</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-red-50">
                  <td className="px-6 py-4 font-bold text-red-700">Critical</td>
                  <td className="px-6 py-4">Makes the product unsafe, illegal, or completely unusable</td>
                  <td className="px-6 py-4 font-bold">0</td>
                  <td className="px-6 py-4">Sharp edges that cut skin, shattered lens, no UV protection despite UV400 claim, wrong lens prescription, toxic materials</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-bold text-amber-700">Major</td>
                  <td className="px-6 py-4">Significantly reduces usability, appearance, or saleability</td>
                  <td className="px-6 py-4 font-bold">2.5</td>
                  <td className="px-6 py-4">Lens distortion, broken/missing hinge screw, frame asymmetry &gt;2mm, incorrect logo, lens falls out, temple doesn&apos;t close</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-bold text-blue-700">Minor</td>
                  <td className="px-6 py-4">Slight cosmetic issue; product is usable and saleable</td>
                  <td className="px-6 py-4 font-bold">4.0</td>
                  <td className="px-6 py-4">Fine surface scratch &lt;5mm, slight color shade variation within batch, minor polish residue, temple tension slightly uneven but functional</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            The trick is that most buyers treat everything as &ldquo;defective&rdquo; without
            classification. Then the factory argues &ldquo;that&apos;s just a minor cosmetic thing.&rdquo;
            By defining classifications in advance, you remove the argument. &ldquo;Per Appendix A,
            lens distortion is a Major defect. We found 4 Major defects in a sample of 80. AQL 2.5
            allows 5.&rdquo; That conversation lasts 30 seconds instead of 3 days.
          </p>

          <h2 id="hidden-defects" className="text-3xl font-bold mt-16 mb-6">5 Defects Most Buyers Never Catch</h2>

          <p>
            These are the defects that survive basic visual inspection and show up in customer reviews
            3 months later. The pros catch them before shipping.
          </p>

          <h3>1. Inconsistent Lens Tint Between Pairs</h3>
          <p>
            You check one pair. Lenses look good. What you don&apos;t check: whether pair #1 and
            pair #50 have the exact same tint density. Dip-dyed lenses can vary by 5-10% in tint
            darkness within a batch. If a customer buys two pairs for family members and they look
            different, you get a complaint. <strong>Pro move:</strong> lay out 10 pairs on a white
            surface under even light and scan for tint variation. Your eye can detect 3% variation
            side by side.
          </p>

          <h3>2. Micro-Cracks at Hinge Insertion Points</h3>
          <p>
            Injected frames (TR90, polycarbonate) can develop micro-fractures around the metal hinge
            insert during the cooling process. They&apos;re invisible to the naked eye on a quick
            glance. <strong>Pro move:</strong> flex each temple outward 15-20° and inspect the hinge
            area under a 10x loupe or your phone camera at 3x zoom. Hairline cracks get worse every
            time the customer opens the temples.
          </p>

          <h3>3. Coating Adhesion Failure (Delayed)</h3>
          <p>
            Mirror coatings and AR coatings can look perfect at inspection and start peeling after
            2-3 months of use. <strong>Pro move:</strong> the tape test. Apply clear Scotch tape to
            the coated surface, press firmly, peel off at a 45° angle. Any coating transfer = fail.
            This is an ASTM standard test that takes 10 seconds per pair. For more on coating types
            and their durability profiles, see our{' '}
            <Link href="/blog/sunglasses-coating-guide" className="text-primary-600 hover:underline">
              sunglasses coating guide
            </Link>.
          </p>

          <h3>4. Lens Pop-Out Under Flex</h3>
          <p>
            Lenses look seated correctly at rest. What happens when someone sits on them? (It happens
            more than you&apos;d think.) <strong>Pro move:</strong> hold the frame in both hands and
            twist gently — about 5-10° of torsional flex. If the lens edge pops out of the groove,
            the lens is slightly undersized or the frame groove is too shallow. This is a Major defect.
          </p>

          <h3>5. Nose Pad Weld Failure (Metal Frames)</h3>
          <p>
            On metal frames, nose pads are spot-welded to the frame front. A cold weld looks fine
            initially but snaps after 3-6 months of wear. <strong>Pro move:</strong> apply gentle
            lateral pressure to each nose pad — about the force of adjusting them on your face. If
            there&apos;s any movement, the weld is cold. Reject. This is the #1 failure point on
            metal frames after 6 months.
          </p>

          <h2 id="remote-qc" className="text-3xl font-bold mt-16 mb-6">How to QC Remotely (Without Flying to China)</h2>

          <p>
            Not everyone can spend $2,000 on a plane ticket to spend two days at a factory. I get it.
            But remote QC done wrong is worse than no QC — it gives you false confidence. Here&apos;s
            how to do it right:
          </p>

          <h3>The Three-Layer Remote QC System</h3>

          <p><strong>Layer 1: Third-Party Inspection (Non-Negotiable)</strong></p>
          <p>
            You need boots on the ground. Companies like QIMA, SGS, Bureau Veritas, and Intertek all
            have inspectors in every major manufacturing hub in China. A standard pre-shipment inspection
            costs $200-400 and takes about 4 hours. For that money, you get: a trained inspector spending
            half a day at the factory, a statistical sample inspected against your specs, a detailed
            report with photos of every defect found, and a pass/fail recommendation.
          </p>

          <p>
            But here&apos;s what most buyers get wrong: they send the factory&apos;s own spec sheet
            and say &ldquo;check against this.&rdquo; That&apos;s like handing the student the answer
            key before the test. Instead, send the inspector your OWN checklist — the specific things
            YOU care about, written in plain English. &ldquo;Check that the logo on the left temple
            is exactly 12mm from the hinge, not 10mm or 14mm.&rdquo; &ldquo;Hold lenses up to
            printed text at 30cm and photograph the result.&rdquo; &ldquo;Open and close each temple
            20 times and note any change in tension.&rdquo;
          </p>

          <p><strong>Layer 2: Video Call Walkthrough (Your Eyes on the Floor)</strong></p>
          <p>
            This is the layer most buyers skip, and it&apos;s the one that catches the most. A 15-minute
            WhatsApp video call where the factory walks you through YOUR batch — not the showroom, not
            the samples, YOUR cartons with YOUR labels. Ask them to: hold up 10 random pairs to the
            camera, show the lenses against text, flex a hinge, place a pair on a flat surface to
            check symmetry. Do this live, not recorded, so they can&apos;t stage it.
          </p>

          <p>
            One buyer I work with in Australia does this for every order over $5,000. He&apos;s caught
            issues three times — once, the factory had used a different shade of tortoise acetate than
            the approved sample. He spotted it on video in 30 seconds. Without the call, he would
            have discovered it when 500 pairs arrived in Sydney.
          </p>

          <p><strong>Layer 3: Pre-Shipment Photo Package</strong></p>
          <p>
            Require 20+ high-resolution photos of randomly selected pairs from your batch. Not catalog
            photos. Not the factory&apos;s &ldquo;best&rdquo; pairs. Random. Ask them to number each
            pair with a sticky note visible in the photo so you know they didn&apos;t just photograph
            the same pair from different angles.
          </p>

          <p>
            Total cost for all three layers: about $400-600. Total cost of a bad batch making it to
            your warehouse: thousands to tens of thousands. See also our{' '}
            <Link href="/blog/import-sunglasses-from-china" className="text-primary-600 hover:underline">
              import from China guide
            </Link>{' '}
            for the full logistics picture from factory to your door.
          </p>

          <h2 id="when-to-reject" className="text-3xl font-bold mt-16 mb-6">When to Reject a Batch — and When to Accept It</h2>

          <p>
            This is the hardest judgment call in QC, and nobody teaches it. After 15 years, here&apos;s
            my framework:
          </p>

          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-bold text-lg text-green-800 mb-2">✅ Accept the batch when:</h3>
              <ul className="space-y-2 text-green-900">
                <li>Defects are within AQL limits AND are all Minor classification</li>
                <li>You can sell the defective units at a slight discount (off-price, sample sale) and still make margin</li>
                <li>The delay from rework would cost more (lost season, missed trade show) than the cost of accepting minor defects</li>
                <li>You&apos;re 80%+ confident your customers won&apos;t notice or care about the specific defect</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="font-bold text-lg text-red-800 mb-2">🔴 Reject the batch when:</h3>
              <ul className="space-y-2 text-red-900">
                <li>Any Critical defect is found — zero tolerance means zero tolerance</li>
                <li>Major defect count exceeds AQL 2.5 threshold for the sample size</li>
                <li>The defect will get worse over time (hinge issues, coating adhesion, weld quality)</li>
                <li>You would not personally put the defective pair on your own face and wear it in public</li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h3 className="font-bold text-lg text-amber-800 mb-2">🟡 Negotiate (price adjustment) when:</h3>
              <ul className="space-y-2 text-amber-900">
                <li>Defects are Minor and slightly above AQL 4.0 but the product is still clearly saleable</li>
                <li>The rework timeline would cause you to miss a hard deadline (trade show, holiday season)</li>
                <li>You can negotiate a 5-15% discount that covers your expected increase in returns/complaints</li>
              </ul>
            </div>
          </div>

          <p className="mt-8">
            One last piece of hard-won advice: never reject a batch out of anger. Sleep on it. A
            rejection resets the clock. Rework plus re-inspection typically takes 14-21 days. If
            you&apos;re in July and your retail season starts in August, that delay might be more
            expensive than accepting 3% minor defects and negotiating a discount. Do the math
            before you send the rejection email.
          </p>

          <p>
            For a complete checklist of what to inspect on every production run, see our{' '}
            <Link href="/blog/sunglasses-quality-control" className="text-primary-600 hover:underline">
              factory inspection checklist
            </Link>{' '}
            — it covers lens testing, frame inspection, hinge checks, and AQL sampling tables in detail.
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
            <h2 className="text-3xl font-bold mb-4">Want Us to Walk You Through Our QC Process?</h2>
            <p className="text-xl mb-6 opacity-90">
              Book a 20-minute factory video tour. We&apos;ll show you exactly how we QC every
              production batch — live, unscripted, on your screen. See it before you order it.
            </p>
            <Link
              href="/contact/"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Schedule a Factory QC Tour
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">More From the Factory Floor</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/sunglasses-quality-control" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Sunglasses QC: Complete Inspection Checklist</h3>
                <p className="text-gray-600 text-sm">The checklist version — every lens, frame, hinge, and packaging check, with AQL tables.</p>
              </Link>
              <Link href="/blog/fda-ce-certification-sunglasses" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">FDA &amp; CE Certification for Sunglasses</h3>
                <p className="text-gray-600 text-sm">Compliance testing goes hand in hand with QC. Here&apos;s the certification framework.</p>
              </Link>
              <Link href="/blog/negotiate-chinese-manufacturers" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">How to Negotiate with Chinese Manufacturers</h3>
                <p className="text-gray-600 text-sm">QC terms are one piece of the negotiation puzzle. Here&apos;s the full strategy.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
