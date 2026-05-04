import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sunglasses Lens Types: Complete Buyer\'s Guide for 2026',
  description: 'A factory owner breaks down sunglasses lens materials, colors, coatings, and polarization. Real costs, honest comparisons, and advice from 20 years on the production line.',
  keywords: 'sunglasses lens types, polarized lenses, lens materials, CR-39 vs polycarbonate, sunglasses lens colors, photochromic lenses, lens coatings, TAC lenses',
  alternates: {
    canonical: '/blog/sunglasses-lens-guide',
    languages: {
      'en': '/blog/sunglasses-lens-guide',
      'es': '/es/blog/guia-lentes-gafas',
    },
  },
}

export default function SunglassesLensGuidePage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* JSON-LD Article Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Sunglasses Lens Types: Complete Buyer's Guide for 2026",
          "datePublished": "2026-04-25",
          "dateModified": "2026-05-02",
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "A factory owner breaks down sunglasses lens materials, colors, coatings, and polarization — with real costs and honest comparisons.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/blog/sunglasses-lens-guide" }
        })}} />

        {/* FAQ Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is the best lens material for sunglasses?",
              "acceptedAnswer": { "@type": "Answer", "text": "There's no single 'best' — it depends on use. Polycarbonate wins for impact resistance (sports, kids). CR-39 gives the sharpest optics for fashion and everyday wear. Glass is the gold standard for premium brands who want scratch resistance and perfect clarity. TAC is the budget king for polarized sunglasses. I've shipped millions of each." }
            },
            {
              "@type": "Question",
              "name": "Are polarized lenses worth it?",
              "acceptedAnswer": { "@type": "Answer", "text": "For driving, fishing, and water sports? 100% yes. The glare reduction is night-and-day different. For fashion and casual indoor/outdoor use? Nice to have but not essential. The wholesale cost difference is only $0.50-2.00 per pair, but you can charge 30-60% more at retail. So from a business perspective, polarized is almost always worth offering." }
            },
            {
              "@type": "Question",
              "name": "What color lens is best for sunglasses?",
              "acceptedAnswer": { "@type": "Answer", "text": "Grey is the safe bet — reduces brightness without changing colors. Brown/amber boosts contrast, great for driving and golf. Green gives you that classic Ray-Ban look with balanced color. Yellow is for low-light only. Blue and mirror? Mostly fashion. If you're a brand owner and can only pick two colors, go grey and brown — they cover 70% of demand." }
            },
            {
              "@type": "Question",
              "name": "What are photochromic lenses?",
              "acceptedAnswer": { "@type": "Answer", "text": "They darken automatically in sunlight and go clear indoors. Cool tech, but with caveats: they don't work well behind car windshields (which block the UV that triggers the reaction), they're slower in hot weather, and the photochromic effect degrades after 2-3 years. Good for outdoor enthusiasts who hate swapping between regular glasses and sunglasses." }
            },
            {
              "@type": "Question",
              "name": "What lens coatings should sunglasses have?",
              "acceptedAnswer": { "@type": "Answer", "text": "UV400 is mandatory — non-negotiable. Anti-reflective coating is a close second (kills the annoying back-glare). After that: scratch-resistant for durability, hydrophobic if your customers are outdoorsy, oleophobic if they hate fingerprints. A full coating stack adds $0.80-2.50 per pair wholesale but lets you charge $20-40 more at retail." }
            }
          ]
        })}} />

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Technology</span>
            <span>April 25, 2026</span>
            <span>•</span>
            <span>14 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sunglasses Lens Types: Complete Buyer&apos;s Guide for 2026
          </h1>
          <p className="text-xl text-gray-600">
            I&apos;ve tested, broken, and shipped more sunglasses lenses than I can count. Here&apos;s what 20 years 
            on the production line taught me about what actually matters — and what&apos;s just marketing.
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
            <li><a href="#why-lenses-matter" className="text-primary-600 hover:underline">Why Your Lens Choice Matters More Than the Frame</a></li>
            <li><a href="#lens-materials" className="text-primary-600 hover:underline">The Four Lens Materials (And When to Use Each)</a></li>
            <li><a href="#lens-colors" className="text-primary-600 hover:underline">Lens Colors: What Each Tint Actually Does</a></li>
            <li><a href="#lens-coatings" className="text-primary-600 hover:underline">Coatings: The Invisible Upgrades That Matter</a></li>
            <li><a href="#polarized-vs-non" className="text-primary-600 hover:underline">Polarized vs Non-Polarized: The Real Story</a></li>
            <li><a href="#photochromic" className="text-primary-600 hover:underline">Photochromic Lenses: Cool Tech, Real Limitations</a></li>
            <li><a href="#choosing-lenses" className="text-primary-600 hover:underline">Picking Lenses by Activity</a></li>
            <li><a href="#for-brands" className="text-primary-600 hover:underline">Brand Owner Playbook: Lens Strategy by Price Tier</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Questions I Hear Every Week</a></li>
          </ul>
        </nav>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Three months ago, a brand owner from Toronto sent me two competing samples. &quot;Jacky, these look 
            identical. Same frame shape, same color. But one retails for $29 and the other for $149. What gives?&quot;
          </p>
          <p>
            I held them both up to the window. The $29 pair had a slight yellow cast, visible distortion near 
            the edges, and the coating was already showing micro-scratches from being handled in shipping. 
            The $149 pair? Crystal clear. Zero distortion. I wiped it with my thumb and the fingerprint 
            just slid off.
          </p>
          <p>
            Same frame. Different lenses. That&apos;s the gap.
          </p>
          <p>
            Most people spend 90% of their time choosing frame styles and 10% thinking about lenses. It should 
            be the opposite. The frame makes you look good. The lens makes you <em>see</em> good. And in this 
            business, returns and bad reviews almost always trace back to lens quality, not frame design.
          </p>

          {/* Why Lenses Matter */}
          <h2 id="why-lenses-matter" className="text-3xl font-bold mt-16 mb-6">Why Your Lens Choice Matters More Than the Frame</h2>
          <p>
            Here&apos;s something that keeps me up at night: cheap, dark-tinted lenses without proper UV protection 
            are <strong>worse than wearing no sunglasses at all.</strong> The{' '}
            <a href="https://www.who.int/news-room/fact-sheets/detail/ultraviolet-radiation" target="_blank" rel="noopener" className="text-primary-600 hover:underline">World Health Organization&apos;s UV radiation fact sheet</a>{' '}
            spells it out clearly.
          </p>
          <p>
            Why? Dark tint makes your pupils dilate — they open wide because they think it&apos;s getting dark. But 
            if those lenses aren&apos;t blocking UV, you&apos;re now funneling <em>more</em> harmful radiation into 
            wide-open pupils. It&apos;s like opening the windows during a sandstorm because you put on a blindfold.
          </p>
          <p>What quality lenses protect against:</p>
          <ul>
            <li><strong>UVA rays (320–400nm):</strong> The sneaky ones. They penetrate deep into your eye. Linked to cataracts and macular degeneration over years of exposure.</li>
            <li><strong>UVB rays (280–320nm):</strong> The aggressive ones. They burn. Ever heard of photokeratitis? It&apos;s basically a sunburn on your cornea. Not fun.</li>
            <li><strong>Glare:</strong> Reflected light off water, roads, snow, car hoods. It&apos;s not just annoying — it&apos;s a driving safety issue. Polarized lenses exist for a reason.</li>
          </ul>
          <p>
            For brand owners: UV protection isn&apos;t optional. It&apos;s a legal requirement —{' '}
            <a href="https://www.fda.gov/radiation-emitting-products/home-business-and-entertainment-products/sunglasses" target="_blank" rel="noopener" className="text-primary-600 hover:underline">the FDA regulates sunglasses</a>{' '}
            as radiation-emitting products in the US, and the EU requires CE marking. 
            Get caught selling sunglasses without proper UV certification 
            and your shipment gets seized at customs. I&apos;ve watched it happen to a competitor&apos;s client in Hamburg. 
            €40,000 in product, confiscated. Don&apos;t let that be you.
          </p>

          {/* Lens Materials */}
          <h2 id="lens-materials" className="text-3xl font-bold mt-16 mb-6">The Four Lens Materials (And When to Use Each)</h2>
          <p>
            Four materials dominate the sunglasses world. Each has its sweet spot, and each has things it&apos;s 
            terrible at. I&apos;ve worked with all of them for two decades. Here&apos;s the unfiltered version.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Polycarbonate — The Tough Guy</h3>
          <p>
            Originally developed for fighter jet canopies and astronaut helmet visors. That should tell you 
            something about its impact resistance. I once watched a factory worker accidentally step on a 
            polycarbonate lens. It flexed. It didn&apos;t crack. Try that with glass.
          </p>
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 mb-2">What It&apos;s Great At</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>10x more impact-resistant than CR-39 or glass</li>
                <li>Lightweight — 1.20 specific gravity</li>
                <li>UV protection built right in (no extra coating needed)</li>
                <li>Won&apos;t shatter into your eyes if something hits it</li>
                <li>Thin even in strong prescriptions</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold text-red-800 mb-2">Where It Falls Short</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>Optical clarity isn&apos;t as crisp as CR-39 or glass</li>
                <li>Scratches easier — needs a hard coating</li>
                <li>Slight chromatic aberration at the edges</li>
                <li>More expensive than TAC</li>
              </ul>
            </div>
          </div>
          <p><strong>Who should use it:</strong> Sports brands, kids&apos; eyewear, safety glasses, anything active. If your customer might drop, sit on, or throw their sunglasses, polycarbonate.</p>
          <p><strong>Wholesale lens cost:</strong> $1.50–$4.00 per pair.</p>

          <h3 className="text-2xl font-bold mt-10 mb-4">CR-39 — The All-Rounder</h3>
          <p>
            CR-39 has been the optical industry&apos;s workhorse since 1947. The name stands for &quot;Columbia 
            Resin #39&quot; — it was literally the 39th formula they tried. Good thing they kept going past #38. 
            (<a href="https://en.wikipedia.org/wiki/CR-39" target="_blank" rel="noopener" className="text-primary-600 hover:underline">The history is fascinating</a> if you&apos;re into materials science.)
          </p>
          <p>
            This is my personal favorite for fashion sunglasses. The optical clarity is noticeably better than 
            polycarbonate — hold a CR-39 lens and a polycarb lens side by side, look through them at fine text, 
            and you&apos;ll see the difference immediately. Colors are truer, edges are sharper.
          </p>
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 mb-2">What It&apos;s Great At</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>Excellent optical clarity (Abbe value: 58 — nerdy but it matters)</li>
                <li>Better scratch resistance than polycarbonate</li>
                <li>Takes tinting beautifully — any color, any gradient</li>
                <li>Lightweight enough for all-day wear</li>
                <li>Good value for the quality</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold text-red-800 mb-2">Where It Falls Short</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>Can shatter on hard impact (not for sports)</li>
                <li>UV protection needs to be added as a coating</li>
                <li>Thicker in high prescriptions</li>
                <li>Not as fashionably &quot;thin&quot; as polycarbonate</li>
              </ul>
            </div>
          </div>
          <p><strong>Who should use it:</strong> Fashion brands, everyday wear, prescription sunglasses, anyone targeting mid-to-premium markets. This is what I recommend for 60% of our fashion clients.</p>
          <p><strong>Wholesale lens cost:</strong> $1.00–$3.50 per pair.</p>

          <h3 className="text-2xl font-bold mt-10 mb-4">Glass — The Old King</h3>
          <p>
            There&apos;s a reason Ray-Ban used glass exclusively for decades. Nothing beats it for optical 
            purity. When I hold up a quality glass lens and look through it, it&apos;s like looking through 
            nothing at all. The clarity is that good.
          </p>
          <p>
            But glass is heavy. And it breaks. I had a client in 2019 who insisted on glass lenses for 
            his premium line. Beautiful product. Then he got a liability scare when a customer&apos;s lens 
            cracked during a beach volleyball game. He switched to CR-39 the next season.
          </p>
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 mb-2">What It&apos;s Great At</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>Best optical clarity money can buy (Abbe value: 59+)</li>
                <li>Scratch resistance that laughs at keys and coins</li>
                <li>Doesn&apos;t warp, distort, or degrade over time</li>
                <li>Premium feel — you can feel the quality in your hand</li>
                <li>Chemical resistance (won&apos;t react to sunscreen or sweat)</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold text-red-800 mb-2">Where It Falls Short</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>Heavy. Noticeably heavier. (Specific gravity: 2.54)</li>
                <li>Can shatter — safety concern for active use</li>
                <li>More expensive to produce and ship</li>
                <li>Limited frame compatibility (heavy lens needs sturdy frame)</li>
                <li>Not suitable for kids, sports, or safety applications</li>
              </ul>
            </div>
          </div>
          <p><strong>Who should use it:</strong> Luxury brands, premium fashion lines, driving sunglasses, anyone selling at $100+ retail who wants &quot;best-in-class optics&quot; as a selling point.</p>
          <p><strong>Wholesale lens cost:</strong> $3.00–$8.00+ per pair.</p>

          <h3 className="text-2xl font-bold mt-10 mb-4">TAC — The Budget Champion</h3>
          <p>
            TAC (Triacetate Cellulose) is the workhorse of the affordable polarized sunglasses market. 
            If you&apos;ve ever bought polarized sunglasses for under $30, they almost certainly had TAC lenses. 
            It&apos;s a sandwich — a polarizing film pressed between layers of cellulose acetate.
          </p>
          <p>
            I&apos;ll be honest: TAC isn&apos;t going to win any awards for optical quality or durability. But it 
            does one thing really well: it makes polarized sunglasses accessible. And for a brand selling 
            at $15–$40 retail, that&apos;s exactly what matters.
          </p>
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-green-800 mb-2">What It&apos;s Great At</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>Cheapest polarized lens option — period</li>
                <li>Lightest lens material on the market</li>
                <li>Good polarization efficiency (blocks 99%+ of glare)</li>
                <li>UV400 protection comes standard</li>
                <li>Available in every color under the sun</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-bold text-red-800 mb-2">Where It Falls Short</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>Optical clarity is... acceptable. Not great.</li>
                <li>Scratches if you look at it wrong</li>
                <li>Can warp if left on a hot dashboard</li>
                <li>Polarization layer can delaminate over 1-2 years</li>
                <li>Not suitable for prescription use</li>
              </ul>
            </div>
          </div>
          <p><strong>Who should use it:</strong> Budget brands, promotional sunglasses, entry-level polarized lines, gas station and tourist shop products. No shade — there&apos;s a massive market for affordable polarized sunglasses.</p>
          <p><strong>Wholesale lens cost:</strong> $0.50–$2.00 per pair. Yeah, you read that right.</p>

          {/* Material Comparison Table */}
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Property</th>
                  <th className="px-4 py-3 text-left">Polycarbonate</th>
                  <th className="px-4 py-3 text-left">CR-39</th>
                  <th className="px-4 py-3 text-left">Glass</th>
                  <th className="px-4 py-3 text-left">TAC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium">Optical Clarity</td><td className="px-4 py-3">Good</td><td className="px-4 py-3">Excellent</td><td className="px-4 py-3">Best</td><td className="px-4 py-3">Fair</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">Impact Resistance</td><td className="px-4 py-3">Best</td><td className="px-4 py-3">Fair</td><td className="px-4 py-3">Poor</td><td className="px-4 py-3">Fair</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">Scratch Resistance</td><td className="px-4 py-3">Fair</td><td className="px-4 py-3">Good</td><td className="px-4 py-3">Best</td><td className="px-4 py-3">Poor</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">Weight</td><td className="px-4 py-3">Light</td><td className="px-4 py-3">Light</td><td className="px-4 py-3">Heavy</td><td className="px-4 py-3">Lightest</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">UV Protection</td><td className="px-4 py-3">Built-in</td><td className="px-4 py-3">Added</td><td className="px-4 py-3">Added</td><td className="px-4 py-3">Built-in</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">Cost</td><td className="px-4 py-3">$$</td><td className="px-4 py-3">$$</td><td className="px-4 py-3">$$$</td><td className="px-4 py-3">$</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">My Pick For</td><td className="px-4 py-3">Sports</td><td className="px-4 py-3">Fashion</td><td className="px-4 py-3">Luxury</td><td className="px-4 py-3">Budget polarized</td></tr>
              </tbody>
            </table>
          </div>

          {/* Lens Colors */}
          <h2 id="lens-colors" className="text-3xl font-bold mt-16 mb-6">Lens Colors: What Each Tint Actually Does</h2>
          <p>
            Most people pick lens color based on what looks cool. That&apos;s fine for fashion brands. But if 
            you&apos;re building a sports or performance line, or if you just want to give your customers 
            genuinely useful advice, here&apos;s what each color actually does to light.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-gray-500"></div>
                <h3 className="font-bold text-lg">Grey</h3>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                The Switzerland of lens colors — neutral, reliable, offends nobody. Reduces brightness evenly 
                across the spectrum without shifting colors. What you see through grey is what you&apos;d see 
                without sunglasses, just dimmer.
              </p>
              <p className="text-sm"><strong>Use it for:</strong> Driving, everyday wear, anything</p>
              <p className="text-sm"><strong>My take:</strong> If you can only stock one color, stock grey. It outsells everything else 3:1 in our factory data.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-amber-700"></div>
                <h3 className="font-bold text-lg">Brown / Amber</h3>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                Filters out blue light, which sharpens contrast and depth perception. Things look &quot;warmer&quot; 
                and edges pop more. Golfers swear by them because they make the ball stand out against green grass.
              </p>
              <p className="text-sm"><strong>Use it for:</strong> Driving, golf, fishing, hiking</p>
              <p className="text-sm"><strong>My take:</strong> Second best seller. Pair grey + brown and you&apos;ve covered 70% of demand.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-green-700"></div>
                <h3 className="font-bold text-lg">Green</h3>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                Think Ray-Ban G-15. Slightly enhances contrast while keeping colors natural. A nice middle 
                ground between grey&apos;s neutrality and brown&apos;s warmth. Has a classic, vintage vibe that 
                certain demographics love.
              </p>
              <p className="text-sm"><strong>Use it for:</strong> General outdoor, golf, tennis</p>
              <p className="text-sm"><strong>My take:</strong> Solid #3 pick. Especially popular with the 35-55 age group. Classic never dies.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-yellow-400"></div>
                <h3 className="font-bold text-lg">Yellow / Orange</h3>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                The low-light specialist. Dramatically boosts contrast in overcast, foggy, or dawn/dusk conditions. 
                Not dark enough for bright sun. Shooters and pilots have used yellow lenses for decades to spot 
                targets against grey skies.
              </p>
              <p className="text-sm"><strong>Use it for:</strong> Overcast days, dawn/dusk, shooting, skiing</p>
              <p className="text-sm"><strong>My take:</strong> Niche but loyal customer base. Great for sports-specific lines.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                <h3 className="font-bold text-lg">Blue</h3>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                Let&apos;s be real — blue is 90% fashion, 10% function. It reduces some glare and slightly enhances 
                warm tones, but people buy blue lenses because they look cool. And that&apos;s a perfectly valid 
                reason in this business.
              </p>
              <p className="text-sm"><strong>Use it for:</strong> Fashion, casual wear, snow sports</p>
              <p className="text-sm"><strong>My take:</strong> Instagram-friendly. Sells well to the 18-30 crowd.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 border border-gray-300"></div>
                <h3 className="font-bold text-lg">Mirror</h3>
              </div>
              <p className="text-gray-600 text-sm mb-2">
                A reflective coating applied over a base tint. The mirror bounces light away before it enters 
                the lens, giving you extra glare reduction on top of the base tint. Plus, people can&apos;t see 
                your eyes. Some people love that. Others hate it.
              </p>
              <p className="text-sm"><strong>Use it for:</strong> High-glare (beach, snow, water), fashion</p>
              <p className="text-sm"><strong>My take:</strong> Mirror adds $0.30–0.80/pair wholesale but lets you charge $10–20 more retail. High-margin upgrade.</p>
            </div>
          </div>

          {/* Lens Coatings */}
          <h2 id="lens-coatings" className="text-3xl font-bold mt-16 mb-6">Coatings: The Invisible Upgrades That Matter</h2>
          <p>
            Coatings don&apos;t make headlines. Nobody posts &quot;check out the hydrophobic coating on my new 
            shades!&quot; on Instagram. But coatings are what separate a $30 pair of sunglasses from a $130 
            pair — and they cost pennies to add at the factory level.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Anti-Reflective (AR) Coating</h3>
          <p>
            This one drives me crazy because so many brands skip it. Here&apos;s the problem: light doesn&apos;t 
            just come from the front. It bounces off the <em>back</em> surface of your lens too — reflected 
            light from behind you hits the inner lens surface and bounces right into your eyes. It&apos;s that 
            annoying ghost image you see when the sun is behind you. AR coating kills 99.5% of that.
          </p>
          <p><strong>Cost:</strong> $0.30–$1.00 per pair wholesale. I put it on everything we ship. Everything.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Hydrophobic Coating</h3>
          <p>
            Water beads up and rolls off instead of smearing across the lens. Game-changer for anyone near 
            water, rain, or humidity. I demonstrated this to a client once by holding a coated lens and an 
            uncoated lens under a faucet. The coated one was dry in seconds. The uncoated one looked like 
            a shower door. He ordered hydrophobic on his entire line that day.
          </p>
          <p><strong>Cost:</strong> $0.20–$0.80 per pair wholesale.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Oleophobic Coating</h3>
          <p>
            Same idea as hydrophobic but for oils — fingerprints, face grease, sunscreen residue. You know 
            how your phone screen repels fingerprints? Same technology. Your customers won&apos;t know why 
            their sunglasses stay cleaner than their last pair. They&apos;ll just know they like yours better.
          </p>
          <p><strong>Cost:</strong> $0.25–$0.80 per pair wholesale.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Scratch-Resistant Coating</h3>
          <p>
            No lens is scratch-proof. Anyone who says otherwise is selling something. But a good hard coating 
            makes a real difference. Polycarbonate without scratch-resistant coating will look like it lost a 
            fight with a cat within a month. With the coating, it&apos;ll look clean for a year of normal use.
          </p>
          <p><strong>Cost:</strong> $0.15–$0.50 per pair wholesale. Should be standard. Period.</p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Anti-Fog Coating</h3>
          <p>
            Prevents fogging when you walk from air conditioning into heat (or vice versa). The coating changes 
            surface tension so moisture spreads into a thin, invisible film instead of forming visible droplets. 
            Most useful for sports eyewear and markets with high humidity.
          </p>
          <p><strong>Cost:</strong> $0.30–$1.00 per pair wholesale.</p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-amber-900 mb-2">💡 The Coating Stack Cheat Code</h3>
            <p className="text-amber-800">
              Here&apos;s what I tell every brand owner: a full coating package (AR + hydrophobic + oleophobic + 
              scratch-resistant) adds $0.80–$2.50 per pair wholesale. You can charge $20–$40 more at retail. 
              That&apos;s the highest-margin upgrade in the entire sunglasses business. We offer customizable{' '}
              <Link href="/products" className="text-amber-900 underline">coating packages</Link> for exactly this reason.
            </p>
          </div>

          {/* Polarized vs Non-Polarized */}
          <h2 id="polarized-vs-non" className="text-3xl font-bold mt-16 mb-6">Polarized vs Non-Polarized: The Real Story</h2>
          <p>
            I had a heated argument with a brand owner last year about polarization. He wanted to save $1.50 per 
            pair by going non-polarized. I told him he&apos;d lose $15 per pair in retail pricing power. He didn&apos;t 
            listen. Six months later he called me to re-order — polarized this time. &quot;You were right, Jacky. 
            Customers kept asking.&quot;
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">How Polarization Actually Works</h3>
          <p>
            Quick physics lesson — I&apos;ll keep it short. Normal light vibrates in all directions. When it bounces 
            off a flat surface (road, water, snow, car hood), it becomes &quot;horizontally polarized&quot; — meaning 
            it mostly vibrates side to side. That concentrated horizontal light is what your brain perceives 
            as blinding glare.
          </p>
          <p>
            A polarized lens has a filter with tiny vertical stripes. Horizontal light gets blocked. Vertical 
            light passes through. Result: glare disappears, but you can still see everything else clearly. 
            The <a href="https://en.wikipedia.org/wiki/Polarizer" target="_blank" rel="noopener" className="text-primary-600 hover:underline">physics behind polarization</a> is 
            well-documented if you want to go deeper. But the practical effect is genuinely impressive — hold 
            a polarized lens over water and watch the glare vanish. You can see right to the bottom.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Where Polarized Lenses Shine</h3>
          <ul>
            <li><strong>Driving:</strong> Road glare disappears. Reflections off other cars — gone. This is a genuine safety feature.</li>
            <li><strong>Fishing:</strong> You can see fish through the water surface. Serious anglers won&apos;t buy non-polarized.</li>
            <li><strong>Water sports:</strong> Cuts through surface glare like nothing else.</li>
            <li><strong>Snow:</strong> Reduces the intense white glare that causes snow blindness.</li>
            <li><strong>Everyday wear:</strong> Less eye fatigue from ambient urban glare. Your eyes just feel more relaxed.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Where Polarized Gets Awkward</h3>
          <ul>
            <li><strong>Phone and laptop screens:</strong> LCD screens can look dark or show rainbow patterns at certain angles. The TikTok generation notices this immediately.</li>
            <li><strong>Pilots:</strong> Cockpit instruments use LCD displays. Polarized lenses can make them hard to read. Most aviation authorities advise against them.</li>
            <li><strong>Some skiing scenarios:</strong> A few experienced skiers prefer non-polarized because polarization can mask the appearance of icy patches.</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-2">The Business Case for Polarized</h3>
            <p className="text-blue-800">
              Adding polarization costs $0.50–$2.00 per pair at wholesale. The retail premium? 30–60% higher 
              price. A $25 non-polarized pair becomes a $35–$40 polarized pair. Consumer demand for polarized 
              has grown about 15% per year over the past five years. If you&apos;re not offering it, you&apos;re 
              leaving money on the table.
            </p>
          </div>

          {/* Photochromic */}
          <h2 id="photochromic" className="text-3xl font-bold mt-16 mb-6">Photochromic Lenses: Cool Tech, Real Limitations</h2>
          <p>
            Photochromic lenses (you might know them as &quot;Transitions&quot;) automatically darken in sunlight 
            and go clear indoors. They use UV-reactive molecules — silver chloride or organic compounds — 
            that change shape when UV hits them, absorbing more visible light.
          </p>
          <p>
            I think they&apos;re genuinely cool technology. But I also think they&apos;re oversold. Here&apos;s what the 
            marketing doesn&apos;t tell you:
          </p>
          <ul>
            <li><strong>Car windshields block UV.</strong> Modern windshields have UV-filtering layers. Since photochromic lenses need UV to darken, they often don&apos;t work well inside a car. You&apos;re driving in bright sun, squinting, wondering why your &quot;automatic&quot; lenses aren&apos;t doing anything. Newer formulations are better at this, but it&apos;s still a known issue.</li>
            <li><strong>Heat makes them lazy.</strong> Above 35°C (95°F), photochromic reactions slow down. The lenses may not darken fully in peak summer heat — exactly when you need them most.</li>
            <li><strong>They wear out.</strong> The photochromic effect degrades over 2-3 years of daily use. They still protect against UV, but the darkening becomes slower and less dramatic.</li>
            <li><strong>Transition speed isn&apos;t instant.</strong> Darkening takes 30-60 seconds. Clearing takes 2-5 minutes. If you walk into a dark restaurant, you&apos;ll be wearing sunglasses indoors for a minute or two. Slightly awkward.</li>
          </ul>
          <p>
            That said, for outdoor enthusiasts who genuinely spend time moving between sun and shade — hikers, 
            cyclists, construction workers — photochromic lenses are a real convenience. Just manage expectations.
          </p>
          <p><strong>Wholesale cost:</strong> 2–4x more than standard tinted lenses. Worth offering as a premium option, not a standard.</p>

          {/* Choosing by Activity */}
          <h2 id="choosing-lenses" className="text-3xl font-bold mt-16 mb-6">Picking Lenses by Activity</h2>
          <p>
            I get asked &quot;what lens should I use for X?&quot; about five times a day. Here&apos;s my cheat sheet — 
            the same one I keep taped to the wall next to my desk:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-3 text-left">Activity</th>
                  <th className="px-4 py-3 text-left">Material</th>
                  <th className="px-4 py-3 text-left">Color</th>
                  <th className="px-4 py-3 text-left">Polarized?</th>
                  <th className="px-4 py-3 text-left">Must-Have Coatings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-4 py-3 font-medium">Driving</td><td className="px-4 py-3">CR-39 or Glass</td><td className="px-4 py-3">Grey or Brown</td><td className="px-4 py-3">Yes ✅</td><td className="px-4 py-3">AR, Anti-fog</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">Fishing</td><td className="px-4 py-3">Polycarbonate</td><td className="px-4 py-3">Brown or Green</td><td className="px-4 py-3">Absolutely ✅</td><td className="px-4 py-3">Hydrophobic, AR</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">Running / Cycling</td><td className="px-4 py-3">Polycarbonate</td><td className="px-4 py-3">Grey or Orange</td><td className="px-4 py-3">Nice to have</td><td className="px-4 py-3">Anti-fog, Hydrophobic</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">Beach / Water</td><td className="px-4 py-3">Polycarbonate</td><td className="px-4 py-3">Grey or Mirror</td><td className="px-4 py-3">Yes ✅</td><td className="px-4 py-3">Hydrophobic, AR</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">Skiing</td><td className="px-4 py-3">Polycarbonate</td><td className="px-4 py-3">Brown or Yellow</td><td className="px-4 py-3">Debatable</td><td className="px-4 py-3">Anti-fog, AR</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">Fashion / Casual</td><td className="px-4 py-3">CR-39 or Glass</td><td className="px-4 py-3">Anything goes</td><td className="px-4 py-3">Optional</td><td className="px-4 py-3">Oleophobic, AR</td></tr>
                <tr className="bg-white"><td className="px-4 py-3 font-medium">Golf</td><td className="px-4 py-3">CR-39</td><td className="px-4 py-3">Brown or Green</td><td className="px-4 py-3">Yes ✅</td><td className="px-4 py-3">AR, Scratch-resistant</td></tr>
              </tbody>
            </table>
          </div>

          {/* For Brand Owners */}
          <h2 id="for-brands" className="text-3xl font-bold mt-16 mb-6">Brand Owner Playbook: Lens Strategy by Price Tier</h2>
          <p>
            This is the section I wish existed when I started helping brands 15 years ago. Your lens choices 
            need to match your retail price point — overspend and your margins die, underspend and your 
            reviews tank.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Budget Brands ($10–$30 retail)</h3>
          <p>Margins are tight. Every cent counts. Here&apos;s how to make it work:</p>
          <ul>
            <li>TAC polarized for your &quot;polarized&quot; SKUs — customers at this price point won&apos;t notice the optical difference versus CR-39</li>
            <li>Non-polarized polycarbonate for your standard line</li>
            <li>UV400 is mandatory (obviously)</li>
            <li>Grey and brown cover 80% of demand — don&apos;t overstock colors</li>
            <li>Mirror finishes add $0.30–0.80/pair but let you charge $5–10 more. High ROI.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Mid-Range Brands ($30–$80 retail)</h3>
          <p>This is where lens quality becomes a competitive advantage:</p>
          <ul>
            <li>CR-39 for fashion styles, polycarbonate for sport styles</li>
            <li>Polarized should be available in all key styles — it&apos;s expected at this price point</li>
            <li>AR + hydrophobic coating package (the customer can feel the difference)</li>
            <li>Full color range with seasonal mirror options for Instagram-worthy product shots</li>
            <li>Consider photochromic as a limited premium SKU — it creates buzz</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">Premium Brands ($80+ retail)</h3>
          <p>At this level, you&apos;re competing with Maui Jim and Ray-Ban. Lenses need to back up the price tag:</p>
          <ul>
            <li>Glass or premium CR-39 — nothing less</li>
            <li>Full coating stack: AR + hydrophobic + oleophobic + scratch-resistant</li>
            <li>Polarized as <em>standard</em>, not an upgrade</li>
            <li>Photochromic available as an option</li>
            <li>Consider exclusive custom tint colors — &quot;only available from [your brand]&quot;</li>
          </ul>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Not Sure Which Lenses Fit Your Brand?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Send me your target retail price and target customer, and I&apos;ll tell you exactly what lens 
              setup maximizes your margins without sacrificing quality. I&apos;ve done this for 500+ brands — 
              it takes about 10 minutes.
            </p>
            <Link href="/contact" className="btn-primary">
              Ask Jacky About Lenses
            </Link>
          </div>

          {/* FAQ */}
          <h2 id="faq" className="text-3xl font-bold mt-16 mb-6">Questions I Hear Every Week</h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">What is the best lens material for sunglasses?</h3>
              <p className="text-gray-600">
                There&apos;s no single &quot;best.&quot; Polycarbonate for sports and durability. CR-39 for the sharpest 
                optics in everyday wear. Glass for premium brands who want the absolute best clarity and scratch 
                resistance. TAC for affordable polarized. I&apos;ve shipped millions of each — they all have their place.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Are polarized lenses worth it?</h3>
              <p className="text-gray-600">
                For driving, fishing, and water sports — 100% yes. The wholesale cost increase is only $0.50–$2.00 
                per pair, but you can charge 30–60% more at retail. From a business perspective, it&apos;s one of 
                the best margin plays in the industry.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">What color lens is best for sunglasses?</h3>
              <p className="text-gray-600">
                Grey is the safe all-rounder. Brown boosts contrast — great for driving and golf. Green is the 
                classic Ray-Ban vibe. Yellow is for low-light only. Blue and mirror are fashion plays. If you&apos;re 
                a brand and can only pick two, go grey and brown — they cover 70% of customer demand.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">What are photochromic lenses?</h3>
              <p className="text-gray-600">
                They darken in sunlight and go clear indoors. Cool tech with caveats: they don&apos;t work well 
                behind car windshields, they&apos;re slower in heat, and the effect degrades after 2-3 years. Best 
                for outdoor enthusiasts who hate swapping between regular glasses and sunglasses.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">What lens coatings should sunglasses have?</h3>
              <p className="text-gray-600">
                UV400 is non-negotiable. AR coating is a close second. After that: scratch-resistant for durability, 
                hydrophobic for outdoorsy customers, oleophobic for fingerprint-haters. A full stack adds $0.80–$2.50 
                per pair wholesale but lets you charge $20–$40 more at retail. Do the math.
              </p>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">More From the Factory Floor</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/oem-vs-odm" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">OEM vs ODM Sunglasses: Complete Guide</h3>
                <p className="text-gray-600 text-sm">The honest breakdown of both manufacturing models — from someone who runs a factory.</p>
              </Link>
              <Link href="/blog/start-sunglasses-brand" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">How to Start a Sunglasses Brand</h3>
                <p className="text-gray-600 text-sm">The full playbook from idea to first sale. Everything I wish someone told me in 2006.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
