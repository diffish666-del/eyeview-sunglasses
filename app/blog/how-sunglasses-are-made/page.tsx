import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Sunglasses Are Made: Inside a Chinese Factory | Manufacturing Process Guide',
  description: 'Step-by-step walkthrough of how sunglasses are manufactured — from raw materials to finished product. See the real process inside a factory that produces 1M+ pairs yearly.',
  keywords: 'how sunglasses are made, sunglasses manufacturing process, how are sunglasses manufactured, sunglasses factory process, eyewear production, sunglass manufacturing steps',
  alternates: { canonical: '/blog/how-sunglasses-are-made', languages: { 'en': '/blog/how-sunglasses-are-made' } },
}

export default function HowSunglassesAreMade() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org","@type": "Article",
          "headline": "How Sunglasses Are Made: Inside a Chinese Factory",
          "datePublished": "2026-07-11","dateModified": "2026-07-11",
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Step-by-step walkthrough of how sunglasses are manufactured.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/blog/how-sunglasses-are-made" }
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org","@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "How are sunglasses manufactured?", "acceptedAnswer": { "@type": "Answer", "text": "Sunglasses manufacturing involves 7 main steps: 1) Material preparation (acetate sheets, metal wire, or plastic pellets), 2) Frame cutting/shaping via CNC or injection molding, 3) Temple and bridge assembly, 4) Tumbling and polishing, 5) Lens cutting and coating, 6) Quality inspection (UV testing, hinge cycles, alignment), 7) Packaging and shipping. The entire process from raw material to finished product takes 15-25 days for standard orders." } },
            { "@type": "Question", "name": "What materials are used to make sunglasses?", "acceptedAnswer": { "@type": "Answer", "text": "Sunglass frames are made from: acetate (plant-based plastic, premium feel), metal alloys (stainless steel, titanium, aluminum), TR90 nylon (lightweight, flexible), polycarbonate (impact-resistant), and eco-materials (recycled ocean plastic, bamboo, bio-acetate). Lenses are typically polycarbonate or TAC (tri-acetate cellulose) with various coatings." } },
            { "@type": "Question", "name": "How long does it take to manufacture sunglasses?", "acceptedAnswer": { "@type": "Answer", "text": "Standard production time for custom sunglasses is 15-25 business days. This includes: 2-3 days for material preparation, 5-7 days for frame production, 2-3 days for lens cutting and mounting, 2-3 days for quality inspection, and 2-3 days for packaging. Rush orders can be completed in 10-15 days for an additional fee." } },
          ]
        })}} />

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          How Sunglasses Are Made: A Factory Tour From Raw Material to Finished Product
        </h1>

        <p className="text-lg text-gray-500 mb-8">Published July 11, 2026 · 8 min read · By Jacky Chen, EyeView Founder</p>

        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">

          <p>I have walked through my factory floor thousands of times. The smell of acetate being cut, the hum of CNC machines, the rhythmic clicking of hinge assembly — it never gets old. Here is exactly how a pair of sunglasses goes from raw material to the product your customer unboxes, step by step.</p>

          <h2>Step 1: Material Preparation — Choosing What Your Sunglasses Are Made Of</h2>

          <p>Every pair starts with a choice. The material determines the manufacturing process, the cost, and the final feel of the product:</p>

          <ul>
            <li><strong><Link href="/products/acetate/" className="text-primary-600 hover:underline">Acetate sheets</Link>:</strong> Large rectangular sheets (150cm × 70cm, 4-8mm thick) arrive from Italy or Japan. Each sheet becomes 30-40 frame fronts depending on the design. Acetate is CNC-cut and hand-polished — a process that takes skill and patience.</li>
            <li><strong>Metal wire:</strong> Stainless steel or titanium wire on spools. The wire is cut, bent, and welded into frame shapes. This is how <Link href="/products/aviator/" className="text-primary-600 hover:underline">aviators</Link> and other metal frames are made.</li>
            <li><strong>TR90/Plastic pellets:</strong> Tiny plastic granules (2-3mm) that get melted and injection-molded into <Link href="/products/tr90/" className="text-primary-600 hover:underline">TR90 sport frames</Link>. The pellets look like nothing, but 30 seconds in the injection machine and they become a sunglass frame.</li>
          </ul>

          <h2>Step 2: Frame Cutting — Where the Shape Takes Form</h2>

          <p>For <strong>acetate frames</strong>, a CNC machine cuts the frame front from the sheet. Think of it as a very precise cookie cutter — but instead of dough, it cuts through 6mm acetate with a tolerance of 0.1mm. Each frame front takes 8-12 minutes to cut depending on complexity. The machine runs 16 hours a day. At peak production, we cut 800-1,000 frame fronts daily.</p>

          <p>For <strong>metal frames</strong>, the process is different. Metal wire is fed into an automatic bending machine that shapes it into frame fronts and temples. The joints are micro-welded using laser precision. A single metal frame has 6-10 weld points — each one is stress-tested before continuing.</p>

          <p>For <strong>injection-molded frames</strong> (TR90, polycarbonate), melted plastic is shot into a steel mold under 80-120 tons of pressure. The mold opens, a robot arm removes the hot frame, and 20 seconds later the machine fires again. One injection molding machine produces 1,200-1,500 frame fronts per shift.</p>

          <h2>Step 3: Tumbling and Polishing — The Difference Between Cheap and Premium</h2>

          <p>This is where you can tell a $2 factory from a quality manufacturer. After cutting, acetate frames are rough and dull. They go into a tumbling barrel with wooden pegs and polishing compound. The barrel spins for 24-48 hours — yes, two full days — slowly wearing down every sharp edge and micro-scratch. Cheap factories skip this or rush it (8-12 hours). The result? Frames that feel sharp against your skin and look dull.</p>

          <p>After tumbling, skilled workers hand-polish each frame using buffing wheels with progressively finer compounds. This is 100% manual work. One experienced polisher can finish 80-100 frames per day. Their hands know what a properly polished acetate surface feels like — smooth as glass, not a hint of roughness.</p>

          <h2>Step 4: Lens Cutting and Coating</h2>

          <p>Lenses start as large polycarbonate or TAC (tri-acetate cellulose) blanks — essentially big circles of lens material. An automatic lens edger cuts them to the exact shape of your frame using diamond-grit grinding wheels. Water coolant prevents heat buildup that could warp the lens.</p>

          <p>After cutting, lenses go through their coating process:</p>
          <ul>
            <li><strong>UV400 coating:</strong> Blocks 99.9% of UVA/UVB. Applied via vacuum deposition.</li>
            <li><strong><Link href="/products/polarized/" className="text-primary-600 hover:underline">Polarized film</Link>:</strong> A 7-layer film sandwiched inside the lens that eliminates glare.</li>
            <li><strong>Mirror coating:</strong> Reflective surface applied via vapor deposition. Available in silver, blue, gold, green, pink.</li>
            <li><strong>Anti-scratch hard coat:</strong> Clear protective layer on both sides.</li>
            <li><strong><Link href="/products/blue-light/" className="text-primary-600 hover:underline">Blue light filter</Link>:</strong> Absorbs 30-40% of harmful blue light (380-500nm wavelength).</li>
          </ul>

          <h2>Step 5: Assembly — Putting It All Together</h2>

          <p>This is the most labor-intensive step. Each pair requires 15-20 assembly operations:</p>

          <ol>
            <li>Hinge insertion into frame front (press-fit or screwed)</li>
            <li>Temple attachment to hinges</li>
            <li>Spring mechanism insertion (for spring hinges)</li>
            <li>Nose pad welding (metal frames) or attachment (acetate)</li>
            <li>Lens mounting — pressed into frame with 0.05mm precision</li>
            <li>Logo engraving — laser or pad printing, depending on material</li>
            <li>Temple tip attachment</li>
            <li>Final adjustment — arms opened/closed 50+ times to ensure smooth movement</li>
          </ol>

          <p>A skilled assembly worker completes 120-150 pairs per day. Our assembly team of 35 workers handles 5,000+ pairs daily across all production lines.</p>

          <h2>Step 6: Quality Control — What Actually Gets Checked</h2>

          <p>This is the step clients ask about most — and the one that separates professional factories from amateurs. Our QC lab runs every batch through 6 tests:</p>

          <div className="bg-gray-50 rounded-xl p-6 my-8">
            <h3 className="text-lg font-bold mb-3">6-Point Quality Inspection</h3>
            <ol>
              <li><strong>UV transmission test:</strong> Spectrometer measures UV400 blocking. Must be ≥99.9%. Failed lenses are destroyed.</li>
              <li><strong>Impact resistance test:</strong> 16g steel ball dropped from 1.27m. Lens must not crack or dislodge.</li>
              <li><strong>Hinge cycle test:</strong> Machine opens/closes temples 10,000 times. Must maintain tension and alignment.</li>
              <li><strong>Dimensional verification:</strong> Digital caliper checks frame width, temple length, bridge width against CAD specs.</li>
              <li><strong>Lens clarity:</strong> Visual inspection under 500-lux light. Zero visible scratches, bubbles, or distortions allowed.</li>
              <li><strong>Frame alignment:</strong> Placed on flat surface. Both temples must touch simultaneously within 1mm tolerance.</li>
            </ol>
          </div>

          <h2>Step 7: Packaging and Shipping</h2>

          <p>Every pair gets: microfiber cleaning cloth → plastic polybag → branded case → outer carton. For export orders, each carton is labeled with country of origin, HS code, and quantity. Shipping labels are printed and verified against the packing list. A final photo is taken of every carton before it leaves — we call this the &quot;last look&quot; photo, and it goes to the client.</p>

          <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 my-8">
            <h3 className="text-lg font-bold text-primary-900 mb-2">See Our Factory in Action</h3>
            <p className="text-primary-700 mb-4">We produce 1M+ pairs annually across 5 production lines. Whether you need <Link href="/products/wayfarer/" className="text-primary-600 hover:underline font-medium">50 wayfarers</Link> or 50,000 custom OEM frames, the same QC standards apply to every order.</p>
            <Link href="/contact" className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-700 transition-colors">Request a Factory Tour or Sample</Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Related Guides</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/sunglasses-quality-control" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">Quality Control Standards</h3><p className="text-gray-600 text-sm">Deep dive into QC testing procedures and international standards.</p></Link>
              <Link href="/blog/frame-material-comparison" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"><h3 className="font-bold text-primary-600 mb-2">Frame Materials Comparison</h3><p className="text-gray-600 text-sm">Acetate vs TR90 vs Metal — which material is best for your brand?</p></Link>
            </div>
          </div>

        </div>
      </div>
    </article>
  )
}
