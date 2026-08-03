import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import { KeyTakeaways, QuickStats } from '@/components/GEOContent';

export const metadata: Metadata = {
  title: 'Sunglasses Retail Display & Merchandising: How to Make Wholesale Eyewear Sell',
  description: 'Practical guide to sunglasses retail displays: counter spinners, wall racks, window merchandising, and POP materials. Factory-tested display strategies that actually increase in-store sell-through rates for wholesale eyewear brands.',
  keywords: ['sunglasses retail display', 'sunglasses merchandising', 'eyewear display rack', 'sunglasses counter display', 'wholesale sunglasses POP', 'sunglasses spinner rack', 'retail eyewear display ideas', 'sunglasses store layout', 'eyewear merchandising strategy', 'sunglasses point of sale'],
  alternates: {
    canonical: '/blog/sunglasses-retail-display-merchandising',
  },
};

const takeaways = [
  'The most expensive sunglasses on your display rack are not the ones with the highest wholesale cost — they are the ones that customers cannot see clearly, cannot reach easily, and cannot try on without asking for help; bad display kills more sales than bad product ever will',
  'Eye-level placement generates 35% more sales per SKU than bottom-shelf placement — this is retail 101 and yet I walk into optical shops every month where the premium frames are at knee height and the $15 impulse-buy pairs are at eye level',
  'Counter displays (spinner racks and tiered trays) convert at 2-3× the rate of wall displays for sunglasses under $50 retail because they eliminate two friction points: the customer does not need to walk across the store and does not need to ask an employee to reach the product',
  'Lighting is the silent salesperson for eyewear — 3500K-4000K color temperature with 90+ CRI makes frames and lenses look their best; fluorescent lighting (the standard in most retail spaces) adds a green cast to acetate frames and makes polarized lenses look dull',
  'The average customer touches 3-5 frames before making a purchase decision — if your display makes it difficult to pick up, try on, and return a frame to its spot, you are actively preventing customers from reaching the number of touches they need to buy',
  'Seasonal display rotation (not just product rotation) increases same-store sunglasses sales by 12-18%: a beach-themed spinner in June, a ski-themed wall display in December — simple visual cues that remind customers they need different eyewear for different conditions',
];

const quickStats = [
  { label: 'Eye-level vs bottom-shelf uplift', value: '+35% sales/SKU' },
  { label: 'Counter vs wall display conversion', value: '2–3× higher' },
  { label: 'Seasonal rotation sales lift', value: '+12–18%' },
  { label: 'Frames touched before purchase', value: '3–5 frames' },
  { label: 'Optimal display lighting CCT', value: '3500K–4000K' },
  { label: 'Minimum CRI for eyewear display', value: '90+' },
  { label: 'Counter spinner capacity', value: '48–96 pairs' },
  { label: 'POP display production cost', value: '$8–25/unit (bulk)' },
];

const faqs = [
  {
    question: 'What is the best display type for selling sunglasses in a retail store?',
    answer: 'Countertop spinner racks for sunglasses under $50 retail — they sit at eye level, customers can spin and browse without asking for help, and the rotating motion makes each pair feel like a discovery. Wall-mounted display cases for premium sunglasses ($50+ retail) — the glass-front case signals higher value and protects expensive inventory from handling damage. Tiered acrylic counter trays for impulse-buy sunglasses near the register — flat lay presentation that lets customers see lens color and frame shape at a glance. The most effective retail setups use all three: wall case for the premium line (brand halo), counter spinner for the mid-range (volume driver), and tiered tray for the impulse/add-on SKUs (margin booster).',
  },
  {
    question: 'How many sunglasses should I display at one time?',
    answer: 'More than you think, but less than the maximum your display can physically hold. The sweet spot is 70-80% of display capacity — enough variety that every customer finds something they like, but not so packed that individual frames disappear into visual noise. A 72-pair spinner rack should display 50-55 pairs with breathing room between them. If every slot is filled, the display looks like a warehouse shelf and the perceived value of each pair drops. The gap between frames signals curation: someone made choices about what to show, rather than just dumping inventory onto a rack. Rotate slow-moving SKUs out and fresh arrivals in every 2-3 weeks — returning customers should see something new.',
  },
  {
    question: 'Should sunglasses be displayed with or without price tags?',
    answer: 'It depends on your positioning. For sunglasses under $30, visible pricing increases conversion — customers self-qualify and do not need to ask "how much?" before deciding. For sunglasses $50-100, price tags are neutral to slightly positive — customers expect them and use them to compare value across styles. For sunglasses above $150, remove visible price tags — at this price point, customers need to fall in love with the product first and hear the price second, ideally from a salesperson who can frame the value. A simple rule: if your customers would be embarrassed to ask the price, hide it; if they would be annoyed to have to ask, show it.',
  },
  {
    question: 'What kind of lighting works best for a sunglasses display?',
    answer: 'LED track lighting or adjustable spotlights at 3500K-4000K color temperature with CRI 90+. Warm white (3000K) makes acetate frames look richer but distorts lens color. Cool white (5000K+) makes everything look sterile and clinical — fine for an optometrist exam room, terrible for selling fashion. The CRI (Color Rendering Index) matters more than most retailers realize: anything below 90 CRI will make polarized lenses look muddy and acetate frames look washed out. Each display section needs its own dedicated light source — do not rely on ambient ceiling lighting alone. Position lights at a 30-degree angle from above to minimize lens reflections while maximizing frame detail. LED strip lighting inside glass display cases with a diffuser (not exposed diodes) creates an even glow that makes every pair look premium.',
  },
  {
    question: 'How can a sunglasses factory help with retail display and POP materials?',
    answer: 'Most Chinese sunglasses factories offer branded display solutions as part of wholesale orders. Counter spinner racks ($15-40/unit in bulk, depending on material and size), branded display trays with your logo ($2-8/unit), window display stands ($5-15/unit), and custom POP (Point of Purchase) signage ($1-5/unit) are standard add-ons. The best factories will design the display to match your brand aesthetic — logo placement, color scheme, even the material finish. For larger orders (3,000+ units), many factories include basic display racks at no additional cost. The key conversation to have with your factory: ask for display samples along with your product samples. A display that looks good in a photo but falls apart after three months of customer handling is worse than no display at all — it makes your brand look cheap. Specify the material (acrylic, wood, metal, or composite), request a weight test (a display that tips over when half-full is dangerous), and ask about modularity (can you add more tiers or swap out panels as your line grows?).',
  },
  {
    question: 'How often should I refresh my sunglasses display layout?',
    answer: 'Full display refresh every season (4× per year), minor rotation every 2-3 weeks. The seasonal refresh should change the visual theme: beach/summer → autumn/warm tones → winter/snow sports → spring/fresh colors. The minor rotation should cycle new arrivals to the front, move slow sellers to secondary positions, and group complementary styles together (aviators with aviators, wayfarers with wayfarers). Customers who visit a store monthly will notice and appreciate that the display is not frozen in time. The worst thing you can do is let the same 12 pairs sit in the same positions for six months — it signals that nothing is selling and the store is stagnant. Even if inventory has not changed, rearranging the existing display creates the impression of freshness.',
  },
];

const PUBLISH_DATE = '2026-08-04';
const SLUG = 'sunglasses-retail-display-merchandising';

export default function SunglassesRetailDisplayMerchandising() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog/' },
          { name: 'Retail Display & Merchandising Guide' },
        ]} />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ═══════ SCHEMA: Article ═══════ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Sunglasses Retail Display & Merchandising: How to Make Wholesale Eyewear Sell",
          "datePublished": PUBLISH_DATE,
          "dateModified": PUBLISH_DATE,
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "Practical guide to sunglasses retail displays: counter spinners, wall racks, POP materials, and display strategies that increase in-store sell-through rates.",
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
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Retail Operations</span>
            <span>{PUBLISH_DATE}</span>
            <span>•</span>
            <span>12 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sunglasses Retail Display &amp; Merchandising: How to Make Wholesale Eyewear Move Off the Shelf
          </h1>
          <p className="text-xl text-gray-600">
            I have walked into hundreds of optical shops, surf stores, and airport kiosks over 20 years in this business. The stores that move inventory are not always the ones with the best products. They are the ones where the product is impossible to ignore. Here is what actually works.
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
            <li><a href="#display-types" className="text-primary-600 hover:underline">Display Types: Counter, Wall, Floor — Which One Where</a></li>
            <li><a href="#lighting" className="text-primary-600 hover:underline">Lighting: The Silent Salesperson</a></li>
            <li><a href="#layout" className="text-primary-600 hover:underline">Store Layout: Where Sunglasses Should Live in Your Retail Space</a></li>
            <li><a href="#pop-materials" className="text-primary-600 hover:underline">POP Materials: What the Factory Can Make for You</a></li>
            <li><a href="#seasonal" className="text-primary-600 hover:underline">Seasonal Merchandising: Why January Sunglasses Need a Different Display Than July</a></li>
            <li><a href="#mistakes" className="text-primary-600 hover:underline">5 Display Mistakes That Are Costing You Sales Right Now</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Frequently Asked Questions</a></li>
          </ul>
        </nav>

        {/* ═══════ ARTICLE BODY ═══════ */}
        <div className="prose prose-lg max-w-none">

          <KeyTakeaways items={takeaways} />
          <QuickStats stats={quickStats} title="Quick Facts" />

          {/* ─── Section 1: Display Types ─── */}
          <h2 id="display-types" className="text-3xl font-bold mt-16 mb-6">Display Types: Counter, Wall, Floor — Which One Where</h2>
          
          <p>Most retailers buy whatever display rack their supplier offers and call it done. That is a mistake. Where you put the display matters as much as the display itself, and different positions in a store call for different display formats.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Countertop Spinner Racks — The Workhorse</h3>
          
          <p>The rotating counter display is the most effective format for sunglasses under $50. It sits at eye level. It invites interaction — customers naturally reach out and spin it. Every turn reveals new options, which extends browsing time. The average customer spends 40-90 seconds at a spinner display versus 15-30 seconds at a static wall rack. That extra dwell time translates directly to sales.</p>
          
          <p>Spinner racks hold 48-96 pairs depending on size. The 72-pair format is the standard: three tiers of 24 pairs each. Put the newest arrivals on the top tier (most visible), the bestsellers in the middle (easiest to reach), and the clearance or seasonal overflow on the bottom. Top tier pairs should face slightly upward — a 10-15 degree tilt — so customers see the lenses, not the top of the frame.</p>
          
          <p><strong>Cost:</strong> $15-40/unit in bulk from a Chinese factory, $50-120 from domestic display suppliers. The factory version is almost always the same acrylic or ABS plastic as the domestic version — you are paying for domestic warehousing and faster shipping, not better quality.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Wall-Mounted Display Cases — The Premium Option</h3>
          
          <p>Glass-front wall cases signal quality. When a customer sees a pair of sunglasses behind glass, they assume it costs more — and they are usually right. Reserve wall cases for your $50+ retail SKUs. The glass also serves a practical purpose: expensive frames get handled less, which means fewer scratches, fewer bent temples, and fewer "this one is damaged, do you have another" conversations with customers.</p>
          
          <p>The ideal wall case setup: 4-6 shelves, each holding 8-12 pairs, faces angled 20-30 degrees downward so customers can see the full front of each frame from standing height. LED strip lighting inside the case (top and bottom edges, diffused) creates the even glow that makes acetate frames look rich and metal frames look polished. A mirror mounted on the side of the case or on the adjacent wall is non-negotiable — customers need to see themselves wearing the glasses before they buy.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Tiered Counter Trays — The Impulse Driver</h3>
          
          <p>Flat or slightly angled acrylic trays at the register are the cheapest display format and one of the most effective. A three-tier tray (small/medium/large steps) holds 18-24 pairs. Position these near your checkout counter with sunglasses in the $10-25 range and watch them disappear. The psychology is simple: the customer is already standing there, they have already decided to spend money, and $15 more for a second pair of sunglasses does not feel like a decision — it feels like an afterthought.</p>
          
          <p>One specific tip: put the most colorful, attention-grabbing frames on these trays. Mirror lenses, bright acetate colors, unusual shapes. Neutral black and tortoise frames belong on the wall — they are a considered purchase. The register tray is for "oh, that is fun, I will take it" purchases.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Floor-Standing Rotating Towers — For High-Traffic Retail</h3>
          
          <p>Floor towers hold 120-200 pairs and work best in high-traffic retail environments — department stores, airport shops, large optical chains. They are too big for a boutique, where they dominate the space. The advantage is sheer capacity: one tower can display an entire brand line. The disadvantage is that customers have to bend down for the bottom tiers, which means those slots sell 40-50% less than the middle and top tiers. Use the bottom two tiers for overstock or accessories (cases, cleaning cloths, straps) rather than primary inventory.</p>

          {/* ─── Section 2: Lighting ─── */}
          <h2 id="lighting" className="text-3xl font-bold mt-16 mb-6">Lighting: The Silent Salesperson</h2>
          
          <p>I once visited a buyer's store in Hamburg that had beautiful frames — Italian acetate, German hinges, premium polarized lenses — displayed under standard fluorescent ceiling lights. The frames looked grey and flat. The polarized lenses had a greasy-looking reflection that was actually the fluorescent tube bouncing off the lens coating. They were selling maybe 15 pairs a week in a prime shopping district.</p>
          
          <p>They switched to 4000K LED track lighting with 92 CRI. Same frames. Same prices. Same location. Sales went to 30+ pairs a week within two months. This is not a fairy tale — I saw the numbers.</p>
          
          <p>Here is what you need to know about lighting sunglasses:</p>
          
          <p><strong>Color temperature:</strong> 3500K-4000K is the sweet spot. 3000K (warm white) is too yellow — it makes grey lenses look brown and distorts frame color. 5000K+ (cool white/daylight) is too harsh — it makes every frame look clinical and washes out warm acetate tones. 4000K is neutral white with just enough warmth to make skin tones and frame materials look natural.</p>
          
          <p><strong>CRI (Color Rendering Index):</strong> 90 minimum, 95+ ideal. CRI measures how accurately a light source renders colors compared to natural sunlight. Standard fluorescent tubes are typically 70-80 CRI, which is why everything looks slightly off under office lighting. LED with 90+ CRI costs maybe 20% more per fixture and makes a visible difference in how your products look.</p>
          
          <p><strong>Positioning:</strong> Each display section needs its own light. Do not rely on ambient ceiling lighting — it creates shadows at the wrong angles and leaves half your inventory in the dark. For wall displays, mount LED strips inside the case. For counter spinners, use an adjustable desk lamp or overhead track light positioned at a 30-45 degree angle from above. The goal is even illumination across all frames with no hot spots and no dead zones.</p>
          
          <p><strong>Avoid these:</strong> Fluorescent tubes (green cast, low CRI, flicker that some customers can perceive), bare LED bulbs without diffusers (creates harsh shadows and hot spots on glossy lenses), and direct sunlight through a window (UV degrades frame materials over time and creates unflattering shadows that change throughout the day).</p>

          {/* ─── Section 3: Store Layout ─── */}
          <h2 id="layout" className="text-3xl font-bold mt-16 mb-6">Store Layout: Where Sunglasses Should Live in Your Retail Space</h2>
          
          <p>If you run an optical shop, sunglasses should be the first thing customers see when they walk in — not tucked away in a corner behind the prescription lens display. There is a reason for this: prescription eyewear is a need-based purchase. Someone comes in because they have to — their glasses broke, their prescription changed, their kid needs new frames before school starts. Sunglasses are a want-based purchase. They are fun. They make people feel good. Put the fun stuff upfront to create a positive first impression that carries through to the need-based purchase.</p>
          
          <p>For non-optical retail (surf shops, department stores, clothing boutiques, airport kiosks), the rule is different: sunglasses should be near the entrance but not blocking it. The ideal spot is 3-5 meters inside the door, on the right side (most people's natural scanning direction in Western retail environments — reverse to left side for right-to-left reading cultures). This position catches customers after they have oriented themselves to the space but before they have committed to browsing a specific department. It is the "oh, sunglasses" moment — they were not planning to look, but now they are.</p>
          
          <p><strong>The mirror rule:</strong> Every sunglasses display area needs a mirror within arm's reach. Not across the room. Not "there is one near the fitting rooms." Within arm's reach. If a customer has to walk 10 steps to see themselves wearing a pair of sunglasses, you have just introduced a 10-step opportunity for them to put the glasses down and walk away. Wall-mounted mirrors next to the display case. Handheld mirrors on the counter. A full-length mirror nearby for the "how do these look with my outfit" check. Mirrors are the cheapest sales tool in retail and the most frequently missing one.</p>
          
          <p><strong>Traffic flow:</strong> If your store layout forces customers to walk past the sunglasses display to reach another section (fitting rooms, checkout, restrooms), you are getting free impressions. Position the display along a natural traffic path, not in a dead-end corner. Every customer who walks past sees the display whether they intend to or not. Some percentage of them will stop.</p>

          {/* ─── Section 4: POP Materials ─── */}
          <h2 id="pop-materials" className="text-3xl font-bold mt-16 mb-6">POP Materials: What the Factory Can Make for You</h2>
          
          <p>Point of Purchase materials — the signage, brand cards, and promotional displays that sit next to your product — are something most wholesale buyers overlook. They should not. Good POP materials answer the three questions every customer has when they see a new brand for the first time: "What is this?" "Why should I care?" and "How much is it?"</p>
          
          <p>Here is what Chinese sunglass factories can produce as part of your wholesale order:</p>
          
          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">POP Item</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Bulk Cost</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">MOQ</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Brand header card (counter stand)</td>
                  <td className="border border-gray-300 px-4 py-2">$1.50–3.00</td>
                  <td className="border border-gray-300 px-4 py-2">100</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">Acrylic or thick cardstock, full-color print</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Counter spinner rack (branded)</td>
                  <td className="border border-gray-300 px-4 py-2">$15–40</td>
                  <td className="border border-gray-300 px-4 py-2">50</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">3-tier acrylic with logo print</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Window display stand</td>
                  <td className="border border-gray-300 px-4 py-2">$5–15</td>
                  <td className="border border-gray-300 px-4 py-2">100</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">Single-pair stand, various materials</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Wall poster (brand/collection)</td>
                  <td className="border border-gray-300 px-4 py-2">$1–3</td>
                  <td className="border border-gray-300 px-4 py-2">200</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">A3/A2 size, matte or glossy</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Lens feature card (tent card)</td>
                  <td className="border border-gray-300 px-4 py-2">$0.30–0.80</td>
                  <td className="border border-gray-300 px-4 py-2">500</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">Small folded card explaining lens tech</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Floor tower display (branded)</td>
                  <td className="border border-gray-300 px-4 py-2">$80–200</td>
                  <td className="border border-gray-300 px-4 py-2">20</td>
                  <td className="border border-gray-300 px-4 py-2 text-gray-600">Metal + acrylic, 150-200 pair capacity</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p>The most effective POP item, in my experience, is the lens feature card. It is a small folded card about the size of a business card that sits next to the display and explains — in two or three bullet points — what makes the lenses special. "UV400 Protection," "Polarized — Cuts Glare on Water &amp; Road," "Photochromic — Darkens in Sunlight." This tiny piece of paper answers the "why should I care" question without requiring a salesperson. It costs 30 cents and it moves product. I have seen lens feature cards increase sell-through on polarized sunglasses by 15-20% in stores where customers browse without staff assistance.</p>

          {/* ─── Section 5: Seasonal ─── */}
          <h2 id="seasonal" className="text-3xl font-bold mt-16 mb-6">Seasonal Merchandising: Why January Sunglasses Need a Different Display Than July</h2>
          
          <p>Most retailers treat sunglasses as a summer product. They put out a full display in May and take it down in September. This leaves money on the table for eight months of the year.</p>
          
          <p>Sunglasses sell year-round — the use case just shifts by season. Summer is beach, pool, outdoor festivals. Winter is snow sports, low-angle sun during the short daylight hours, and glare off wet roads. Spring and fall are driving, hiking, and the transitional light conditions where photochromic and light-tinted lenses shine. Your display should reflect this.</p>
          
          <p><strong>Summer display (May-August):</strong> Bright, energetic. Beach props — sand, shells, a small beach towel as a display mat. Focus on polarized lenses, mirror coatings, bright frame colors. The message is fun, sun, style.</p>
          
          <p><strong>Winter display (November-February):</strong> Clean, crisp, performance-focused. White display surfaces, metallic accents. Feature wrap-around sport frames, polarized lenses for snow glare, photochromic lenses. Include a small sign: "Snow glare is 3× more intense than beach glare — protect your eyes on the slopes."</p>
          
          <p><strong>Spring/Fall display (March-April, September-October):</strong> This is transition season and the best time to push light-tinted and photochromic lenses. Display themes: driving, outdoor adventure, "one pair for changing conditions." Feature brown and green lenses (best contrast in variable light).</p>
          
          <p>Even if you do not change a single frame in your inventory, changing the visual theme of your display signals to customers that you are current, you understand the seasons, and you have thought about what they actually need right now. A ski-themed January display in a surf shop gets attention because it is unexpected — and it reminds surfers that they need sunglasses on the mountain too.</p>

          {/* ─── Section 6: Mistakes ─── */}
          <h2 id="mistakes" className="text-3xl font-bold mt-16 mb-6">5 Display Mistakes That Are Costing You Sales Right Now</h2>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Mistake 1: Displaying Every SKU You Own</h3>
          <p>More choices do not lead to more sales — they lead to decision paralysis. The customer who looks at 60 pairs of sunglasses and cannot decide will buy nothing. Curate your display. Show 20-30 pairs maximum in a single viewing area, grouped by style (aviators together, wayfarers together, sport frames together). If a customer wants something you do not have on display, they will ask. The back room is for inventory. The display is for selling.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Mistake 2: Dirty or Dusty Frames on Display</h3>
          <p>I cannot tell you how many stores I have walked into where the display frames are covered in fingerprint smudges and dust. Customers touch sunglasses — that is the point. But if the frames on display look dirty, customers assume the product is old, unwanted, or poorly made. Wipe down every frame on display once a day. It takes 10 minutes and it is the highest-ROI activity in retail.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Mistake 3: Same Display for 6+ Months</h3>
          <p>When customers see the same display every time they visit, they stop seeing it at all. Display blindness is real. If you cannot change inventory, change layout. Swap the left and right sides. Move the counter spinner to a different counter. Rotate which frames are at eye level. The goal is to make the display look different enough that returning customers notice and take a fresh look.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Mistake 4: No Mirror, or Mirror in the Wrong Place</h3>
          <p>I already said this but it bears repeating because it is the most common mistake in eyewear retail. No mirror = no purchase. Mirror across the room = purchase abandoned halfway there. Put a mirror where the customer is standing right now.</p>
          
          <h3 className="text-2xl font-bold mt-10 mb-4">Mistake 5: Using the Display as Storage</h3>
          <p>The counter spinner is for selling, not for storing backup inventory. When a display gets stuffed with extra pairs in front of the displayed ones, or when tags and plastic wraps are left on because "the customer can just take them off," the message to the customer is: this is a warehouse shelf, not a curated retail experience. If you need storage, buy a storage cabinet. The display is sacred.</p>

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
            <h2 className="text-3xl font-bold mb-4">Want Branded Displays With Your Wholesale Order?</h2>
            <p className="text-xl mb-6 opacity-90">We produce counter spinners, wall displays, POP signage, and branded packaging alongside your sunglasses — one shipment, one factory, everything branded to your specs. Send us your logo and display requirements for a quote.</p>
            <Link
              href="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Request Display &amp; POP Quote
            </Link>
          </div>

          {/* ═══════ RELATED CONTENT ═══════ */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">More From the Factory Floor</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/custom-sunglasses-packaging" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Custom Sunglasses Packaging Guide</h3>
                <p className="text-gray-600 text-sm">Boxes, pouches, cases — what each tier costs and what your customers expect.</p>
              </Link>
              <Link href="/blog/start-sunglasses-brand" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">How to Start a Sunglasses Brand</h3>
                <p className="text-gray-600 text-sm">The complete roadmap from concept to first shipment, factory-direct.</p>
              </Link>
              <Link href="/contact" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Contact Us</h3>
                <p className="text-gray-600 text-sm">Get a quote for your custom wholesale sunglasses and display order.</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
