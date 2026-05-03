import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TR90 vs Acetate vs Metal Sunglasses: Which Frame Material Is Right for Your Brand?',
  description: 'A factory owner breaks down TR90, acetate, and metal sunglasses frames — real cost data, weight comparisons, durability tests, and which material works best for different brand strategies.',
  keywords: 'sunglasses frame material comparison, TR90 sunglasses, acetate sunglasses frames, metal sunglasses frames, TR90 vs acetate, frame material cost, sunglasses manufacturing materials',
}

export default function Tr90VsAcetateVsMetalPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* JSON-LD Article Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "TR90 vs Acetate vs Metal Sunglasses: Which Frame Material Is Right for Your Brand?",
          "datePublished": "2026-05-03",
          "dateModified": "2026-05-03",
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "A factory owner breaks down TR90, acetate, and metal sunglasses frames — real cost data, weight comparisons, durability, and which material fits your brand.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/blog/tr90-vs-acetate-vs-metal" }
        })}} />

        {/* FAQ Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is TR90 and why is it used in sunglasses?",
              "acceptedAnswer": { "@type": "Answer", "text": "TR90 is a thermoplastic polyamide (nylon-based polymer) originally developed for medical and military use. It's extremely lightweight — about 15-20 grams for a full frame — and nearly unbreakable under normal use. It's become the go-to material for sport and lifestyle sunglasses because it flexes instead of snapping, resists sweat and chemicals, and costs $3-8 per frame at wholesale." }
            },
            {
              "@type": "Question",
              "name": "Is acetate better than TR90 for sunglasses?",
              "acceptedAnswer": { "@type": "Answer", "text": "It depends on your brand positioning. Acetate looks and feels more premium — richer colors, deeper patterns, heavier weight that signals quality. But TR90 is lighter, more durable, and cheaper. If you're building a fashion or luxury brand, acetate wins. If you're targeting sports, outdoor, or value-conscious customers, TR90 is the better choice." }
            },
            {
              "@type": "Question",
              "name": "How much do different sunglasses frame materials cost at wholesale?",
              "acceptedAnswer": { "@type": "Answer", "text": "Real factory pricing: TR90 frames run $3-8 per pair, acetate frames cost $5-11, and metal frames range from $8-22 depending on the alloy and construction. These are frame-only costs — add $1.50-8 for lenses depending on type and coatings." }
            },
            {
              "@type": "Question",
              "name": "Which sunglasses frame material is most durable?",
              "acceptedAnswer": { "@type": "Answer", "text": "TR90 wins on impact resistance — it can flex 90+ degrees without breaking and survives being sat on, stepped on, or dropped repeatedly. Metal is rigid and can bend permanently or lose its shape. Acetate is between the two — it's tough but can crack on hard impact. For durability in active use, TR90 is king." }
            },
            {
              "@type": "Question",
              "name": "Can I mix frame materials in my sunglasses line?",
              "acceptedAnswer": { "@type": "Answer", "text": "Absolutely — and most successful brands do exactly that. A typical brand might have TR90 sport frames at $29-49 retail, acetate fashion frames at $79-149, and a couple of metal aviators at $99-179. Mixing materials lets you cover different price points and customer segments without diluting your brand." }
            }
          ]
        })}} />

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Materials</span>
            <span>May 3, 2026</span>
            <span>•</span>
            <span>14 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            TR90 vs Acetate vs Metal Sunglasses: Which Frame Material Is Right for Your Brand?
          </h1>
          <p className="text-xl text-gray-600">
            Every week, someone asks me: &quot;Jacky, which frame material should I use?&quot; 
            After 20 years and about 12 million frames, here&apos;s the real answer — with actual cost data from our production floor.
          </p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div>
              <div className="font-medium text-gray-900">Jacky Chen</div>
              <div className="text-sm text-gray-500">Founder, EyeView Sunglasses</div>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <nav className="bg-gray-100 rounded-xl p-6 mb-12">
          <h2 className="font-bold mb-4">Table of Contents</h2>
          <ul className="space-y-2">
            <li><a href="#why-material-matters" className="text-primary-600 hover:underline">Why Frame Material Matters More Than You Think</a></li>
            <li><a href="#tr90-breakdown" className="text-primary-600 hover:underline">TR90: The Athlete</a></li>
            <li><a href="#acetate-breakdown" className="text-primary-600 hover:underline">Acetate: The Fashion Icon</a></li>
            <li><a href="#metal-breakdown" className="text-primary-600 hover:underline">Metal: The Classic</a></li>
            <li><a href="#comparison-table" className="text-primary-600 hover:underline">Side-by-Side Comparison Table</a></li>
            <li><a href="#cost-deep-dive" className="text-primary-600 hover:underline">Real Cost Breakdown From the Factory Floor</a></li>
            <li><a href="#retail-pricing" className="text-primary-600 hover:underline">Retail Pricing Strategy by Material</a></li>
            <li><a href="#best-use-cases" className="text-primary-600 hover:underline">Which Material for Which Brand?</a></li>
            <li><a href="#mixing-materials" className="text-primary-600 hover:underline">The Smart Play: Mix Your Materials</a></li>
            <li><a href="#production-realities" className="text-primary-600 hover:underline">Production Realities Nobody Talks About</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Questions I Get Asked Every Week</a></li>
          </ul>
        </nav>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            A brand owner from Portland called me last month. She&apos;d been going back and forth between TR90 and acetate for six weeks. 
            Her designer wanted acetate. Her accountant wanted TR90. Her Instagram followers kept commenting &quot;love the metal vibes&quot; 
            on her mood boards. She was stuck.
          </p>
          <p>
            I told her what I tell everyone: there&apos;s no universally &quot;best&quot; frame material. There&apos;s only the best material 
            <em>for your brand, your customers, and your budget</em>. And after two decades of bending, breaking, and 
            building frames from every material on the market, I can tell you exactly how to make that call.
          </p>

          {/* Why Material Matters */}
          <h2 id="why-material-matters" className="text-3xl font-bold mt-16 mb-6">Why Frame Material Matters More Than You Think</h2>
          <p>
            Here&apos;s something that surprised me early in my career: customers can&apos;t usually name the material of 
            their sunglasses. They don&apos;t walk into a store and say &quot;I&apos;d like a pair of thermoplastic polyamide frames, please.&quot;
          </p>
          <p>
            But they <em>feel</em> the difference instantly. They pick up a pair and within three seconds they&apos;ve made a 
            judgment: &quot;these feel cheap&quot; or &quot;these feel expensive.&quot; That gut reaction? It&apos;s almost entirely about the material. 
            The weight in their hand. The flex when they open the temples. The sound the hinge makes. The texture against their skin.
          </p>
          <p>
            Frame material determines your manufacturing cost, your retail price ceiling, your target customer, your brand 
            perception, and — honestly — whether your product ends up on someone&apos;s face or in a drawer after one wear. 
            So yeah, it matters.
          </p>

          {/* TR90 Breakdown */}
          <h2 id="tr90-breakdown" className="text-3xl font-bold mt-16 mb-6">TR90: The Athlete</h2>
          <p>
            <a href="https://en.wikipedia.org/wiki/Polyamide" target="_blank" rel="noopener" className="text-primary-600 hover:underline">TR90 is a thermoplastic polyamide</a> — basically 
            a super-engineered nylon. It was originally developed for medical equipment and military applications where you 
            need something that won&apos;t break, won&apos;t irritate skin, and weighs almost nothing. The eyewear industry borrowed it, 
            and now it&apos;s everywhere.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">What TR90 Does Well</h3>
          <p>
            <strong>Weight:</strong> A full TR90 frame weighs 15-20 grams. For reference, that&apos;s about the weight of four 
            coins in your pocket. I have clients whose customers wear TR90 frames for 14-hour days and forget they&apos;re on. 
            No red marks on the nose, no sore spots behind the ears. For sport and active use, nothing beats it.
          </p>
          <p>
            <strong>Durability:</strong> I keep a TR90 frame on my desk that I use for demos. I bend it, twist it, sit on it, 
            throw it across the room. Been doing that for three years with the same pair. Still works perfectly. TR90 has 
            what engineers call &quot;memory&quot; — you can deform it and it springs back to its original shape. Try that with acetate 
            and you&apos;ll hear a crack. Try it with metal and it stays bent.
          </p>
          <p>
            <strong>Chemical resistance:</strong> Sweat, sunscreen, saltwater, bug spray — none of it affects TR90. This 
            matters more than people realize. I&apos;ve seen acetate frames discolored by sunscreen after one summer. 
            TR90 shrugs it off.
          </p>
          <p>
            <strong>Cost:</strong> TR90 injection molding is fast and efficient. The raw material is inexpensive, the 
            molds last for hundreds of thousands of cycles, and production speed is about 3x faster than acetate. 
            That translates directly to your bottom line.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Where TR90 Falls Short</h3>
          <p>
            <strong>Look and feel:</strong> I&apos;m going to be straight with you — TR90 looks like plastic. Because it is 
            plastic. High-end, engineered plastic, but plastic nonetheless. You won&apos;t get the depth of color or the rich 
            tortoiseshell patterns you get with acetate. Matte finishes look fine; glossy TR90 can look a bit toy-like 
            if not done carefully.
          </p>
          <p>
            <strong>Color range:</strong> Solid colors work great. Gradient effects, multi-color patterns, translucent 
            looks — those are limited compared to acetate. We can do about 40 standard colors in TR90 versus 200+ in acetate.
          </p>
          <p>
            <strong>Perception:</strong> Fair or not, TR90 doesn&apos;t scream &quot;luxury.&quot; Customers picking up a $150 frame expect 
            heft and warmth. TR90 feels light and smooth — great for sport, but some fashion buyers equate light with cheap.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-2">TR90 Quick Stats:</h3>
            <ul className="text-blue-800 space-y-1">
              <li><strong>Frame weight:</strong> 15-20g</li>
              <li><strong>Factory cost:</strong> $3-8 per frame</li>
              <li><strong>Typical retail range:</strong> $19-69</li>
              <li><strong>Production speed:</strong> Fast — injection molded in seconds</li>
              <li><strong>Best for:</strong> Sport, outdoor, kids, value brands</li>
              <li><strong>Flex test:</strong> Bends 90°+ without breaking</li>
            </ul>
          </div>

          {/* Acetate Breakdown */}
          <h2 id="acetate-breakdown" className="text-3xl font-bold mt-16 mb-6">Acetate: The Fashion Icon</h2>
          <p>
            Acetate is the material that built the luxury eyewear industry. When you think of Ray-Ban Wayfarers, 
            Tom Ford frames, or Celine oversized sunglasses — that&apos;s acetate. It&apos;s made from cotton fibers 
            and wood pulp processed into cellulose acetate sheets, which are then cut, shaped, and polished by hand. 
            The best stuff comes from <a href="https://www.mazzucchelli1849.it/en/" target="_blank" rel="noopener" className="text-primary-600 hover:underline">Mazzucchelli in Italy</a>, 
            who&apos;ve been making it since 1849.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">What Acetate Does Well</h3>
          <p>
            <strong>Aesthetics:</strong> Nothing else comes close. Acetate has depth. Hold a good tortoiseshell acetate 
            frame up to the light and you&apos;ll see layers of amber, brown, and gold swirling through the material — 
            each pair slightly different. That&apos;s not a printed pattern; it&apos;s literally built into the material 
            at the sheet level. You can&apos;t fake that with plastic.
          </p>
          <p>
            <strong>Color range:</strong> 200+ colors and patterns, from classic black to wild multi-layer designs 
            with contrasting inner and outer colors. Translucent, opaque, gradient, marbled — acetate can do it all. 
            This is why fashion brands love it. Every season you can introduce new colorways without changing 
            the frame shape.
          </p>
          <p>
            <strong>Premium perception:</strong> Acetate has weight — 25-35 grams for a typical frame. It warms to 
            skin temperature. It makes a satisfying &quot;click&quot; when the hinges close. These are tiny details, but they 
            add up to a feeling of quality that justifies premium pricing. A customer holding an acetate frame 
            instinctively expects to pay more — and they&apos;re willing to.
          </p>
          <p>
            <strong>Adjustability:</strong> Heat an acetate frame gently and you can reshape it to fit any face. 
            Opticians love this. TR90 and metal can be adjusted too, but acetate gives the most precise, permanent fit.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Where Acetate Falls Short</h3>
          <p>
            <strong>Durability under stress:</strong> Acetate doesn&apos;t flex like TR90. Sit on an acetate frame 
            and there&apos;s a real chance it cracks. Drop it on concrete and the temple tips can chip. It&apos;s not 
            fragile — it&apos;s tougher than glass — but it doesn&apos;t have that rubber-like resilience.
          </p>
          <p>
            <strong>Chemical sensitivity:</strong> Sunscreen, alcohol-based cleaners, and some perfumes can 
            damage acetate over time. I always tell clients to include a care card with acetate frames — &quot;clean 
            with water and a soft cloth, avoid chemical sprays.&quot; It&apos;s not high-maintenance, but it&apos;s not 
            bulletproof either.
          </p>
          <p>
            <strong>Production time:</strong> Acetate frames take 3-5x longer to produce than TR90. Each frame 
            is cut from sheet stock, then goes through tumbling, hand-polishing, and multiple finishing steps. 
            A TR90 frame is injection-molded in seconds. An acetate frame takes days of processing. That 
            labor shows up in your unit cost.
          </p>
          <p>
            <strong>Weight:</strong> 25-35 grams versus 15-20 for TR90. Some people find acetate frames heavy 
            after extended wear, especially larger styles. For all-day sport use, it&apos;s not ideal.
          </p>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-green-900 mb-2">Acetate Quick Stats:</h3>
            <ul className="text-green-800 space-y-1">
              <li><strong>Frame weight:</strong> 25-35g</li>
              <li><strong>Factory cost:</strong> $5-11 per frame</li>
              <li><strong>Typical retail range:</strong> $49-199</li>
              <li><strong>Production speed:</strong> Slow — multi-day process per frame</li>
              <li><strong>Best for:</strong> Fashion, lifestyle, premium, luxury brands</li>
              <li><strong>Flex test:</strong> Moderate — resists bending, can crack under force</li>
            </ul>
          </div>

          {/* Metal Breakdown */}
          <h2 id="metal-breakdown" className="text-3xl font-bold mt-16 mb-6">Metal: The Classic</h2>
          <p>
            Metal frames have been around since the 1700s. Benjamin Franklin wore metal spectacles. The 
            aviator — arguably the most iconic sunglasses shape ever — is a metal frame. When you think 
            &quot;classic,&quot; you think metal.
          </p>
          <p>
            Today&apos;s metal sunglasses use stainless steel, titanium, aluminum, nickel alloys, or 
            Monel (a nickel-copper blend). Each alloy has different properties, and the choice dramatically 
            affects both the feel and the cost.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">What Metal Does Well</h3>
          <p>
            <strong>Thin, elegant profiles:</strong> Metal lets you create frames that are impossibly thin. 
            A wire-frame metal design can be 1-2mm thick — try that with acetate or TR90 and it&apos;d snap. 
            If your brand aesthetic is minimalist, sleek, or architectural, metal is your material.
          </p>
          <p>
            <strong>Timeless appeal:</strong> Metal{' '}
            <Link href="/products/aviator" className="text-primary-600 hover:underline">aviators</Link> have 
            been in style for 90 years and counting. The same basic metal frame shapes sell decade after decade. 
            If you&apos;re building a &quot;buy it for life&quot; brand, metal communicates permanence in a way plastic never will.
          </p>
          <p>
            <strong>Adjustability:</strong> A good optician can fine-tune a metal frame with hand tools in minutes. 
            Bend the nose pads, adjust the temple curve, tighten the hinges. Metal is the most adjustable 
            frame material, which means better fit across different face shapes.
          </p>
          <p>
            <strong>Weight range:</strong> This one surprises people. Titanium frames can be as light as 12-15 grams — 
            lighter than TR90. Stainless steel is heavier at 25-35 grams. So &quot;metal is heavy&quot; isn&apos;t always true; 
            it depends on the alloy.
          </p>
          <p>
            <strong>Premium perception:</strong> Metal frames feel expensive. The cool touch of brushed stainless 
            steel, the flex of titanium, the gleam of polished gold-tone — these are sensory cues that justify 
            premium pricing. Some of our best-selling OEM styles are metal frames retailing at $129-179.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Where Metal Falls Short</h3>
          <p>
            <strong>Cost:</strong> Metal is the most expensive frame material across the board. Raw material 
            costs are higher, manufacturing involves more steps (die-casting, soldering, plating, polishing), 
            and skilled labor requirements push the price up further. A basic stainless steel frame costs 
            us $8-12 to produce; titanium runs $15-22.
          </p>
          <p>
            <strong>Corrosion:</strong> Cheaper metal alloys can corrode, especially around the nose pads and 
            hinge areas where sweat collects. We plate everything to prevent this, but plating wears over time. 
            Titanium is the exception — it&apos;s naturally corrosion-resistant, which is why it costs more.
          </p>
          <p>
            <strong>Permanent deformation:</strong> Bend a metal frame past its elastic limit and it stays bent. 
            Unlike TR90 which springs back, metal holds whatever shape you give it — intentional or not. 
            I&apos;ve seen metal frames ruined by being shoved into a back pocket.
          </p>
          <p>
            <strong>Skin allergies:</strong> Nickel allergy affects about 10-15% of the population. If your 
            metal frames contain nickel (and most cheap ones do), a portion of your customers will get 
            red, itchy marks on their nose and ears. We use nickel-free alloys and hypoallergenic plating 
            to avoid this, but it adds cost.
          </p>
          <p>
            <strong>Limited color options:</strong> Metal frames are typically gold, silver, gunmetal, black, 
            or rose gold. You can do colored enamel accents, but you won&apos;t get the wild patterns and 
            colors available in acetate.
          </p>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-purple-900 mb-2">Metal Quick Stats:</h3>
            <ul className="text-purple-800 space-y-1">
              <li><strong>Frame weight:</strong> 12-35g (varies by alloy)</li>
              <li><strong>Factory cost:</strong> $8-22 per frame</li>
              <li><strong>Typical retail range:</strong> $59-249</li>
              <li><strong>Production speed:</strong> Medium — multi-step fabrication</li>
              <li><strong>Best for:</strong> Classic, minimalist, premium, professional brands</li>
              <li><strong>Flex test:</strong> Low — bends permanently under force</li>
            </ul>
          </div>

          {/* Comparison Table */}
          <h2 id="comparison-table" className="text-3xl font-bold mt-16 mb-6">Side-by-Side Comparison Table</h2>
          <p>
            Here&apos;s the cheat sheet I wish I&apos;d had when I started this business. Pin this to your wall.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left">Factor</th>
                  <th className="px-6 py-4 text-left">TR90</th>
                  <th className="px-6 py-4 text-left">Acetate</th>
                  <th className="px-6 py-4 text-left">Metal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Frame Weight</td><td className="px-6 py-4">15-20g</td><td className="px-6 py-4">25-35g</td><td className="px-6 py-4">12-35g</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Factory Cost (frame only)</td><td className="px-6 py-4">$3-8</td><td className="px-6 py-4">$5-11</td><td className="px-6 py-4">$8-22</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Typical Retail Price</td><td className="px-6 py-4">$19-69</td><td className="px-6 py-4">$49-199</td><td className="px-6 py-4">$59-249</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Impact Resistance</td><td className="px-6 py-4">⭐⭐⭐⭐⭐</td><td className="px-6 py-4">⭐⭐⭐</td><td className="px-6 py-4">⭐⭐</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Flexibility</td><td className="px-6 py-4">⭐⭐⭐⭐⭐</td><td className="px-6 py-4">⭐⭐</td><td className="px-6 py-4">⭐⭐</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Premium Look/Feel</td><td className="px-6 py-4">⭐⭐</td><td className="px-6 py-4">⭐⭐⭐⭐⭐</td><td className="px-6 py-4">⭐⭐⭐⭐</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Color Options</td><td className="px-6 py-4">~40 solid colors</td><td className="px-6 py-4">200+ patterns & colors</td><td className="px-6 py-4">5-8 metallic tones</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Production Speed</td><td className="px-6 py-4">Fast (seconds per frame)</td><td className="px-6 py-4">Slow (days per frame)</td><td className="px-6 py-4">Medium (hours per frame)</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Chemical Resistance</td><td className="px-6 py-4">Excellent</td><td className="px-6 py-4">Moderate</td><td className="px-6 py-4">Varies by alloy</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Adjustability</td><td className="px-6 py-4">Limited</td><td className="px-6 py-4">Good (with heat)</td><td className="px-6 py-4">Excellent</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Allergy Risk</td><td className="px-6 py-4">Very low</td><td className="px-6 py-4">Very low</td><td className="px-6 py-4">Moderate (nickel)</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Best For</td><td className="px-6 py-4">Sport, outdoor, kids, value</td><td className="px-6 py-4">Fashion, lifestyle, luxury</td><td className="px-6 py-4">Classic, minimalist, premium</td></tr>
              </tbody>
            </table>
          </div>

          {/* Cost Deep Dive */}
          <h2 id="cost-deep-dive" className="text-3xl font-bold mt-16 mb-6">Real Cost Breakdown From the Factory Floor</h2>
          <p>
            Let me give you the numbers nobody else publishes. These are actual production costs from our 
            factory — not estimates, not averages, but what you&apos;ll pay when you place an order.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">TR90 Frame Cost Breakdown</h3>
          <ul>
            <li><strong>Raw TR90 pellets:</strong> $0.80-1.20 per frame worth of material</li>
            <li><strong>Injection molding:</strong> $0.50-1.00 (cycle time is 30-60 seconds)</li>
            <li><strong>Hinges:</strong> $0.30-0.80 (spring hinges add $0.40)</li>
            <li><strong>Surface treatment:</strong> $0.20-0.50 (matte coating, soft-touch, etc.)</li>
            <li><strong>Assembly and QC:</strong> $0.40-0.80</li>
            <li><strong>Logo application:</strong> $0.10-0.30 (laser engraving or pad printing)</li>
            <li><strong>Total frame cost:</strong> $3-8 depending on complexity</li>
          </ul>
          <p>
            Check out our{' '}
            <Link href="/products/tr90" className="text-primary-600 hover:underline">TR90 collection</Link> to 
            see the range of styles possible at these price points.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Acetate Frame Cost Breakdown</h3>
          <ul>
            <li><strong>Acetate sheet:</strong> $1.50-3.00 per frame (Italian Mazzucchelli adds $1-2 premium over Chinese acetate)</li>
            <li><strong>CNC cutting:</strong> $0.60-1.00</li>
            <li><strong>Tumbling and polishing:</strong> $0.80-1.50 (this is where the magic happens — 24-48 hours of tumbling gives acetate its signature shine)</li>
            <li><strong>Hinges:</strong> $0.40-1.00 (five-barrel hinges for premium, three-barrel for standard)</li>
            <li><strong>Hand finishing:</strong> $0.50-1.50 (skilled workers inspect and touch up each frame)</li>
            <li><strong>Assembly and QC:</strong> $0.50-1.00</li>
            <li><strong>Logo application:</strong> $0.15-0.40 (metal logo plaques add more)</li>
            <li><strong>Total frame cost:</strong> $5-11 depending on acetate source and complexity</li>
          </ul>
          <p>
            Browse our{' '}
            <Link href="/products/acetate" className="text-primary-600 hover:underline">acetate frames</Link> and 
            you&apos;ll see the quality difference that extra cost buys.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Metal Frame Cost Breakdown</h3>
          <ul>
            <li><strong>Metal wire/sheet:</strong> $1.50-5.00 (stainless steel on the low end, titanium on the high end)</li>
            <li><strong>Stamping/die-casting:</strong> $1.00-3.00</li>
            <li><strong>Soldering:</strong> $0.80-1.50 (joining bridges, temples, end pieces)</li>
            <li><strong>Plating:</strong> $1.00-3.00 (IP plating for durability, PVD for luxury finish)</li>
            <li><strong>Nose pads and screws:</strong> $0.30-0.80</li>
            <li><strong>Polishing:</strong> $0.60-1.50</li>
            <li><strong>Assembly and QC:</strong> $0.80-1.50</li>
            <li><strong>Logo:</strong> $0.20-0.50</li>
            <li><strong>Total frame cost:</strong> $8-22 depending on alloy and finish</li>
          </ul>
          <p>
            Our{' '}
            <Link href="/products/aviator" className="text-primary-600 hover:underline">aviator collection</Link> shows 
            what you can achieve with metal frames at different price tiers.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-amber-900 mb-2">💡 Remember: These Are Frame-Only Costs</h3>
            <p className="text-amber-800">
              Add $1.50-8 per pair for lenses (basic UV400 on the low end, polarized CR-39 on the high end), 
              $0.30-1.50 for packaging, and $0.50-2.00 for shipping per unit. Your total landed cost per pair 
              is typically 40-60% higher than the frame cost alone.
            </p>
          </div>

          {/* Retail Pricing */}
          <h2 id="retail-pricing" className="text-3xl font-bold mt-16 mb-6">Retail Pricing Strategy by Material</h2>
          <p>
            Material choice directly determines your retail price ceiling and margin structure. Here&apos;s what 
            I&apos;ve seen work for our most successful brand clients:
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">TR90 Retail Strategy</h3>
          <p>
            Landed cost: $6-14 per pair. Retail sweet spot: $29-59. That gives you a 4-5x markup, which is 
            healthy for DTC brands. At $69+ retail, customers start comparing your TR90 frames to acetate 
            options at the same price — and the acetate feels more premium. Keep TR90 in the value-to-midrange zone.
          </p>
          <p>
            Exception: sport-specific TR90 frames (cycling, running, fishing) can retail at $79-99 because 
            customers are paying for function, not fashion cachet.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Acetate Retail Strategy</h3>
          <p>
            Landed cost: $9-18 per pair. Retail sweet spot: $79-149. This is where most independent fashion 
            eyewear brands live — and it&apos;s a proven range. Italian acetate with polarized lenses? You can 
            push to $149-199 retail if your branding supports it. Think{' '}
            <Link href="/products/wayfarer" className="text-primary-600 hover:underline">wayfarer-style frames</Link> in 
            unique colorways with premium packaging.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Metal Retail Strategy</h3>
          <p>
            Landed cost: $14-32 per pair. Retail sweet spot: $89-179. Metal gives you the widest pricing 
            range because the alloy choice creates massive cost differences. A basic stainless steel frame 
            at $89 retail and a titanium frame at $249 can both be profitable.
          </p>

          {/* Best Use Cases */}
          <h2 id="best-use-cases" className="text-3xl font-bold mt-16 mb-6">Which Material for Which Brand?</h2>
          <p>
            Let me paint some real scenarios based on brands we&apos;ve worked with:
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Scenario 1: Sport/Outdoor Brand</h3>
          <p>
            <strong>Go TR90.</strong> No question. A cycling brand from Colorado came to us needing frames that 
            survive crashes, don&apos;t slip with sweat, and weigh next to nothing. We made them a wraparound 
            TR90 frame with rubber nose pads and temple tips. Cost: $5.50 per frame. They retail at $49. 
            Their Amazon reviews are full of people saying &quot;I sat on them and they bounced back.&quot; That&apos;s TR90 doing its job.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Scenario 2: Fashion/Lifestyle Brand</h3>
          <p>
            <strong>Go acetate.</strong> A DTC brand from Brooklyn wanted chunky, bold frames in seasonal 
            colorways. We sourced custom acetate sheets — one season was emerald green with gold flecks, 
            another was dusty rose. The frames look like they cost $300. They retail at $129. The material 
            does half the marketing for you.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Scenario 3: Minimalist/Professional Brand</h3>
          <p>
            <strong>Go metal.</strong> A Scandinavian brand wanted ultra-thin, architectural frames in 
            brushed silver and matte black. We made them in stainless steel with Japanese beta-titanium 
            temples. Clean, precise, elegant. They retail at $159 and the target customer — urban 
            professionals — loves the &quot;less is more&quot; aesthetic.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Scenario 4: Kids/Family Brand</h3>
          <p>
            <strong>Go TR90.</strong> Kids destroy everything. A family brand needed frames that survive 
            being bent, chewed, thrown, and stepped on by toddlers. TR90 with integrated hinges (no 
            screws to swallow). $3.50 per frame. They sell sets of three for $39. The margins are 
            excellent and the return rate is near zero.
          </p>

          {/* Mixing Materials */}
          <h2 id="mixing-materials" className="text-3xl font-bold mt-16 mb-6">The Smart Play: Mix Your Materials</h2>
          <p>
            The best brands don&apos;t choose one material — they use all three strategically. Here&apos;s 
            a collection structure I recommend to new brand owners:
          </p>
          <ul>
            <li><strong>2-3 TR90 styles ($29-49 retail):</strong> Your entry-level. Gets customers in the door. 
            Sport and casual styles that sell on function and value.</li>
            <li><strong>3-4 acetate styles ($79-129 retail):</strong> Your core line. Fashion-forward designs 
            with seasonal colorways. This is where most of your revenue comes from.</li>
            <li><strong>1-2 metal styles ($99-179 retail):</strong> Your premium tier. Classic shapes that 
            give your brand a &quot;we do serious eyewear&quot; halo effect.</li>
          </ul>
          <p>
            This structure covers three price points, three customer types, and three use cases — all 
            under one brand. You&apos;re not leaving money on the table, and you&apos;re not forcing your brand 
            into a single box.
          </p>

          {/* Production Realities */}
          <h2 id="production-realities" className="text-3xl font-bold mt-16 mb-6">Production Realities Nobody Talks About</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4">MOQ Differences</h3>
          <p>
            TR90: 200-500 pieces per style (injection molds are expensive to make but cheap to run). 
            Acetate: 100-300 per style (no molds needed — cut from sheet). Metal: 300-1,000 per style 
            (die-casting molds are complex). If you&apos;re starting small, acetate actually has the 
            lowest barrier to entry per style.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Lead Time Differences</h3>
          <p>
            TR90: 25-35 days. Once the mold is made, frames come out fast. Acetate: 35-50 days. 
            The polishing and finishing stages can&apos;t be rushed without sacrificing quality. 
            Metal: 30-45 days. Plating is the bottleneck — you&apos;re essentially waiting for chemistry.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Quality Control Differences</h3>
          <p>
            TR90 QC is mostly automated — consistent injection molding means consistent output. 
            Acetate QC requires experienced eyes — every frame needs individual inspection because 
            the pattern placement varies. Metal QC focuses on plating adhesion and solder joints — 
            the failure modes are different. We use different inspection teams for each material 
            because the expertise doesn&apos;t transfer.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">One Thing I Wish More Buyers Knew</h3>
          <p>
            The frame material is only half the equation. A $3 TR90 frame with $5 polarized CR-39 
            lenses, premium spring hinges, and beautiful packaging can feel more premium than a 
            $10 acetate frame with basic UV400 lenses and cheap hinges. Don&apos;t blow your entire 
            budget on the frame and cheap out on everything else.
          </p>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Need Help Choosing?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Send me your brand concept and target retail price. I&apos;ll tell you exactly which 
              material — or combination of materials — gives you the best product at your price point. 
              No charge, no obligation. I do this because it saves us both time later.
            </p>
            <Link href="/contact" className="btn-primary">
              Get a Free Material Recommendation
            </Link>
          </div>

          {/* FAQ */}
          <h2 id="faq" className="text-3xl font-bold mt-16 mb-6">Questions I Get Asked Every Week</h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">What is TR90 and why is it used in sunglasses?</h3>
              <p className="text-gray-600">
                TR90 is a thermoplastic polyamide — a type of nylon-based polymer originally developed for 
                medical and military applications. It weighs about 15-20 grams for a full frame and is 
                nearly unbreakable under normal use. It&apos;s the go-to for sport and lifestyle sunglasses 
                because it flexes instead of snapping, resists sweat and chemicals, and costs $3-8 per 
                frame at wholesale.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Is acetate better than TR90 for sunglasses?</h3>
              <p className="text-gray-600">
                Depends on what you&apos;re selling. Acetate looks and feels more premium — richer colors, 
                deeper patterns, a satisfying weight that signals quality. TR90 is lighter, tougher, and 
                cheaper. Building a fashion brand? Acetate. Building a sport or value brand? TR90. 
                Building a full collection? Use both.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">How much do different sunglasses frame materials cost at wholesale?</h3>
              <p className="text-gray-600">
                Straight from our production floor: TR90 frames run $3-8 per pair, acetate costs $5-11, 
                and metal ranges from $8-22 depending on the alloy. These are frame-only prices — add 
                $1.50-8 for lenses, coatings, and assembly.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Which sunglasses frame material is most durable?</h3>
              <p className="text-gray-600">
                TR90 wins on impact resistance — it flexes 90°+ without breaking and survives being sat on, 
                stepped on, and dropped. Metal is rigid and can bend permanently. Acetate is tough but can 
                crack on hard impact. For active use and durability, TR90 is king.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Can I mix frame materials in my sunglasses line?</h3>
              <p className="text-gray-600">
                You absolutely should. Most successful brands run TR90 sport frames at $29-49, acetate 
                fashion frames at $79-149, and metal classics at $99-179. Mixing materials lets you cover 
                multiple price points and customer types without diluting your brand.
              </p>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">More From the Factory Floor</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/oem-vs-odm" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">OEM vs ODM Sunglasses: Complete Guide</h3>
                <p className="text-gray-600 text-sm">The honest version of OEM vs ODM — from someone who&apos;s been on the factory floor since 2006.</p>
              </Link>
              <Link href="/blog/sunglasses-lens-guide" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Sunglasses Lens Guide: Everything You Need to Know</h3>
                <p className="text-gray-600 text-sm">Frames get the attention, but lenses make the product. Here&apos;s the complete breakdown.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
