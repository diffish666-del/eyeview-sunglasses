import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sunglasses Quality Control: Factory Inspection Checklist',
  description: 'A factory owner shares the complete sunglasses QC checklist — lens testing, frame inspection, hinge checks, UV verification, and what to look for before approving production.',
  keywords: 'sunglasses quality control, eyewear inspection, sunglasses testing standards, QC checklist sunglasses, sunglasses defects',
  alternates: {
    canonical: '/blog/sunglasses-quality-control',
    languages: {
      'en': '/blog/sunglasses-quality-control',
      'es': '/es/blog/sunglasses-quality-control',
    },
  },
}

export default function SunglassesQualityControlPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Sunglasses Quality Control: Factory Inspection Checklist",
          "datePublished": "2026-05-04",
          "dateModified": "2026-05-04",
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "A factory owner shares the complete sunglasses QC checklist — from lens testing to packaging inspection.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/blog/sunglasses-quality-control" }
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What should I check when inspecting sunglasses quality?",
              "acceptedAnswer": { "@type": "Answer", "text": "Key quality checks: lens clarity (no distortion, bubbles, or scratches), UV400 protection verification, hinge tension and smoothness, frame symmetry, color consistency across the batch, logo placement accuracy, nose pad alignment, and overall finish quality. Hold each pair up to text — any waviness or distortion in the text indicates poor optical quality." }
            },
            {
              "@type": "Question",
              "name": "What is AQL inspection for sunglasses?",
              "acceptedAnswer": { "@type": "Answer", "text": "AQL (Acceptable Quality Level) is a statistical sampling method used in quality control. For sunglasses, the standard is AQL 2.5 for major defects (functional issues like lens distortion, broken hinges) and AQL 4.0 for minor defects (cosmetic issues like small scratches, slight color variation). This means for a batch of 1,000 pairs, you'd inspect about 80 randomly selected pairs and accept the batch if defects fall below the AQL threshold." }
            },
            {
              "@type": "Question",
              "name": "How much does third-party sunglasses inspection cost?",
              "acceptedAnswer": { "@type": "Answer", "text": "A standard pre-shipment inspection by companies like SGS, Bureau Veritas, or QIMA costs $200-$400 per inspection (one man-day). This covers a statistical sample of your order based on AQL standards. Full-day inspections for larger orders cost $300-$600. It's one of the best investments you can make — catching quality issues before shipping saves 10-50x the inspection cost." }
            },
            {
              "@type": "Question",
              "name": "What are the most common sunglasses defects?",
              "acceptedAnswer": { "@type": "Answer", "text": "The top 10 defects we catch in QC: 1) Lens distortion or optical aberrations, 2) Uneven hinge tension (one arm tighter than the other), 3) Frame asymmetry (one side higher than the other), 4) Scratches on lenses or frames, 5) Color inconsistency between pairs, 6) Logo misalignment or poor print quality, 7) Loose screws, 8) Nose pad misalignment, 9) Poor polishing (rough edges or surfaces), 10) Incorrect lens tint or coating." }
            }
          ]
        })}} />

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Manufacturing</span>
            <span>May 4, 2026</span>
            <span>•</span>
            <span>14 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sunglasses Quality Control: Factory Inspection Checklist
          </h1>
          <p className="text-xl text-gray-600">
            I&apos;m going to share the exact QC checklist our inspectors use on every production run. 
            This is the checklist that keeps our defect rate below 1%. Use it whether you&apos;re 
            inspecting at the factory or receiving goods at your warehouse.
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
            <li><a href="#why-qc" className="text-primary-600 hover:underline">Why QC Is Non-Negotiable</a></li>
            <li><a href="#lens-inspection" className="text-primary-600 hover:underline">Lens Inspection Checklist</a></li>
            <li><a href="#frame-inspection" className="text-primary-600 hover:underline">Frame Inspection Checklist</a></li>
            <li><a href="#hinge-inspection" className="text-primary-600 hover:underline">Hinge &amp; Hardware Inspection</a></li>
            <li><a href="#finish-inspection" className="text-primary-600 hover:underline">Finish &amp; Cosmetic Inspection</a></li>
            <li><a href="#functional-test" className="text-primary-600 hover:underline">Functional Testing</a></li>
            <li><a href="#packaging-inspection" className="text-primary-600 hover:underline">Packaging Inspection</a></li>
            <li><a href="#aql" className="text-primary-600 hover:underline">AQL Sampling: How Many to Inspect</a></li>
            <li><a href="#third-party" className="text-primary-600 hover:underline">Third-Party Inspection Services</a></li>
            <li><a href="#common-defects" className="text-primary-600 hover:underline">Top 10 Most Common Defects</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">FAQ</a></li>
          </ul>
        </nav>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            A client once told me, &quot;Jacky, QC is boring.&quot; I said, &quot;So is dealing with 
            200 customer complaints and a 15% return rate.&quot; Quality control is the least exciting 
            part of the sunglasses business and the most important. Here&apos;s the system that works.
          </p>

          <h2 id="why-qc" className="text-3xl font-bold mt-16 mb-6">Why QC Is Non-Negotiable</h2>
          <p>
            Every defective pair that reaches a customer costs you:
          </p>
          <ul>
            <li><strong>$10-$15 in direct costs:</strong> Return shipping, replacement product, customer service time</li>
            <li><strong>1 negative review</strong> that scares away 5-10 potential customers</li>
            <li><strong>Lost customer lifetime value:</strong> A customer who gets a bad pair rarely comes back. That&apos;s $100-$300 in future purchases gone.</li>
          </ul>
          <p>
            Compare that to the cost of proper QC: $200-$400 for a third-party inspection, or $0 if 
            your factory does it right. The math is obvious.
          </p>

          <h2 id="lens-inspection" className="text-3xl font-bold mt-16 mb-6">Lens Inspection Checklist</h2>
          <p>
            Lenses are the most critical component. A beautiful frame with bad lenses is worse than 
            an ugly frame with good lenses.
          </p>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-6 my-8">
            <h3 className="font-bold text-lg mb-4">✅ Lens Quality Checklist</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Optical clarity:</strong> Hold lenses up to text (newspaper, phone screen). Text should be sharp with zero distortion, waviness, or magnification. This is the single most important test.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Surface quality:</strong> No scratches, bubbles, inclusions, or specks visible under normal inspection distance (30cm). Check both front and back surfaces.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Color consistency:</strong> Both lenses should be identical in tint. Hold them up to a white surface side by side. Even slight differences are noticeable when worn.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Polarization check:</strong> If polarized, verify with a phone screen — rotating the sunglasses 90° should darken/lighten the screen. Both lenses should react identically. See our{' '}
                  <Link href="/blog/uv400-vs-polarized" className="text-primary-600 hover:underline">UV400 vs polarized guide</Link>{' '}
                  for more on polarization testing.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>UV protection:</strong> Verify UV400 test certificate matches the batch. If possible, spot-check with a UV meter.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Coating quality:</strong> Check mirror coatings for evenness, anti-reflective coatings for proper application, and hydrophobic coatings by dripping water (should bead and roll off). More on coatings in our{' '}
                  <Link href="/blog/sunglasses-coating-guide" className="text-primary-600 hover:underline">coating guide</Link>.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Lens fit:</strong> Lenses should sit flush in the frame with no gaps, rotation, or movement. Press gently — there should be zero play.</div>
              </li>
            </ul>
          </div>

          <h2 id="frame-inspection" className="text-3xl font-bold mt-16 mb-6">Frame Inspection Checklist</h2>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-6 my-8">
            <h3 className="font-bold text-lg mb-4">✅ Frame Quality Checklist</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Symmetry:</strong> Place sunglasses on a flat surface, front-down. Both temples should touch the surface evenly. No wobble, no tilt. The frame front should be level.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Color consistency:</strong> Compare 5-10 pairs from the same batch. Color should be uniform. Acetate can vary slightly between sheets — acceptable within one shade.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Surface finish:</strong> Run your finger along all surfaces. Should be smooth with no rough spots, sharp edges, or unfinished areas. Pay special attention to the inner rim where skin contact occurs.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Weight:</strong> Weigh 5-10 pairs. Weight should be consistent (±2g for acetate, ±1g for TR90). Significant variation indicates material inconsistency.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Dimensions:</strong> Measure lens width, bridge width, and temple length. Should match specifications within ±1mm.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Material quality:</strong> For acetate, check for bubbles or inclusions in the material. For metal, check for pitting or discoloration. For TR90, check for flow lines or sink marks.</div>
              </li>
            </ul>
          </div>

          <h2 id="hinge-inspection" className="text-3xl font-bold mt-16 mb-6">Hinge &amp; Hardware Inspection</h2>
          <p>
            Hinges are the #1 failure point in sunglasses. They&apos;re also the #1 complaint reason 
            in customer reviews. Get this right.
          </p>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-6 my-8">
            <h3 className="font-bold text-lg mb-4">✅ Hinge &amp; Hardware Checklist</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Hinge tension:</strong> Open and close temples 10 times. Movement should be smooth but firm — not floppy, not stiff. Both sides should feel identical.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Temple spring (if spring hinges):</strong> Temples should flex outward 15-20° beyond the open position and spring back smoothly. No clicking, grinding, or catching.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Screw tightness:</strong> All screws should be tight. Use a jeweler&apos;s screwdriver to check — they shouldn&apos;t turn easily. Thread-locking compound should be applied.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Hinge alignment:</strong> When closed, temples should rest parallel to each other and parallel to the frame front.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Metal finish:</strong> Check hinge and screw finish for consistency — no rust, discoloration, or plating defects.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Nose pads:</strong> If adjustable, check that they move smoothly and hold position. If fixed, check alignment and comfort.</div>
              </li>
            </ul>
          </div>

          <h2 id="finish-inspection" className="text-3xl font-bold mt-16 mb-6">Finish &amp; Cosmetic Inspection</h2>

          <div className="bg-white border-2 border-gray-200 rounded-xl p-6 my-8">
            <h3 className="font-bold text-lg mb-4">✅ Finish Checklist</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Logo placement:</strong> Position, size, and clarity should match the approved sample exactly. Check both temples, front frame, and any lens logos.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Logo method quality:</strong> Laser engraving should be clean and consistent depth. Pad printing should be sharp with no bleeding. Metal logos should be securely attached.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Polish quality:</strong> Acetate frames should have a consistent gloss (or matte) finish. No dull spots, over-polished areas, or polish residue in crevices.</div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold mt-1">☐</span>
                <div><strong>Paint/coating (if applicable):</strong> Even application, no drips, no thin spots, no peeling. Adhesion test: apply and remove tape — no coating should come off.</div>
              </li>
            </ul>
          </div>

          <h2 id="functional-test" className="text-3xl font-bold mt-16 mb-6">Functional Testing</h2>
          <p>Beyond visual inspection, these functional tests catch issues that look-and-feel checks miss:</p>
          <ul>
            <li><strong>Wear test:</strong> Put them on your face. Do they sit level? Is the weight balanced? Do they pinch behind the ears? Are the nose pads comfortable? 30 seconds of wearing tells you more than 5 minutes of visual inspection.</li>
            <li><strong>Drop test:</strong> Drop from table height (75cm) onto a hard surface. They should survive without breaking, cracking, or losing lenses. This simulates real-world accidents.</li>
            <li><strong>Flex test:</strong> Gently flex the frame front — it should have slight give and return to shape. Rigid = brittle. Too flexible = cheap material.</li>
            <li><strong>Temple retention:</strong> Hold the frame and shake gently. Temples should stay open. If they swing closed easily, hinge tension is too loose.</li>
          </ul>

          <h2 id="packaging-inspection" className="text-3xl font-bold mt-16 mb-6">Packaging Inspection</h2>
          <ul>
            <li>☐ Case closes properly and protects sunglasses</li>
            <li>☐ Cleaning cloth is clean, correctly branded, right size</li>
            <li>☐ Hang tags and labels have correct information (UV, CE, brand, model)</li>
            <li>☐ Box/pouch matches approved design — colors, text, barcodes</li>
            <li>☐ Sunglasses fit properly in case without excessive movement</li>
            <li>☐ No damage to packaging from handling</li>
            <li>☐ Correct quantity packed per carton</li>
          </ul>

          <h2 id="aql" className="text-3xl font-bold mt-16 mb-6">AQL Sampling: How Many to Inspect</h2>
          <p>
            You can&apos;t inspect every single pair (unless your order is very small). AQL 
            (Acceptable Quality Level) tells you how many to sample:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left">Order Size</th>
                  <th className="px-6 py-4 text-left">Sample Size (AQL 2.5)</th>
                  <th className="px-6 py-4 text-left">Max Major Defects</th>
                  <th className="px-6 py-4 text-left">Max Minor Defects</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4">50-90</td><td className="px-6 py-4">13</td><td className="px-6 py-4">1</td><td className="px-6 py-4">2</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">91-150</td><td className="px-6 py-4">20</td><td className="px-6 py-4">1</td><td className="px-6 py-4">3</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">151-280</td><td className="px-6 py-4">32</td><td className="px-6 py-4">2</td><td className="px-6 py-4">5</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">281-500</td><td className="px-6 py-4">50</td><td className="px-6 py-4">3</td><td className="px-6 py-4">7</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">501-1,200</td><td className="px-6 py-4">80</td><td className="px-6 py-4">5</td><td className="px-6 py-4">10</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">1,201-3,200</td><td className="px-6 py-4">125</td><td className="px-6 py-4">7</td><td className="px-6 py-4">14</td></tr>
              </tbody>
            </table>
          </div>

          <h2 id="third-party" className="text-3xl font-bold mt-16 mb-6">Third-Party Inspection Services</h2>
          <p>
            For orders over $3,000, I strongly recommend a third-party pre-shipment inspection. 
            Yes, even from our factory. Independent verification protects both you and us.
          </p>
          <ul>
            <li><strong>SGS:</strong> $250-$400/inspection. The biggest name in QC. Widely trusted.</li>
            <li><strong>Bureau Veritas:</strong> $200-$350/inspection. Strong in Asia.</li>
            <li><strong>QIMA (formerly AsiaInspection):</strong> $199-$350/inspection. Good online booking system, fast reports.</li>
            <li><strong>Intertek:</strong> $250-$400/inspection. Strong optical testing capabilities.</li>
          </ul>
          <p>
            For your first order from any new factory, this is the single best $200-$400 you can spend. 
            It&apos;s cheaper than one batch of defective sunglasses. For ongoing compliance, see our{' '}
            <Link href="/blog/fda-ce-certification-sunglasses" className="text-primary-600 hover:underline">certification guide</Link>.
          </p>

          <h2 id="common-defects" className="text-3xl font-bold mt-16 mb-6">Top 10 Most Common Defects</h2>
          <p>
            Based on our internal QC data from the past 3 years, here are the defects we catch most often:
          </p>
          <ol>
            <li className="mb-3"><strong>Lens distortion (22% of defects):</strong> Optical waviness visible when looking through the lens. Caused by uneven lens thickness or poor molding. This is a MAJOR defect — automatic reject.</li>
            <li className="mb-3"><strong>Uneven hinge tension (18%):</strong> One temple tighter or looser than the other. Caused by inconsistent screw torque or hinge component variation. Major defect.</li>
            <li className="mb-3"><strong>Frame asymmetry (14%):</strong> One side sits higher than the other when placed on a flat surface. Caused by warping during cooling (acetate) or inconsistent molding (TR90).</li>
            <li className="mb-3"><strong>Surface scratches (12%):</strong> Fine scratches on lens or frame surface from handling during production. Minor if superficial, major if deep.</li>
            <li className="mb-3"><strong>Color inconsistency (8%):</strong> Slight shade variations between pairs in the same batch. Common with acetate due to natural material variation. Minor defect unless obvious.</li>
            <li className="mb-3"><strong>Logo defects (7%):</strong> Misaligned, smudged, or incomplete logos. Usually from pad printing issues. Ranges from minor to major depending on severity.</li>
            <li className="mb-3"><strong>Loose screws (6%):</strong> Screws that aren&apos;t properly torqued or lack thread-locking compound. Major defect — they&apos;ll fall out in use.</li>
            <li className="mb-3"><strong>Nose pad issues (5%):</strong> Misaligned, loose, or uncomfortable nose pads. Minor to major depending on impact on fit.</li>
            <li className="mb-3"><strong>Poor polishing (5%):</strong> Rough spots, uneven gloss, or polish residue. Minor defect but affects perceived quality.</li>
            <li className="mb-3"><strong>Wrong specs (3%):</strong> Incorrect lens color, wrong frame color, or wrong size. Usually caught early but devastating if missed.</li>
          </ol>

          <h2 id="faq" className="text-3xl font-bold mt-16 mb-6">FAQ</h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">What should I check when inspecting sunglasses quality?</h3>
              <p className="text-gray-600">
                Lens clarity (hold up to text — zero distortion), UV400 verification, hinge tension 
                and smoothness, frame symmetry, color consistency, logo accuracy, nose pad alignment, 
                and overall finish. The text-through-lens test is the most important single check.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">What is AQL inspection for sunglasses?</h3>
              <p className="text-gray-600">
                AQL (Acceptable Quality Level) is statistical sampling. Standard: AQL 2.5 for major 
                defects, AQL 4.0 for minor defects. For 1,000 pairs, you&apos;d inspect ~80 randomly 
                selected pairs and accept the batch if defects fall below thresholds.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">How much does third-party sunglasses inspection cost?</h3>
              <p className="text-gray-600">
                $200-$400 per inspection (one man-day) from companies like SGS, Bureau Veritas, or 
                QIMA. The best $200-$400 you can spend — catching issues before shipping saves 
                10-50x the inspection cost.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">What are the most common sunglasses defects?</h3>
              <p className="text-gray-600">
                Top 5: lens distortion (22%), uneven hinge tension (18%), frame asymmetry (14%), 
                surface scratches (12%), and color inconsistency (8%). Lens distortion and hinge 
                problems are the most critical — they directly affect the user experience.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Want to See Our QC Process in Action?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We can walk you through our factory QC process on a video call, or send you a detailed 
              QC report from a recent production run. Quality isn&apos;t just a claim — it&apos;s 
              something we can show you.
            </p>
            <Link href="/contact" className="btn-primary">
              Request a Factory QC Tour
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">More From the Factory Floor</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/fda-ce-certification-sunglasses" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">FDA &amp; CE Certification Guide</h3>
                <p className="text-gray-600 text-sm">Compliance testing is part of quality control — here&apos;s what&apos;s required.</p>
              </Link>
              <Link href="/blog/find-sunglasses-manufacturer" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">How to Find a Reliable Manufacturer</h3>
                <p className="text-gray-600 text-sm">QC capabilities are a key factor in choosing the right factory.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
