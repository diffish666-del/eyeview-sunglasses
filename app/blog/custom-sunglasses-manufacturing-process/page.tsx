import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'From Sketch to Sample: How Custom Sunglasses Are Manufactured in 4 Weeks',
  description: 'A factory owner walks you through the complete custom sunglasses manufacturing process — design review, mold making, material sourcing, assembly, QC, and shipping. Real timelines, real costs, no fluff.',
  keywords: ['custom sunglasses manufacturing', 'sunglasses factory process', 'OEM sunglasses timeline', 'how sunglasses are made in factory', 'sunglasses mold making', 'acetate sunglasses production', 'custom eyewear manufacturing', 'sunglasses sample development', '4 week sunglasses production', 'sunglasses factory China'],
  alternates: {
    canonical: '/blog/custom-sunglasses-manufacturing-process',
  },
};

const takeaways = [
  'A complete custom sunglasses production cycle — from receiving your sketch to shipping finished samples — takes 4 weeks in a well-organized Chinese factory, with each week dedicated to a distinct phase: design review & mold making, material sourcing & first samples, assembly & QC, and finishing & shipment prep',
  'Mold costs for custom acetate frames range from $300 to $800 per mold depending on complexity — this is the single biggest upfront cost in OEM sunglasses manufacturing, and skipping mold quality checks leads to frames that warp or crack at the temple hinge (the #1 failure mode in custom orders)',
  'Material sourcing is where rookie importers lose 1–2 weeks: acetate sheets take 5–7 days to arrive from the sheet supplier, metal components require separate vendors, and color matching without a Pantone reference adds at least 3 extra days of back-and-forth — always ship a physical color swatch with your design brief',
  'The assembly phase (Week 3) involves 12–15 separate quality checkpoints per pair — lens insertion pressure, temple tension, hinge alignment, screw torque, and frame symmetry are all measured with gauges, not eyeballed — and any pair that fails a gate goes back to rework or scrap',
  'Final QC in Week 4 is not one inspection but three: the factory\'s internal QC team, a spot check by the production supervisor, and (if booked) a third-party inspection before packaging — the difference between a 3% defect rate and a 0.5% defect rate is simply how many QC gates you pay for',
  'Shipping from Chinese factories to Western markets takes 3–30 days depending on method: air freight (3–7 days, $2–4/kg), sea freight (20–35 days, $0.30–0.80/kg), or rail to Europe (12–18 days, $1–1.50/kg) — and the biggest shipping mistake is not factoring in customs clearance time, which adds 2–5 days regardless of method',
];

const quickStats = [
  { label: 'Acetate Mold Cost (per mold)', value: '$300–800' },
  { label: 'QC Checkpoints per Pair', value: '12–15' },
  { label: 'Minimum OEM Order Quantity', value: '300–500 units' },
  { label: 'Air Freight to US/EU', value: '3–7 days' },
  { label: 'Sea Freight to US/EU', value: '20–35 days' },
];

const faqs = [
  {
    question: 'How long does it really take to manufacture custom sunglasses from scratch?',
    answer: 'At EyeView, the standard timeline is 4 weeks from sketch to finished sample. Week 1 is design review and mold making. Week 2 is material sourcing, color matching, and first assembly samples. Week 3 is full assembly with all QC gates. Week 4 is finishing, final QC, packaging, and shipment prep. Bulk production adds another 3–5 weeks after sample approval. Delays most commonly come from two things: the buyer not providing clear CAD files or color references, and the acetate sheet supplier running behind — both of which are preventable with good upfront communication.',
  },
  {
    question: 'What is the minimum order quantity for custom OEM sunglasses?',
    answer: 'For custom molds (your own frame design), the MOQ is typically 300–500 units per style and color. At 500 units × 3 colors, that is 1,500 pairs per style. Mold fees are separate — $300 to $800 per mold depending on part complexity. A typical acetate frame needs 2 molds (front frame + temple arms). For stock frames with custom branding (logo printing, packaging only), the MOQ drops to 100–200 units per style because no mold cost is involved. Most first-time brand owners start with 3–5 styles at 300 units each, which totals around 900–1,500 pairs — a realistic first order that balances per-unit cost with cash flow risk.',
  },
  {
    question: 'What materials can I choose for custom sunglasses frames?',
    answer: 'The three main materials are acetate, TR90, and metal (stainless steel or titanium). Acetate is the premium choice — hand-polished, rich colors, heavier feel. TR90 is lightweight, flexible, and excellent for sports or kids lines. Metal frames work well for minimalist designs and aviators. Each material has a different mold-making process and timeline: acetate takes 5–7 days for molds, TR90 molds are faster (3–5 days), and metal requires stamping dies rather than injection molds. We also work with bio-acetate, recycled nylon, and wood-composite for eco-friendly lines. The material decision is the first thing we lock down because it determines everything downstream — mold type, lens compatibility, hinge style, and even packaging weight.',
  },
  {
    question: 'How does quality control work during custom sunglasses production?',
    answer: 'QC happens in three layers. First, inline QC during production: every pair hits 12–15 checkpoints during assembly — lens insertion pressure tested with a force gauge, temple arm tension measured at opening angles, hinge screws torqued to spec, frame symmetry checked on alignment jigs. Second, end-of-line QC: a dedicated QC team inspects 100% of finished pairs under standardized lighting for scratches, color consistency, and lens clarity. Third, AQL sampling: if you have booked third-party inspection (SGS, Bureau Veritas), they pull a statistical sample based on your Acceptable Quality Level — typically AQL 2.5 for major defects and AQL 4.0 for minor defects. The factory\'s internal pass rate target is 98%+. Anything below that and the entire batch gets rechecked.',
  },
  {
    question: 'What shipping options are available for custom sunglasses orders from China?',
    answer: 'Three main methods. Air freight (FedEx/DHL/UPS): 3–7 days door-to-door, $2–4 per kg, best for samples and small orders under 50 kg. Sea freight (LCL or FCL): 20–35 days port-to-port plus 3–5 days for customs and inland delivery, $0.30–0.80 per kg, best for bulk orders over 200 kg — FCL (full container) becomes economical around 1,000–2,000 kg. Rail freight to Europe: 12–18 days, $1–1.50 per kg, a middle-ground option that is faster than sea and cheaper than air. For a typical first order of 500 pairs (about 35–40 kg packaged), air freight is the most practical choice. For 3,000+ pairs, sea freight saves $500–800 even after factoring in the extra transit time. We handle all shipping documentation — commercial invoice, packing list, bill of lading — and can ship on your forwarder account or ours.',
  },
];

const PUBLISH_DATE = '2026-08-11';
const SLUG = 'custom-sunglasses-manufacturing-process';

export default function CustomSunglassesManufacturingProcess() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog/' },
          { name: 'From Sketch to Sample' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════ SCHEMA: Article ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "From Sketch to Sample: How Custom Sunglasses Are Manufactured in 4 Weeks",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "A factory owner walks you through the complete custom sunglasses manufacturing process — design review, mold making, material sourcing, assembly, QC, and shipping. Real timelines, real costs, no fluff.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/blog/custom-sunglasses-manufacturing-process" }
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
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Factory Know-How</span>
            <span>August 11, 2026</span>
            <span>•</span>
            <span>9 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            From Sketch to Sample: How Custom Sunglasses Are Manufactured in 4 Weeks
          </h1>
          <p className="text-xl text-gray-600">
            I have been making sunglasses since 2006, and the question I get asked most often is: &quot;What actually happens after I send you my design?&quot; This is the honest walkthrough — every step, every checkpoint, and every delay that can happen.
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
            <li><a href="#week-1" className="text-primary-600 hover:underline">Week 1: Design Review &amp; Mold Making</a></li>
            <li><a href="#week-2" className="text-primary-600 hover:underline">Week 2: Material Sourcing &amp; First Samples</a></li>
            <li><a href="#week-3" className="text-primary-600 hover:underline">Week 3: Assembly &amp; Quality Check</a></li>
            <li><a href="#week-4" className="text-primary-600 hover:underline">Week 4: Finishing, Packaging &amp; Shipment Prep</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Frequently Asked Questions</a></li>
          </ul>
        </nav>

        {/* ═══════ ARTICLE BODY ═══════ */}
        <div className="prose prose-lg max-w-none">

          {/* 🟢 GEO: Key Takeaways */}
          <KeyTakeaways items={takeaways} />

          {/* 🟡 GEO: Quick Stats */}
          <QuickStats stats={quickStats} title="Quick Facts" />

          {/* ─── Section 1: Week 1 ─── */}
          <h2 id="week-1" className="text-3xl font-bold mt-16 mb-6">Week 1: Design Review &amp; Mold Making</h2>

          <p>
            The clock starts ticking the moment your email lands in my inbox. You send a sketch — sometimes it is a proper CAD file from an industrial designer, sometimes it is a photo of a frame you like with &quot;make it like this but wider and in tortoise&quot; scribbled on a napkin. Both are workable. One just takes longer.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">What We Look at in Design Review</h3>

          <p>
            Before anything physical happens, my lead engineer spends 2–3 hours with your design. He checks six things:
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Frame width vs. lens width ratio.</strong> If your frame is 140mm wide but your lenses are 60mm, the proportions will look off. We adjust this before mold making starts.</li>
            <li><strong>Temple-to-front angle.</strong> The temple arms need a specific opening angle (usually 8–10 degrees) so the frame sits properly on a face. Get this wrong and the glasses slide down the nose.</li>
            <li><strong>Hinge placement and type.</strong> Spring hinge, barrel hinge, or hidden hinge? Each requires a different mold cavity design. Spring hinges add $0.15–0.30 per pair but reduce breakage by roughly 40%.</li>
            <li><strong>Bridge design.</strong> A keyhole bridge fits differently than a saddle bridge. The mold needs to account for nose pad placement — or lack thereof.</li>
            <li><strong>Lens groove depth.</strong> Acetate frames need a 1.0–1.2mm groove for lens insertion. Too shallow and the lens pops out. Too deep and the frame rim cracks during assembly.</li>
            <li><strong>Material callout.</strong> Is this acetate, TR90, metal, or a combo? Different materials mean different mold shops, different lead times, and different costs.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">The Mold Making Process</h3>

          <p>
            For acetate frames, we use CNC-machined steel molds. A front-frame mold and two temple molds (left and right). Each mold costs $300–800 depending on complexity. Simple wayfarer molds are on the low end. Oversized cat-eye frames with complex curvature push toward the high end.
          </p>

          <p>
            Mold making itself takes <strong>4–5 working days</strong>. The CNC shop cuts the negative cavity into a steel block, polishes the cavity surface (this is what gives acetate frames their glossy finish straight out of the mold), and then we run a test pressing to check for flashing, sink marks, and thickness consistency.
          </p>

          <p className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-800">
            <strong>⚠️ Common Mistake:</strong> I have had buyers send me a 3D render that looks beautiful on screen but is physically impossible to mold. Acetate does not bend in impossible curves. If your CAD file has a temple arm that curves 90 degrees with a 2mm thickness, it is going to snap at the bend. The mold shop will catch this, but it adds 1–2 days of back-and-forth to redesign. <strong>Always provide a side profile view in your CAD submission.</strong>
          </p>

          <p>
            By Friday of Week 1, your molds are done. We have a test frame in raw white acetate — no color yet, no polishing, just the base shape. I take photos from five angles and send them to you for approval. This is the first &quot;wow&quot; moment for most new brand owners: seeing something that was a sketch on Monday become a physical object by Friday.
          </p>

          {/* ─── Section 2: Week 2 ─── */}
          <h2 id="week-2" className="text-3xl font-bold mt-16 mb-6">Week 2: Material Sourcing &amp; First Samples</h2>

          <p>
            Week 2 is about materials and color. This is the phase where things either go smoothly or every day turns into a game of &quot;where is my shipment.&quot;
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">How We Source Acetate Sheets</h3>

          <p>
            We do not make acetate sheets in-house. Nobody does — acetate sheet manufacturing is a separate industry. The main suppliers are Mazzucchelli (Italy, premium), Daicel (Japan, mid-to-premium), and several Chinese acetate mills (Jiangsu and Zhejiang provinces, good value). Lead time on acetate sheets ranges from <strong>same-day pickup for stock colors</strong> to <strong>5–7 days for custom-laminated color combinations</strong>.
          </p>

          <p>
            Custom color matching is where most delays happen. If you want &quot;dark tortoise with a hint of amber,&quot; I need a physical reference — a Pantone code, a fabric swatch, or an existing frame to match against. Without a reference, expect at least 3 extra days of back-and-forth because &quot;dark tortoise&quot; means different things to a factory in Xiamen than it does to a brand owner in Brooklyn.
          </p>

          <p className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-800">
            <strong>💡 Pro Tip:</strong> Ship a physical color swatch with your design package. I do not care if it is a Pantone chip, a cut piece from an old frame, or even a painted sample card. Anything physical beats a hex code every time — screen colors lie. I have wasted more time on color matching because of uncalibrated monitors than any other single issue in 15 years.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Metal Components and Hardware</h3>

          <p>
            Hinges, screws, nose pads, and temple cores come from separate metal component suppliers — usually in Dongguan or Wenzhou. Standard barrel hinges are in stock and ship same day. Custom-branded hinges (with your logo lasered on) add 3–5 days and a tooling fee of $100–200.
          </p>

          <p>
            For full-metal frames (titanium, stainless steel, or monel), we switch to a different production line entirely. Metal frame production starts with wire bending and stamping dies — different machines, different mold shops, and a slightly different timeline. If your collection mixes acetate fronts with metal temples (a popular hybrid style), we run both lines in parallel.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">First Assembly Samples</h3>

          <p>
            By Thursday or Friday of Week 2, the acetate sheets have arrived, the molds are running production-press quality, and we produce your first assembly samples. These are <strong>5–10 pairs</strong> in your chosen colors, fully assembled with lenses, hinges, and screws. They are not polished to final standard yet — that happens in Week 4 — but they give you a complete feel for the frame: weight, proportions, temple tension, and how the colors look under natural light.
          </p>

          <p>
            I typically ship photos and a short video of these samples by WhatsApp or email. If you want a physical sample shipped to you, we send it via DHL Express (3–5 days to most countries). But fair warning: shipping physical samples at this stage pauses production because we need your feedback before committing to bulk. Most experienced buyers approve from photos and video — it keeps the 4-week clock running.
          </p>

          {/* ─── Section 3: Week 3 ─── */}
          <h2 id="week-3" className="text-3xl font-bold mt-16 mb-6">Week 3: Assembly &amp; Quality Check</h2>

          <p>
            Week 3 is where the factory floor gets busy. This is the assembly phase and it involves more checkpoints than most buyers realize. A single pair of acetate sunglasses passes through <strong>12 to 15 hands</strong> during assembly, each one doing one specific task and checking the work of the person before them.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Lens Cutting and Insertion</h3>

          <p>
            Lenses are cut on a CNC lens edger — not by hand. The edger reads the frame groove dimensions from the CAD file and cuts each lens to 0.1mm tolerance. A human operator loads and unloads the machine, but the cutting is automated. After cutting, we chamfer the lens edge (a 45-degree bevel) so it slides into the frame groove without chipping.
          </p>

          <p>
            Lens insertion into acetate frames requires heat. The front of the frame is warmed to about 60°C (140°F) to soften the acetate just enough for the lens to press in. If the heat is too low, the lens scratches the groove. Too high, and the frame warps. Our insertion technicians have been doing this for 8–15 years — they know the exact temperature for every acetate formulation because different colors and thicknesses soften at slightly different rates.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">The QC Gates (12–15 per Pair)</h3>

          <p>
            Here is the actual QC sequence each pair goes through during Week 3 assembly:
          </p>

          <ol className="list-decimal pl-6 space-y-1 mb-6 text-gray-700">
            <li><strong>Frame visual check</strong> — scratches, bubbles, sink marks on the front frame surface</li>
            <li><strong>Lens visual check</strong> — scratches, coating uniformity, dust particles embedded in the lens</li>
            <li><strong>Lens insertion pressure</strong> — measured with a force gauge, target range 8–15N depending on frame size</li>
            <li><strong>Temple arm opening tension</strong> — both arms must open smoothly with equal resistance</li>
            <li><strong>Temple arm closing</strong> — both arms must close completely and rest flat against the frame front</li>
            <li><strong>Hinge alignment</strong> — checked on a jig; both hinges must sit at exactly the same height</li>
            <li><strong>Screw torque</strong> — each hinge screw torqued to 0.3–0.5 N·m, verified with a torque driver</li>
            <li><strong>Frame symmetry</strong> — measured on an alignment jig with reference markings</li>
            <li><strong>Bridge alignment</strong> — checked against the CAD spec for width and curvature</li>
            <li><strong>Nose pad attachment</strong> (metal frames) — pad arms must be symmetrical, pads firmly attached</li>
            <li><strong>Lens UV transmission test</strong> — every batch sampled with a UV spectrometer; must block 99%+ UV</li>
            <li><strong>Polarization axis check</strong> (if applicable) — polarized lenses must have correct axis orientation</li>
            <li><strong>Sweat resistance test</strong> (sampled) — frames submerged in artificial sweat solution for 24 hours, checked for discoloration</li>
            <li><strong>Drop test</strong> (sampled) — 1.5m drop onto concrete, frame must survive without cracking</li>
            <li><strong>Final overall inspection</strong> — the QC supervisor does a 20-second full scan under 1000-lux lighting</li>
          </ol>

          <p>
            Pairs that fail any gate get tagged with a red sticker and routed to the rework station. If a single station produces more than a 5% failure rate in a day, the production supervisor stops the line and investigates — usually a machine calibration issue or a batch of defective components from a supplier.
          </p>

          <p className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-800">
            <strong>🔧 Inside the Factory:</strong> The #1 QC failure we see on custom orders is <strong>temple tension asymmetry</strong>. One arm opens too loose, the other too tight. This happens because the hinge insertion point on the mold cavity was slightly off — by as little as 0.2mm. We catch it at gate 4 and 5, but it means re-machining that mold cavity. This is why the Week 1 mold review is so important — catching it on the CAD is free. Catching it after production costs a new mold.
          </p>

          <p>
            By the end of Week 3, all production pairs for your sample order are fully assembled and have passed internal QC. They are complete sunglasses — but they do not look like retail product yet. The frames still need final polishing, and nothing is packaged.
          </p>

          {/* ─── Section 4: Week 4 ─── */}
          <h2 id="week-4" className="text-3xl font-bold mt-16 mb-6">Week 4: Finishing, Packaging &amp; Shipment Prep</h2>

          <p>
            Week 4 transforms factory output into branded product. This is where frames get polished to a mirror finish, lenses get a final clean, your logo gets applied, and everything gets packed for shipping.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Frame Polishing and Finishing</h3>

          <p>
            Acetate frame polishing is a 3-stage process: first, a rough polish with a cotton wheel and pumice compound to remove any mold lines or micro-scratches. Second, a medium polish with a softer wheel and finer compound. Third, a final gloss polish — this is where the &quot;wet look&quot; comes from. Each pair gets about <strong>4–6 minutes of total polishing time</strong>, done by hand on a bench polisher.
          </p>

          <p>
            TR90 and metal frames skip the polishing stage but get a different finishing treatment. TR90 gets a matte finish by default (it does not polish to gloss like acetate). Metal frames get electroplating — gold, silver, gunmetal, rose gold — which is a separate process that adds 1–2 days if plating is required.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Logo Application</h3>

          <p>
            Your brand logo goes on at this stage. Options include:
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li><strong>Hot stamping</strong> — metallic foil pressed into the temple arm or lens. Costs $0.05–0.15 per stamp. Most common method.</li>
            <li><strong>Laser engraving</strong> — burns the logo into the acetate or metal surface. Permanent and precise. $0.10–0.25 per engraving.</li>
            <li><strong>Pad printing</strong> — ink transferred via silicone pad. Good for multi-color logos on curved surfaces. $0.08–0.20 per print.</li>
            <li><strong>Metal plate riveting</strong> — a tiny metal plaque with your logo, attached to the temple. Premium feel. $0.30–0.80 per plate.</li>
          </ul>

          <p>
            Logo positioning is critical. We use a jig to ensure every logo lands in exactly the same spot on every pair. Nothing looks cheaper than logos that wander 2mm up or down across a batch.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Final QC Before Packaging</h3>

          <p>
            Before anything goes into a box, every pair gets a final inspection. This is different from the inline QC in Week 3 — it is a standalone pass/fail check by a senior QC inspector who was not involved in the production of those specific pairs. They check:
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Overall cosmetic appearance under 1000-lux light — any visible scratch, dull spot, or color variation</li>
            <li>Lens clarity — held against a white background, checked for internal defects</li>
            <li>Functionality — open/close cycle 5 times, check for smoothness and consistent tension</li>
            <li>Logo quality — alignment, clarity, no smudging or partial transfer</li>
            <li>Packaging check — one pair per box, correct box/bag/case, correct barcode label</li>
          </ul>

          <p>
            If you have booked third-party inspection (SGS, Intertek, Bureau Veritas), this is when they show up. They pull a statistical sample — usually Level II, AQL 2.5 — and inspect in our QC room. A third-party inspection costs about $300–400 per day and gives you an independent report with photos. For first orders, I always recommend it. It costs less than a single returned shipment.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Packaging Options</h3>

          <p>
            Packaging happens on a separate line. Each pair gets:
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>A microfiber cleaning cloth (included standard — costs about $0.06)</li>
            <li>A case — options range from simple PVC pouch ($0.20) to EVA hard case ($0.80) to leather-look box ($1.50+)</li>
            <li>An outer box — either a plain white box or a custom-printed brand box</li>
            <li>A hang tag with barcode and care instructions</li>
          </ul>

          <p>
            Packaging is where your brand identity gets built. EVA cases with your logo embossed on the exterior and a custom-printed inner liner tell the customer &quot;this is a premium product&quot; before they even see the glasses. It adds $0.80 per unit but lets you charge $5–15 more at retail. That math works.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Shipping and Logistics</h3>

          <p>
            By Friday of Week 4, your order is packed, palletized, and labeled. Shipping method depends on order size and urgency:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse" role="table">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 p-3 text-left font-bold text-sm">Method</th>
                  <th className="border border-gray-200 p-3 text-left font-bold text-sm">Transit Time</th>
                  <th className="border border-gray-200 p-3 text-left font-bold text-sm">Cost</th>
                  <th className="border border-gray-200 p-3 text-left font-bold text-sm">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 p-3 font-medium">Air Freight (DHL/UPS/FedEx)</td>
                  <td className="border border-gray-200 p-3">3–7 days</td>
                  <td className="border border-gray-200 p-3">$2–4/kg</td>
                  <td className="border border-gray-200 p-3 text-sm">Samples &amp; orders under 50kg</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 p-3 font-medium">Rail Freight (to Europe)</td>
                  <td className="border border-gray-200 p-3">12–18 days</td>
                  <td className="border border-gray-200 p-3">$1–1.50/kg</td>
                  <td className="border border-gray-200 p-3 text-sm">Mid-size EU orders</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 p-3 font-medium">Sea Freight LCL</td>
                  <td className="border border-gray-200 p-3">20–35 days</td>
                  <td className="border border-gray-200 p-3">$0.30–0.80/kg</td>
                  <td className="border border-gray-200 p-3 text-sm">Orders 50–500kg</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 p-3 font-medium">Sea Freight FCL (20ft)</td>
                  <td className="border border-gray-200 p-3">20–35 days</td>
                  <td className="border border-gray-200 p-3">$1,500–3,000/container</td>
                  <td className="border border-gray-200 p-3 text-sm">Orders 2,000kg+</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            All shipments include a commercial invoice, packing list, and bill of lading. We can also provide Form A (GSP certificate of origin) if your country has preferential tariff rates for Chinese goods, and Form F if you are shipping to ASEAN countries. The paperwork is always included — you just need to have your customs broker ready on your end.
          </p>

          <p>
            And that is it. Four weeks. Sketch to shipped product. It sounds fast when I write it out like this — and honestly, it is fast. The reason we can do it is that we have been running this process since 2006. The molds are cut by the same CNC shop we have used for 12 years. The acetate comes from suppliers we have quarterly contracts with, not one-off orders. The assembly line workers have been doing their specific station for years. When everything is in-house and everyone knows their job, 4 weeks is not a rush — it is just the standard timeline.
          </p>

          {/* ═══════ FAQ SECTION ═══════ */}
          <section className="mb-12">
            <h2 id="faq" className="text-3xl font-bold text-gray-900 mt-16 mb-8">Frequently Asked Questions</h2>
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
            <h2 className="text-3xl font-bold mb-4">Got a Sketch? Let&apos;s Turn It Into Sunglasses</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Send us your design — CAD file, photo, or napkin sketch — and we will have sample frames in your hands within 4 weeks. Acetate, TR90, metal, bio-materials. Full OEM with your branding.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact/" className="bg-white text-primary-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-colors">
                Start Your Project
              </Link>
              <Link href="/products/" className="bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-500 transition-colors border-2 border-primary-400">
                Browse Existing Styles
              </Link>
            </div>
          </section>

          {/* ═══════ RELATED ═══════ */}
          <section className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/how-sunglasses-are-made" className="group block p-6 border border-gray-200 rounded-xl hover:border-primary-300 transition-colors">
                <p className="text-sm text-primary-600 mb-2">Manufacturing</p>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">How Sunglasses Are Made: Inside a Chinese Factory</h3>
                <p className="text-gray-600 text-sm">Step-by-step factory tour from raw materials to finished sunglasses — every step explained.</p>
              </Link>
              <Link href="/blog/frame-material-comparison" className="group block p-6 border border-gray-200 rounded-xl hover:border-primary-300 transition-colors">
                <p className="text-sm text-primary-600 mb-2">Manufacturing</p>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">TR90 vs Acetate vs Metal: Which Frame Material Is Right for Your Brand?</h3>
                <p className="text-gray-600 text-sm">Real cost data, weight comparisons, durability tests, and which material works best.</p>
              </Link>
              <Link href="/blog/sunglasses-moq-guide" className="group block p-6 border border-gray-200 rounded-xl hover:border-primary-300 transition-colors">
                <p className="text-sm text-primary-600 mb-2">Sourcing</p>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">Sunglasses MOQ Guide: Minimum Order Quantities Explained</h3>
                <p className="text-gray-600 text-sm">What MOQ actually means at the factory level — and how to negotiate it down.</p>
              </Link>
              <Link href="/blog/oem-vs-odm" className="group block p-6 border border-gray-200 rounded-xl hover:border-primary-300 transition-colors">
                <p className="text-sm text-primary-600 mb-2">Manufacturing</p>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">OEM vs ODM Sunglasses: What&apos;s the Difference?</h3>
                <p className="text-gray-600 text-sm">After 3,000 conversations — real costs, real timelines, and a decision framework that works.</p>
              </Link>
            </div>
          </section>

        </div>
      </div>
    </article>
  );
}
