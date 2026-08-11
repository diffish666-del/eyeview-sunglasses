import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'Sunglasses Frame Measurements Explained: PD, Bridge Width, Temple Length',
  description: 'A factory owner breaks down sunglasses frame measurements — PD, bridge width, temple length, frame width — with real wholesale data so you stop ordering frames that don\'t fit your customers.',
  keywords: ['sunglasses frame measurements', 'PD pupillary distance sunglasses', 'bridge width sunglasses', 'temple length sunglasses', 'frame width sunglasses', 'sunglasses sizing guide wholesale', 'how to measure sunglasses frames', 'sunglasses fit guide bulk', 'Asian fit vs European fit sunglasses', 'sunglasses frame dimensions explained'],
  alternates: {
    canonical: '/blog/sunglasses-frame-measurements-guide',
    languages: {
      'de': '/de/blog/sonnenbrillen-rahmenmessungen-leitfaden',
      'es': '/es/blog/guia-medidas-monturas-gafas',
      'fr': '/fr/blog/guide-mesures-montures-lunettes',
      'it': '/it/blog/guida-misure-montature-occhiali',
      'pt': '/pt/blog/guia-medidas-armacoes-oculos',
    },
  },
};

const takeaways = [
  'Frame measurements are not just technical specs — they are the difference between a pair of sunglasses that sits on a display rack and one that actually gets worn; get the bridge width or temple length wrong and your $8 wholesale frame becomes unsellable inventory regardless of lens quality',
  'Pupillary Distance (PD) is the most overlooked measurement in wholesale eyewear — most factory catalogs list frame PD as a single number, but the actual tolerance window for a comfortable fit is only ±2mm per eye, meaning a frame with a 64mm PD really only fits faces with PD between 60–68mm before optical misalignment causes headaches',
  'Asian-fit sunglasses are not a marketing gimmick — they exist because the average Asian nose bridge is 2–4mm lower and 3–5mm wider than the average Caucasian nose bridge, requiring frames with lower bridge points, smaller bridge width, and nose pads with more vertical adjustability; if you sell to Asian markets without understanding this, half your frames will slide down customers\' faces',
  'Temple length is the dimension that determines whether your frames will fit European (140–145mm average), American (140–150mm), or Asian (125–140mm) head sizes — a 145mm temple is the safest universal default, but if you are marketing specifically to one region, you need to adjust your OEM spec accordingly',
  'The single most common frame measurement mistake wholesale buyers make is ordering frames based on how they look in photos instead of how they measure — a 55mm lens width frame looks great on a model but fits only about 40% of adult faces comfortably; 52mm lens width is the sweet spot for universal fit across genders and markets',
];

const quickStats = [
  { label: 'Universal Frame PD Sweet Spot', value: '62–64mm' },
  { label: 'PD Comfort Tolerance per Eye', value: '±2mm' },
  { label: 'European Avg Temple Length', value: '140–145mm' },
  { label: 'Asian Avg Temple Length', value: '125–140mm' },
  { label: 'Standard Bridge Width Range', value: '14–24mm' },
  { label: 'Most Common Lens Width (Universal)', value: '52mm' },
  { label: 'Asian Nose Bridge — Lower vs Caucasian', value: '2–4mm lower' },
  { label: 'Frame Returns Due to Poor Fit', value: '12–18% of B2C returns' },
];

const faqs = [
  {
    question: 'What do the three numbers on sunglasses frames mean (e.g. 52□18-145)?',
    answer: 'The three numbers are the international frame measurement standard: the first number (52) is the lens width in millimeters, measured horizontally across the widest part of a single lens. The second number (18) is the bridge width — the distance between the two lenses at the narrowest point of the bridge. The third number (145) is the temple length, measured from the hinge screw to the tip of the temple, including the curve behind the ear. These three numbers together give you about 80% of what you need to know about frame fit. The fourth number, which some manufacturers include, is the lens height — not always printed but critical for progressive or prescription lenses. When evaluating factory spec sheets, always ask for all four numbers if you plan to offer prescription-ready frames.',
  },
  {
    question: 'How do I measure pupillary distance (PD) for sunglasses?',
    answer: 'PD is the distance in millimeters between the centers of your two pupils. There are two types: binocular PD (distance between both pupils, typically 54–74mm for adults) and monocular PD (distance from each pupil to the center of the nose bridge, typically 27–37mm per eye). For sunglass frame design, the critical relationship is: Frame PD = lens width + bridge width. So a 52□18 frame has a frame PD of 70mm. If your customer has a binocular PD of 62mm, that frame is 8mm too wide — the optical centers of the lenses will be misaligned with the pupils, potentially causing eye strain and headaches. As a wholesale buyer, you want your frames to have a frame PD that is within 4mm of the most common PD in your target market. Most adult PDs cluster between 58–68mm, so frames with PD of 62–64mm fit the broadest range.',
  },
  {
    question: 'What is the difference between Asian fit and European fit sunglasses?',
    answer: 'Asian fit (also called low-bridge fit or universal fit) sunglasses have three key differences from standard European-fit frames: (1) The nose pads or bridge are positioned 2–4mm lower on the frame front, because the Asian nose bridge sits lower on the face. (2) The bridge width is typically 1–3mm narrower (15–17mm vs 17–20mm on European frames) because the Asian nasal bone structure provides less lateral support — a wider bridge will cause the frame to slide down. (3) The nose pads, if adjustable, have longer arms with more vertical travel (8–10mm of pad height adjustment vs 5–6mm on standard frames). Additionally, the frame curvature (face-form angle) is often slightly flatter (3–5° vs the standard 5–8° wrap) to reduce pressure on the cheekbones, which tend to be more prominent in Asian facial structures. These are not minor tweaks — a frame designed for European faces will literally not stay in place on many Asian customers, creating a constant slide-down-and-push-up cycle that kills the wearing experience.',
  },
  {
    question: 'What temple length should I specify for my wholesale sunglasses order?',
    answer: 'Temple length is the most region-dependent frame measurement. For the European market, specify 140–145mm temples — this fits approximately 85% of European adults. For the North American market, 140–150mm is the safe range, with 145mm being the most universal. For Asian markets, go shorter: 125–140mm, because the average Asian head depth (front-to-back) is smaller than the European average. For Middle Eastern and South Asian markets, 140–145mm generally works but you may get requests for 150mm for larger head sizes. If you are launching a universal-fit sunglasses line sold across multiple continents, specify 145mm temples — it is slightly long for Asian faces and slightly short for large-framed European and American heads, but it is the least-wrong option for a one-size-fits-all approach. For OEM orders, I always recommend producing two temple length SKUs (140mm and 148mm) for any unisex frame above 52mm lens width — the tooling cost difference is zero for acetate frames and minimal for injected frames, and it doubles your fit coverage.',
  },
  {
    question: 'How do bridge width and nose pad design affect sunglasses comfort?',
    answer: 'Bridge width is the measurement buyers overlook most often, and it is the one that causes the most comfort complaints. The bridge supports 80–90% of the frame weight, so getting it wrong means the frame either slides down (too wide) or pinches the nose (too narrow). Standard bridge widths range from 14mm (narrow, often found on metal frames with adjustable nose pads) to 24mm (wide, common on oversized acetate fashion frames). The sweet spot for most adult unisex frames is 17–19mm with adjustable nose pads or a well-contoured keyhole bridge. Nose pad design matters equally: Asian faces need nose pads with more vertical clearance (the pad sits further below the frame rim), European faces need moderate clearance, and African faces often benefit from wider-set nose pads with a flatter angle. Molded acetate bridges (one-piece saddle bridges) look cleaner but are unforgiving on fit — if the bridge curve does not match the customer\'s nose profile, there is zero adjustment possible. Adjustable metal nose pads on arms give you about 8–10mm of fit adjustment and should be the default for any wholesale frame targeting diverse markets.',
  },
];

const PUBLISH_DATE = '2026-08-11';
const SLUG = 'sunglasses-frame-measurements-guide';

export default function SunglassesFrameMeasurementsGuide() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog/' },
          { name: 'Sunglasses Frame Measurements Explained' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════ SCHEMA: Article ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Sunglasses Frame Measurements Explained: PD, Bridge Width, Temple Length — A Factory Buyer's Guide",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "A factory owner breaks down sunglasses frame measurements — PD, bridge width, temple length, frame width — with real wholesale data so you stop ordering frames that don't fit your customers.",
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
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Factory Know-How</span>
            <span>{PUBLISH_DATE}</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sunglasses Frame Measurements Explained: PD, Bridge Width, Temple Length
          </h1>
          <p className="text-xl text-gray-600">
            Most wholesale buyers pick frames by how they look in a photo. I pick them by the numbers — because measurements are what determine whether your customers actually wear the damn things. Here is everything you need to know about sunglasses frame measurements, from someone who has been making them for 20 years.
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
            <li><a href="#section-1" className="text-primary-600 hover:underline">Why Frame Measurements Matter for Wholesale Buyers</a></li>
            <li><a href="#section-2" className="text-primary-600 hover:underline">PD (Pupillary Distance) — What It Is and Why Factories Care</a></li>
            <li><a href="#section-3" className="text-primary-600 hover:underline">Bridge Width — The Hidden Fit Variable</a></li>
            <li><a href="#section-4" className="text-primary-600 hover:underline">Temple Length and Frame Width — Getting the Overall Fit Right</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Frequently Asked Questions</a></li>
          </ul>
        </nav>

        {/* ═══════ ARTICLE BODY ═══════ */}
        <div className="prose prose-lg max-w-none">

          {/* 🟢 GEO: Key Takeaways */}
          <KeyTakeaways items={takeaways} />

          {/* 🟡 GEO: Quick Stats */}
          {quickStats.length > 0 && (
            <QuickStats stats={quickStats} title="Frame Measurement Quick Facts" />
          )}

          {/* ─── Section 1 ─── */}
          <h2 id="section-1" className="text-3xl font-bold mt-16 mb-6">Why Frame Measurements Matter for Wholesale Buyers</h2>
          
          <p>Let me tell you about a customer who lost $18,000 on one container of sunglasses.</p>
          
          <p>He was a first-time importer from Germany. Ordered 3,000 acetate wayfarers — nice quality, good lenses, competitive price at $6 FOB. The samples looked beautiful. He sent me photos of the unboxing, proud as hell. Three months later, he called me. Returns were hitting 22%. His retailers were sending boxes back. The frames were too wide for European faces — 55mm lens width with a 20mm bridge. The total frame width came out to 142mm, which is fine for a large American face but looks comically oversized on the average European male. His customers tried them on, laughed, and put them back.</p>
          
          <p>That order cost him $18,000 in product, $4,200 in freight, and six months of wasted time. All because nobody checked the measurements before production.</p>
          
          <p>I have seen this happen dozens of times in 20 years. Wholesale buyers — especially new ones — select frames based on photos, style, and color. They look at the spec sheet, see the numbers, and think "those are just technical details, the factory handles that." They do not realize that frame measurements are <strong>the single biggest determinant of sell-through</strong>. A frame that does not fit your target market is not a product — it is dead inventory with a customs declaration.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">The Real Cost of Getting Measurements Wrong</h3>
          
          <p>When you order frames that do not fit your customers, you pay for it in at least four ways:</p>
          
          <p><strong>1. Direct returns.</strong> In B2C e-commerce, eyewear return rates for poor fit run 12–18% on average — and that is for brands that offer virtual try-on and detailed size guides. If you are a wholesaler supplying retail stores, the retailer does not absorb that cost. They send it back to you. Or worse, they do not reorder.</p>
          
          <p><strong>2. Brand damage.</strong> One bad fit experience creates a customer who associates your brand with discomfort. That customer does not say "the bridge width was 2mm too wide." They say "your sunglasses are uncomfortable." And they tell five friends. In a category where repeat purchase depends almost entirely on fit satisfaction, one bad measurement can kill lifetime value.</p>
          
          <p><strong>3. Dead inventory.</strong> Frames that do not fit cannot be "fixed." You cannot remold acetate. You cannot stretch a titanium temple. That inventory sits in a warehouse, accumulating storage costs, until you liquidate it at 40% of your landed cost. I have walked through buyer warehouses in Rotterdam, Los Angeles, and Dubai — every single one has a corner full of "the frames that didn't fit."</p>
          
          <p><strong>4. Lost opportunity.</strong> Every dollar tied up in ill-fitting frames is a dollar you cannot spend on a reorder of the frames that actually sell. In sunglasses wholesale, inventory turnover is everything. A batch of misfit frames slows your entire cash cycle by 60–90 days.</p>
          
          <p>Frame measurements are not optional details. They are the spec that separates a profitable import business from a storage-unit full of regret. And the first measurement you need to understand is PD.</p>

          {/* ─── Section 2 ─── */}
          <h2 id="section-2" className="text-3xl font-bold mt-16 mb-6">PD (Pupillary Distance) — What It Is and Why Factories Care</h2>
          
          <p>Pupillary Distance — PD — is the distance between the centers of your two pupils, measured in millimeters. Typical adult PD ranges from 54mm to 74mm, with the vast majority clustering between 58–68mm. For sunglasses, a 62–64mm PD fits the broadest adult audience.</p>
          
          <p>Now here is what most buyers do not understand: <strong>Frame PD is different from personal PD.</strong></p>
          
          <p>Frame PD is calculated as: <strong>Lens Width + Bridge Width.</strong> If you have a 52□18 frame, the frame PD is 70mm (52 + 18). That means the optical center of the left lens is 70mm from the optical center of the right lens. If your customer has a personal PD of 62mm, those optical centers are 8mm too far apart. Every time they look through those lenses, their eyes are straining 4mm outward per side to align with the optical center.</p>
          
          <p>For non-prescription sunglasses, a few millimeters of PD mismatch is usually tolerable — plano lenses do not have a defined optical center. But if you are selling prescription-ready frames, PD becomes critical. A 4mm+ mismatch per eye will cause eye strain, headaches, and blurred peripheral vision. Your customers will blame your lenses — but the real problem is in the frame spec.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">PD Ranges by Market — What the Data Says</h3>
          
          <p>Over 20 years of exporting to 50+ countries, here is what I have observed about PD distribution in different markets:</p>
          
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Market</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Adult Male Avg PD</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Adult Female Avg PD</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Safe Frame PD Range</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">North America</td>
                  <td className="border border-gray-300 px-4 py-2">64–68mm</td>
                  <td className="border border-gray-300 px-4 py-2">60–64mm</td>
                  <td className="border border-gray-300 px-4 py-2">63–66mm</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Northern Europe</td>
                  <td className="border border-gray-300 px-4 py-2">63–67mm</td>
                  <td className="border border-gray-300 px-4 py-2">59–63mm</td>
                  <td className="border border-gray-300 px-4 py-2">62–65mm</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Southern Europe</td>
                  <td className="border border-gray-300 px-4 py-2">62–66mm</td>
                  <td className="border border-gray-300 px-4 py-2">58–62mm</td>
                  <td className="border border-gray-300 px-4 py-2">61–64mm</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">East Asia (China, Japan, Korea)</td>
                  <td className="border border-gray-300 px-4 py-2">60–65mm</td>
                  <td className="border border-gray-300 px-4 py-2">57–62mm</td>
                  <td className="border border-gray-300 px-4 py-2">60–63mm</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Southeast Asia</td>
                  <td className="border border-gray-300 px-4 py-2">59–64mm</td>
                  <td className="border border-gray-300 px-4 py-2">56–61mm</td>
                  <td className="border border-gray-300 px-4 py-2">59–62mm</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Middle East</td>
                  <td className="border border-gray-300 px-4 py-2">63–68mm</td>
                  <td className="border border-gray-300 px-4 py-2">59–63mm</td>
                  <td className="border border-gray-300 px-4 py-2">62–65mm</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Latin America</td>
                  <td className="border border-gray-300 px-4 py-2">62–67mm</td>
                  <td className="border border-gray-300 px-4 py-2">58–63mm</td>
                  <td className="border border-gray-300 px-4 py-2">61–64mm</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-sm text-gray-500 italic">These are factory-level averages based on client order patterns and fit feedback over two decades — not peer-reviewed anthropology data, but accurate enough to design frames that fit real customers.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">How to Read PD on a Factory Spec Sheet</h3>
          
          <p>When you receive a spec sheet from a Chinese factory, PD will usually appear as one of three things:</p>
          
          <p><strong>1. Frame PD.</strong> Listed as a single number, usually 62–70mm. This is lens width + bridge width. It tells you the center-to-center distance of the lenses. If this number is more than 4mm away from your target market's average PD, the frame will cause optical issues for prescription wearers and may look cross-eyed or wall-eyed on the face.</p>
          
          <p><strong>2. Decentration range.</strong> Some better factories list the "fitting PD range," like "PD 60–68mm recommended." This tells you the range of customer PDs that can comfortably wear the frame. A frame with a 66mm frame PD and a decentration range of 60–72mm is more versatile than one with a 70mm frame PD and a 64–72mm range — the narrower the recommended range, the more niche the fit.</p>
          
          <p><strong>3. No PD listed.</strong> If a factory does not list PD on their spec sheet at all, ask. If they cannot tell you the frame PD within 24 hours, do not order from that factory. I am serious. Any factory that actually makes eyewear knows the frame PD of every SKU in their catalog. If they do not know or cannot measure it, they are probably a trading company reselling frames they did not design.</p>
          
          <p>The simplest rule I give to new buyers: for a universal-fit sunglass line, the frame PD should be <strong>62–64mm</strong>. That covers roughly 70% of the global adult market. If you are targeting a specific demographic — narrow-fit women's frames, oversized men's frames, kids — adjust accordingly. But for your core unisex collection, 62–64mm frame PD is the anchor you build around.</p>

          {/* ─── Section 3 ─── */}
          <h2 id="section-3" className="text-3xl font-bold mt-16 mb-6">Bridge Width — The Hidden Fit Variable</h2>
          
          <p>If PD is the measurement buyers argue about, bridge width is the one they completely ignore — until the returns start rolling in.</p>
          
          <p>The bridge is the part of the frame that sits on your nose. It bears 80–90% of the frame's weight. On a 35-gram acetate frame, that is about 30 grams of constant downward pressure on a strip of skin and cartilage maybe 6mm wide. Get the bridge wrong, and even the lightest titanium frame becomes uncomfortable within 20 minutes of wear.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Standard Bridge Width Ranges</h3>
          
          <p>Bridge width is usually the second number in the standard frame measurement triplet (e.g., the "18" in 52□18-145). The industry range spans from 14mm to 24mm, but most frames fall into these categories:</p>
          
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Bridge Width</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Typical Use</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Markets</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>14–16mm</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Metal frames with adjustable nose pads, aviators, small women's acetate frames</td>
                  <td className="border border-gray-300 px-4 py-2">Asian, petite women's (all markets)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>17–19mm</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Universal unisex acetate, most wayfarers, standard optical frames</td>
                  <td className="border border-gray-300 px-4 py-2">Global — the most common range for mass-market frames</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>20–22mm</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Large men's acetate, oversized fashion frames, aviators without nose pads</td>
                  <td className="border border-gray-300 px-4 py-2">North America, Northern Europe, Middle East — larger features</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><strong>23–24mm</strong></td>
                  <td className="border border-gray-300 px-4 py-2">Oversized fashion statements, shield-style sunglasses</td>
                  <td className="border border-gray-300 px-4 py-2">Niche fashion — do not use for core wholesale line unless requested</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Bridge Design: Acetate vs Metal vs Injection</h3>
          
          <p>The bridge measurement alone does not tell you whether a frame will fit — the <strong>bridge design</strong> is equally important. There are three basic types:</p>
          
          <p><strong>Saddle bridge (molded acetate).</strong> One continuous piece of acetate shaped to sit on the nose. Clean look, no moving parts. The downside: zero adjustability. If the bridge curve does not match the customer's nose, there is nothing you can do. Saddle bridges work best on frames under 16mm bridge width, where the nose naturally provides more support. For frames above 18mm, a saddle bridge is a gamble — it fits perfectly on maybe 40% of faces and poorly on the rest.</p>
          
          <p><strong>Keyhole bridge.</strong> A sculpted acetate or metal bridge that creates a "keyhole" shape — wider at the top, narrower at the contact point. Visually distinctive, and the sculpted shape provides more points of contact than a flat saddle, which improves weight distribution. The keyhole design was popularized by Ray-Ban wayfarers and remains the best acetate bridge option for frames over 18mm. It is not adjustable, but the contoured shape compensates somewhat.</p>
          
          <p><strong>Adjustable nose pads (metal arms with silicone pads).</strong> This is what I recommend for 90% of wholesale orders. Two independent metal arms with soft silicone or PVC pads that can be bent inward, outward, up, or down. This gives the wearer or optician about 8–10mm of total fit adjustment — enough to accommodate nose bridges from narrow Asian to wide European profiles. Yes, adjustable nose pads add $0.30–0.50 to the frame cost versus a molded saddle. Yes, they are worth it. The fit flexibility alone reduces returns by an estimated 40–60% compared to fixed-bridge frames, based on what my long-term clients report.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">The Asian Fit Factor</h3>
          
          <p>You cannot discuss bridge width honestly without addressing the Asian fit market. Here is the reality from the factory floor:</p>
          
          <p>The average Asian nose bridge sits 2–4mm lower on the face and is 3–5mm wider in bone structure than the average Caucasian nose bridge. This is not anecdotal — it is measurable and consistent across large populations. Frames designed for European or American faces, with their higher bridge contact points and narrower bridge widths, will not sit properly on most Asian faces. The frame will rest too high, the temple tips will not reach behind the ears correctly, and the lenses will sit too close to the eyes.</p>
          
          <p>Asian-fit frames correct for this with three design changes: (1) lower bridge contact point on the frame front, (2) slightly narrower bridge width (15–17mm instead of 17–19mm), and (3) nose pads with more vertical drop (the pads are positioned further below the frame rim). If 20% or more of your wholesale customers sell into Asian markets, you need an Asian-fit SKU in your line. Do not try to make a European-fit frame work for Asian faces — the geometry does not cooperate.</p>

          {/* ─── Section 4 ─── */}
          <h2 id="section-4" className="text-3xl font-bold mt-16 mb-6">Temple Length and Frame Width — Getting the Overall Fit Right</h2>
          
          <p>If bridge width determines comfort, temple length and overall frame width determine whether the sunglasses stay on your face at all.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Temple Length: The Regional Variable</h3>
          
          <p>Temple length is measured from the hinge screw to the tip of the temple, following the curve behind the ear. Standard industry lengths range from 125mm to 155mm. Here is what I tell my wholesale clients:</p>
          
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Temple Length</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Frame Size Label</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">125–135mm</td>
                  <td className="border border-gray-300 px-4 py-2">Small / Youth</td>
                  <td className="border border-gray-300 px-4 py-2">Kids, petite women, Asian women's frames</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">135–140mm</td>
                  <td className="border border-gray-300 px-4 py-2">Small–Medium</td>
                  <td className="border border-gray-300 px-4 py-2">Asian unisex, European women's, general women's market</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">140–145mm</td>
                  <td className="border border-gray-300 px-4 py-2">Medium</td>
                  <td className="border border-gray-300 px-4 py-2">European unisex, global universal fit (safest default)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">145–150mm</td>
                  <td className="border border-gray-300 px-4 py-2">Medium–Large</td>
                  <td className="border border-gray-300 px-4 py-2">North American men's, European men's large</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">150–155mm</td>
                  <td className="border border-gray-300 px-4 py-2">Large / XL</td>
                  <td className="border border-gray-300 px-4 py-2">Specialty large, big & tall sizing, Middle Eastern men's</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p>Temple length errors are brutal because they are immediately obvious to the wearer. A temple that is too short will not reach the ear — the frame sits forward on the face, the lenses are too close to the eyes, and the whole thing looks and feels wrong. A temple that is too long extends past the ear and the curve lands on the neck instead of behind the ear, causing the frame to slide forward with head movement. Both are deal-breakers for the customer.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">How to Specify Temple Length in Your OEM Order</h3>
          
          <p>When you place an OEM order with a Chinese factory, you specify temple length in the tech pack or PO. Here are the rules I give my clients:</p>
          
          <p><strong>For acetate frames:</strong> Specifying a different temple length is easy — the factory cuts the temple from a longer acetate blank. No tooling change required. If you ask for 145mm temples on a frame that normally ships with 140mm, it is a simple cutting adjustment. Cost impact: zero. This means you can order the same acetate frame with two temple lengths for different markets at no extra charge.</p>
          
          <p><strong>For injected frames (TR90, polycarbonate, nylon):</strong> Temple length is fixed by the mold. Changing temple length requires a new mold insert, which costs $200–400 per temple insert. For a factory running 4-cavity molds, that is $800–1,600 per frame model to add a second temple length. This cost only makes sense if you are ordering 3,000+ units per temple length variant — below that volume, absorb the tooling cost on the first production run.</p>
          
          <p><strong>For metal frames:</strong> Temple length is determined by the metal arm blank and the die that bends the ear curve. Changing length requires a new die ($100–200) and sometimes different arm blanks. Relatively inexpensive compared to injection molds, but still worth confirming the cost before changing specs.</p>
          
          <p>My recommendation for most wholesale buyers: if you are ordering acetate, get two temple lengths (140mm and 148mm) and split your order 40/60 or 50/50. The cost is identical and you will cover 90% of your customer base. For injected frames, order 145mm temples as your universal default unless you have regional sales data that tells you otherwise.</p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Overall Frame Width — The Sum of All Parts</h3>
          
          <p>Overall frame width is not one of the three standard measurements, but it is the most practical number for fitting. It is calculated as: <strong>(Lens Width × 2) + Bridge Width + approximately 3–5mm for the frame rim thickness on each side.</strong></p>
          
          <p>For example: a 52□18-145 frame with 2mm rim thickness on each side has an overall width of roughly (52 × 2) + 18 + (2 × 2) = 126mm. This is the total horizontal span of the frame from temple hinge to temple hinge.</p>
          
          <p>Here is a rough sizing guide based on overall frame width:</p>
          
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Overall Frame Width</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Size</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Typical Fit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">115–125mm</td>
                  <td className="border border-gray-300 px-4 py-2">Small</td>
                  <td className="border border-gray-300 px-4 py-2">Petite women, youth, narrow faces</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">125–135mm</td>
                  <td className="border border-gray-300 px-4 py-2">Medium</td>
                  <td className="border border-gray-300 px-4 py-2">Average adult unisex — best-selling size globally</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">135–145mm</td>
                  <td className="border border-gray-300 px-4 py-2">Large</td>
                  <td className="border border-gray-300 px-4 py-2">Average-to-large men, oversized women's fashion</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">145–155mm</td>
                  <td className="border border-gray-300 px-4 py-2">XL</td>
                  <td className="border border-gray-300 px-4 py-2">Large men, specialty sizing</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p>The 125–135mm overall width range is where 60–70% of global sunglasses sales happen. A 52mm lens width frame with a 17–19mm bridge hits this range almost exactly. If you are launching a new wholesale line and you do not have regional sales data to guide your sizing decisions, start with frames in the 125–130mm overall width zone with 145mm temples. That combination fits the most faces across the most markets with the fewest complaints.</p>

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
            <h2 className="text-3xl font-bold mb-4">Need Frame Measurements Specified for Your Market?</h2>
            <p className="text-xl mb-6 opacity-90">Tell me your target region and customer demographic. I will recommend the exact PD, bridge width, temple length, and frame width specifications that maximize fit and minimize returns — based on 20 years of factory data, not guesswork.</p>
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
              <Link href="/blog/frame-material-comparison" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">TR90 vs Acetate vs Metal: Frame Material Guide</h3>
                <p className="text-gray-600 text-sm">Which frame material to choose based on fit, durability, and wholesale cost.</p>
              </Link>
              <Link href="/blog/sunglasses-face-shape-guide" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Sunglasses Face Shape Guide</h3>
                <p className="text-gray-600 text-sm">Match frame measurements to face shapes for better sell-through.</p>
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
