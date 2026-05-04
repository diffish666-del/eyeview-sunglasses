import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sunglasses Coating Guide: Mirror, Anti-Reflective, Hydrophobic & More',
  description: 'A factory owner breaks down every sunglasses coating type — mirror, AR, hydrophobic, oleophobic, anti-fog, hard coat, blue light filter. Real costs per pair and which coatings stack together.',
  keywords: 'sunglasses coating types, mirror coating sunglasses, anti-reflective coating sunglasses, hydrophobic lens coating, oleophobic coating, anti-fog sunglasses, hard coat lenses, blue light filter sunglasses',
}

export default function SunglassesCoatingGuidePage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* JSON-LD Article Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Sunglasses Coating Guide: Mirror, Anti-Reflective, Hydrophobic & More",
          "datePublished": "2026-05-03",
          "dateModified": "2026-05-03",
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "A factory owner breaks down every sunglasses coating type — mirror, AR, hydrophobic, oleophobic, anti-fog, hard coat, blue light filter. Real costs per pair and which coatings stack together.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/blog/sunglasses-coating-guide" }
        })}} />

        {/* FAQ Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What are the main types of sunglasses coatings?",
              "acceptedAnswer": { "@type": "Answer", "text": "The seven main sunglasses coating types are: mirror (flash) coating for glare reduction and style, anti-reflective (AR) coating to eliminate back-glare, hydrophobic coating to repel water, oleophobic coating to resist fingerprints and oils, anti-fog coating to prevent condensation, hard coat for scratch resistance, and blue light filter coating to block HEV blue light. Most quality sunglasses use at least 3-4 of these coatings stacked together." }
            },
            {
              "@type": "Question",
              "name": "How much do sunglasses coatings cost per pair?",
              "acceptedAnswer": { "@type": "Answer", "text": "At factory scale, coating costs per pair range from $0.15 for a basic hard coat to $1.80-$3.00 for a premium multi-layer mirror coating. Anti-reflective runs $0.60-$1.50, hydrophobic is $0.20-$0.50, oleophobic is $0.30-$0.60, anti-fog is $0.40-$0.80, and blue light filter is $0.50-$1.20. A full premium stack of 4-5 coatings typically adds $2.50-$5.00 to your per-pair cost." }
            },
            {
              "@type": "Question",
              "name": "Can you combine multiple lens coatings on one pair of sunglasses?",
              "acceptedAnswer": { "@type": "Answer", "text": "Yes — and you should. Most coatings are designed to stack. The standard layering order from lens surface outward is: hard coat (base layer), then AR coating, then mirror coating (if applicable), then hydrophobic and oleophobic as the outermost layers. Anti-fog is applied to the inner lens surface. The only combination that doesn't work is a full mirror coat with AR on the same side — the mirror already handles reflection." }
            },
            {
              "@type": "Question",
              "name": "How long do sunglasses coatings last?",
              "acceptedAnswer": { "@type": "Answer", "text": "It depends on the coating and how you treat them. Hard coat lasts the lifetime of the lens. AR coating lasts 2-3 years with normal use. Mirror coatings last 1-3 years depending on quality — cheap single-layer mirrors degrade faster. Hydrophobic and oleophobic coatings wear down the fastest, typically 1-2 years, because they're the outermost layer taking all the abuse from cleaning and handling. Anti-fog coatings last 1-2 years." }
            },
            {
              "@type": "Question",
              "name": "What is the best coating combination for sport sunglasses?",
              "acceptedAnswer": { "@type": "Answer", "text": "For sport sunglasses, the ideal stack is: hard coat (mandatory for durability), anti-reflective on the back surface (eliminates distracting back-glare during activity), hydrophobic on both surfaces (sheds rain and sweat), oleophobic on the outer surface (resists sunscreen and grime), and anti-fog on the inner surface (prevents fogging during exertion). Mirror coating is optional but popular for high-glare environments like water sports and snow. This full sport stack adds roughly $3.00-$4.50 per pair at production scale." }
            }
          ]
        })}} />

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Lens Technology</span>
            <span>May 3, 2026</span>
            <span>•</span>
            <span>14 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sunglasses Coating Guide: Mirror, Anti-Reflective, Hydrophobic &amp; More
          </h1>
          <p className="text-xl text-gray-600">
            The lens gets all the attention. But it&apos;s the coatings that make or break a pair of sunglasses.
            Here&apos;s what each one actually does, what it costs, and which ones you should stack together.
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
            <li><a href="#why-coatings-matter" className="text-primary-600 hover:underline">Why Coatings Matter More Than You Think</a></li>
            <li><a href="#mirror-coating" className="text-primary-600 hover:underline">Mirror (Flash) Coating</a></li>
            <li><a href="#anti-reflective" className="text-primary-600 hover:underline">Anti-Reflective (AR) Coating</a></li>
            <li><a href="#hydrophobic" className="text-primary-600 hover:underline">Hydrophobic Coating</a></li>
            <li><a href="#oleophobic" className="text-primary-600 hover:underline">Oleophobic Coating</a></li>
            <li><a href="#anti-fog" className="text-primary-600 hover:underline">Anti-Fog Coating</a></li>
            <li><a href="#hard-coat" className="text-primary-600 hover:underline">Hard Coat (Scratch-Resistant)</a></li>
            <li><a href="#blue-light" className="text-primary-600 hover:underline">Blue Light Filter Coating</a></li>
            <li><a href="#cost-breakdown" className="text-primary-600 hover:underline">Cost Breakdown: Every Coating, Per Pair</a></li>
            <li><a href="#stacking" className="text-primary-600 hover:underline">Which Coatings Stack Together (and Which Don&apos;t)</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Questions I Hear Every Week</a></li>
          </ul>
        </nav>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            A brand owner from Portland called me last week and said, &quot;Jacky, I just want polarized lenses. 
            Why does your quote list six different coatings? Are you padding the price?&quot;
          </p>
          <p>
            Fair question. And no, I wasn&apos;t padding anything. Here&apos;s the thing most people don&apos;t realize: 
            the lens material — whether it&apos;s CR-39, polycarbonate, nylon, or TAC — is only the foundation. 
            Coatings are what turn a decent lens into a great one. They&apos;re the difference between sunglasses 
            that feel premium and sunglasses that feel like gas station freebies.
          </p>
          <p>
            I&apos;ve been running a sunglasses factory since 2006. Our coating room is one of the most 
            expensive departments on the floor — vacuum deposition chambers, ultrasonic cleaning baths, 
            climate-controlled environments. All of that exists because coatings are that important. If 
            you&apos;re building a sunglasses brand, or even just trying to understand what you&apos;re paying for, 
            this guide covers every major sunglasses coating type, what it costs at production scale, and 
            how to combine them without wasting money.
          </p>
          <p>
            For lens material basics — CR-39 vs. polycarbonate vs. nylon — check 
            our <Link href="/blog/sunglasses-lens-guide" className="text-primary-600 hover:underline">sunglasses lens guide</Link> first. 
            This article picks up where that one leaves off.
          </p>

          {/* Why Coatings Matter */}
          <h2 id="why-coatings-matter" className="text-3xl font-bold mt-16 mb-6">Why Coatings Matter More Than You Think</h2>
          <p>
            Take two identical polycarbonate lenses. Same material, same tint, same UV400 protection. Put a 
            premium multi-layer coating stack on one and leave the other bare. Hand them to anyone — your 
            grandmother, a ten-year-old, doesn&apos;t matter. They&apos;ll pick the coated lens as &quot;better&quot; within 
            five seconds.
          </p>
          <p>
            The coated lens is clearer. It doesn&apos;t smudge as easily. Water beads off instead of streaking. 
            There&apos;s no annoying reflection bouncing off the back of the lens into your eyes. It just feels 
            like a more expensive product — because it is, but not by as much as you&apos;d think.
          </p>
          <p>
            Coatings add anywhere from $0.50 to $5.00 per pair at factory scale. On a pair of sunglasses 
            retailing for $50-$150, that&apos;s a rounding error. But the perceived quality difference? Night 
            and day. If you&apos;re cutting corners on coatings, you&apos;re leaving the easiest upgrade on the table.
          </p>

          {/* Mirror Coating */}
          <h2 id="mirror-coating" className="text-3xl font-bold mt-16 mb-6">Mirror (Flash) Coating</h2>
          <p>
            Mirror coating is the one everyone recognizes. Those reflective lenses you see on lifeguards, 
            ski instructors, and half the people at Coachella — that&apos;s mirror. It&apos;s also called flash 
            coating or revo coating, depending on who you ask.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">How It Works</h3>
          <p>
            Mirror coating is a thin metallic or metallic-oxide layer applied to the front surface of the 
            lens through vacuum deposition. The metallic layer reflects a portion of incoming light before 
            it passes through the lens, reducing overall light transmission. Think of it like a one-way 
            mirror — people see their reflection, you see through it clearly.
          </p>
          <p>
            There are three grades we work with:
          </p>
          <ul>
            <li><strong>Single-layer flash:</strong> Subtle mirror sheen. You can still see the wearer&apos;s eyes through it. Popular for fashion-forward looks where you want a hint of reflection without going full cop-sunglass.</li>
            <li><strong>Multi-layer mirror:</strong> The classic full mirror. Highly reflective, can&apos;t see the eyes behind it. This is what most people picture when they think &quot;mirror sunglasses.&quot;</li>
            <li><strong>Gradient mirror:</strong> Heavier mirror at the top, fading to lighter at the bottom. Looks incredible. Also the most expensive because it requires precise control during the deposition process.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">What It Costs</h3>
          <p>
            Single-layer flash: <strong>$0.40–$0.80 per pair.</strong> Multi-layer full mirror: <strong>$1.00–$1.80 per pair.</strong> Gradient 
            mirror: <strong>$1.80–$3.00 per pair.</strong> The price jumps because each additional layer requires another pass through the 
            vacuum chamber, and gradient work needs skilled operators controlling the deposition manually.
          </p>
          <p>
            Mirror is especially popular on our{' '}
            <Link href="/products/sport" className="text-primary-600 hover:underline">sport sunglasses</Link> — 
            blue and green mirrors on wrap-around frames are the top sellers for outdoor and water sports brands.
          </p>

          {/* Anti-Reflective */}
          <h2 id="anti-reflective" className="text-3xl font-bold mt-16 mb-6">Anti-Reflective (AR) Coating</h2>
          <p>
            AR coating is the unsung hero of sunglasses coatings. It doesn&apos;t look flashy. Most customers 
            don&apos;t even know it exists. But every optician in the world will tell you it&apos;s one of the 
            most important coatings on any lens — prescription or sun.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">How It Works</h3>
          <p>
            When light hits a lens surface, about 4-8% reflects back instead of passing through. On 
            sunglasses, the back surface is the problem. Light comes from behind you — the sky, buildings, 
            car windows — hits the inside of the lens, and bounces straight into your eyes. That&apos;s 
            back-glare, and it causes eye fatigue, squinting, and headaches on long drives.
          </p>
          <p>
            <a href="https://en.wikipedia.org/wiki/Anti-reflective_coating" target="_blank" rel="noopener" className="text-primary-600 hover:underline">Anti-reflective coating</a> uses 
            thin-film interference to cancel out reflected light. Multiple layers of metal oxides — typically 
            magnesium fluoride, silicon dioxide, or titanium dioxide — are deposited at precise thicknesses. 
            Each layer cancels a specific wavelength of reflected light. More layers = broader spectrum coverage = 
            less reflection.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-2">Back-Surface AR vs. Both-Surface AR</h3>
            <p className="text-blue-800">
              For sunglasses, AR on the back surface is what matters. The front surface is already tinted or 
              mirrored, so front-surface AR doesn&apos;t add much. Some premium brands do both surfaces for maximum 
              optical clarity, but back-only AR gets you 90% of the benefit at half the cost. That&apos;s what I 
              recommend for most clients.
            </p>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">What It Costs</h3>
          <p>
            Single-layer AR (basic): <strong>$0.30–$0.60 per pair.</strong> Multi-layer AR (premium, 4-6 layers): <strong>$0.60–$1.50 per pair.</strong> The 
            multi-layer version reduces reflection from ~4% to under 0.5% — you literally cannot see any 
            reflection on the back surface. Worth every cent.
          </p>

          {/* Hydrophobic */}
          <h2 id="hydrophobic" className="text-3xl font-bold mt-16 mb-6">Hydrophobic Coating</h2>
          <p>
            Hydrophobic means water-hating. Apply it to a lens, and water beads up into tiny droplets 
            and rolls off instead of spreading into a smeared mess. If you&apos;ve ever seen those videos of 
            water dancing off a car windshield — same principle, applied to eyewear.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">How It Works</h3>
          <p>
            It&apos;s a nanoscale layer of fluoropolymer or silicone-based material that lowers the surface 
            energy of the lens. Low surface energy = liquids can&apos;t spread out and cling. They bead up 
            and slide off under gravity. The coating is incredibly thin — about 10-20 nanometers. You 
            can&apos;t see it, can&apos;t feel it, but it changes how the lens behaves in wet conditions completely.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">What It Costs</h3>
          <p>
            <strong>$0.20–$0.50 per pair.</strong> One of the cheapest coatings we apply, and one of the most 
            impactful for user experience. I put hydrophobic on everything — there&apos;s no reason not to at 
            this price point.
          </p>
          <p>
            It&apos;s particularly critical for{' '}
            <Link href="/products/sport" className="text-primary-600 hover:underline">sport sunglasses</Link>. 
            Runners, cyclists, water sports athletes — anyone dealing with rain, spray, or sweat needs this coating. 
            Without it, one splash turns the lens into a blurry mess.
          </p>

          {/* Oleophobic */}
          <h2 id="oleophobic" className="text-3xl font-bold mt-16 mb-6">Oleophobic Coating</h2>
          <p>
            Oleophobic is hydrophobic&apos;s cousin — but instead of repelling water, it repels oils. Fingerprints, 
            face oils, sunscreen, that mysterious smudge that appears the moment you put your sunglasses on 
            top of your head. Oleophobic coating handles all of it.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">How It Works</h3>
          <p>
            Similar to hydrophobic — a fluoropolymer layer that reduces surface energy — but optimized for 
            oleic substances (oils and fats) rather than just water. In practice, most modern coatings marketed 
            as &quot;hydrophobic&quot; actually have some oleophobic properties built in. But a dedicated oleophobic 
            coating is noticeably better at resisting fingerprints and making cleaning easier.
          </p>
          <p>
            Here&apos;s a test I do for every coating supplier: I press my thumb firmly onto the coated lens, then 
            try to wipe it clean with a dry microfiber cloth. A good oleophobic coating cleans in one pass. A 
            mediocre one takes three or four wipes and still leaves a ghost smudge. If it fails the thumb test, 
            it doesn&apos;t go on our lenses.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">What It Costs</h3>
          <p>
            <strong>$0.30–$0.60 per pair.</strong> Often combined with hydrophobic in a single application step, 
            which brings the combo down to <strong>$0.40–$0.80</strong> total for both. Most factories apply them 
            together as a &quot;hydro-oleophobic&quot; package.
          </p>

          {/* Anti-Fog */}
          <h2 id="anti-fog" className="text-3xl font-bold mt-16 mb-6">Anti-Fog Coating</h2>
          <p>
            Anyone who&apos;s walked from an air-conditioned building into summer humidity knows the pain. Your 
            lenses fog up instantly. You&apos;re blind for 15 seconds, standing there like an idiot wiping your 
            glasses on your shirt. Anti-fog coating exists to solve exactly that problem.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">How It Works</h3>
          <p>
            Fogging happens when warm, moist air hits a cool lens surface. Tiny water droplets form and scatter 
            light. Anti-fog coatings work by doing one of two things: either they absorb moisture (hydrophilic 
            approach — the coating spreads water into an invisible thin film instead of letting it form droplets) 
            or they use a surfactant layer that prevents droplets from forming in the first place.
          </p>
          <p>
            The hydrophilic approach is more common in performance eyewear. It doesn&apos;t stop moisture from 
            landing on the lens — it just makes the moisture invisible. The lens surface stays optically clear 
            even when it&apos;s technically wet.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-amber-900 mb-2">💡 Important: Anti-Fog Goes on the Inside</h3>
            <p className="text-amber-800">
              Anti-fog is applied to the inner lens surface — the side facing your skin. That&apos;s where 
              fogging happens, because your body heat and breath create the temperature differential. 
              Putting anti-fog on the outside would be like putting a raincoat on your house&apos;s interior walls.
            </p>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">What It Costs</h3>
          <p>
            <strong>$0.40–$0.80 per pair.</strong> The permanent coatings at the higher end of that range last 
            1-2 years. Cheaper versions degrade faster, especially with frequent cleaning. For sport sunglasses 
            where fogging is a safety issue — cycling, skiing, running — spend the extra $0.30 for the premium version.
          </p>

          {/* Hard Coat */}
          <h2 id="hard-coat" className="text-3xl font-bold mt-16 mb-6">Hard Coat (Scratch-Resistant)</h2>
          <p>
            Hard coat is the workhorse. It&apos;s not glamorous. Nobody buys sunglasses because they have a great 
            hard coat. But without it, every other coating you apply is living on borrowed time.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">How It Works</h3>
          <p>
            Most sunglass lenses — especially polycarbonate and CR-39 — are relatively soft materials. 
            Polycarbonate is great for impact resistance but scratches if you look at it wrong. Hard coat 
            is a thin layer of silicone-based lacquer or metal oxide (usually silicon dioxide) that dramatically 
            increases surface hardness.
          </p>
          <p>
            We test hard coat with a steel wool abrasion test: 50 strokes of #0000 steel wool at controlled 
            pressure. A bare polycarbonate lens looks like a cat attacked it. A properly hard-coated lens 
            shows minimal marking. It&apos;s not invincible — you can still scratch it if you try — but it turns 
            normal daily wear from &quot;destroyed in three months&quot; to &quot;looks good for years.&quot;
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">What It Costs</h3>
          <p>
            <strong>$0.15–$0.40 per pair.</strong> The cheapest coating on the list, and the one I consider 
            absolutely non-negotiable. I don&apos;t ship a single pair without hard coat. Any factory that 
            offers you polycarbonate lenses without hard coat is either cutting corners or doesn&apos;t know 
            what they&apos;re doing. Either way, walk away.
          </p>

          {/* Blue Light Filter */}
          <h2 id="blue-light" className="text-3xl font-bold mt-16 mb-6">Blue Light Filter Coating</h2>
          <p>
            This one has become huge in the last five years. Blue light filtering started in the prescription 
            eyewear world and migrated into sunglasses as screen time skyrocketed and consumers started 
            caring about digital eye strain.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">How It Works</h3>
          <p>
            Blue light filter coating selectively blocks or reflects high-energy visible (HEV) blue light in 
            the 380-450nm wavelength range. There are two approaches: an absorptive tint built into the lens 
            material (gives the lens a slight yellow cast) or a reflective coating that bounces blue light 
            away (produces a faint blue-purple reflection on the lens surface — you&apos;ve seen this on &quot;computer 
            glasses&quot;).
          </p>
          <p>
            For sunglasses specifically, the reflective coating approach is more popular because it doesn&apos;t 
            alter the lens tint. Your gray lens stays gray, your brown stays brown — but it&apos;s filtering 
            20-40% of HEV blue light on top of the standard UV400 protection that all quality sunglasses 
            should already provide.
          </p>
          <p>
            Our{' '}
            <Link href="/products/blue-light" className="text-primary-600 hover:underline">blue light collection</Link> pairs 
            this coating with our best-selling frames — it&apos;s one of our fastest-growing categories.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">What It Costs</h3>
          <p>
            <strong>$0.50–$1.20 per pair.</strong> The reflective-type coating is at the higher end because it 
            requires a dedicated vacuum deposition step. The absorptive type is cheaper but changes lens color. 
            For sunglasses brands targeting digital wellness or the 25-40 urban professional demographic, 
            this coating pays for itself — customers actively seek it out and will pay a $10-20 premium at retail.
          </p>

          {/* Cost Breakdown Table */}
          <h2 id="cost-breakdown" className="text-3xl font-bold mt-16 mb-6">Cost Breakdown: Every Coating, Per Pair</h2>
          <p>
            Here&apos;s the cheat sheet. These are factory-level costs at typical MOQ volumes (300-1,000 pairs). 
            Smaller orders will be 10-20% higher per pair. Larger orders (5,000+) can push these down another 
            15-25%.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left">Coating Type</th>
                  <th className="px-6 py-4 text-left">Cost Per Pair</th>
                  <th className="px-6 py-4 text-left">Durability</th>
                  <th className="px-6 py-4 text-left">Priority</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Hard Coat</td><td className="px-6 py-4">$0.15–$0.40</td><td className="px-6 py-4">Lens lifetime</td><td className="px-6 py-4">Mandatory</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Hydrophobic</td><td className="px-6 py-4">$0.20–$0.50</td><td className="px-6 py-4">1–2 years</td><td className="px-6 py-4">Highly recommended</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Oleophobic</td><td className="px-6 py-4">$0.30–$0.60</td><td className="px-6 py-4">1–2 years</td><td className="px-6 py-4">Recommended</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Anti-Reflective (AR)</td><td className="px-6 py-4">$0.30–$1.50</td><td className="px-6 py-4">2–3 years</td><td className="px-6 py-4">Highly recommended</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Anti-Fog</td><td className="px-6 py-4">$0.40–$0.80</td><td className="px-6 py-4">1–2 years</td><td className="px-6 py-4">Sport / activity use</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Blue Light Filter</td><td className="px-6 py-4">$0.50–$1.20</td><td className="px-6 py-4">2–3 years</td><td className="px-6 py-4">Growing demand</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Mirror (single-layer)</td><td className="px-6 py-4">$0.40–$0.80</td><td className="px-6 py-4">1–2 years</td><td className="px-6 py-4">Style-dependent</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Mirror (multi-layer)</td><td className="px-6 py-4">$1.00–$1.80</td><td className="px-6 py-4">2–3 years</td><td className="px-6 py-4">Style-dependent</td></tr>
                <tr className="bg-white"><td className="px-6 py-4 font-medium">Mirror (gradient)</td><td className="px-6 py-4">$1.80–$3.00</td><td className="px-6 py-4">2–3 years</td><td className="px-6 py-4">Premium only</td></tr>
              </tbody>
            </table>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-green-900 mb-2">Real-World Stacking Costs</h3>
            <ul className="text-green-800 space-y-1">
              <li><strong>Budget stack</strong> (hard coat + hydrophobic): $0.35–$0.90 per pair</li>
              <li><strong>Mid-range stack</strong> (hard coat + AR + hydro-oleophobic): $1.25–$2.50 per pair</li>
              <li><strong>Premium stack</strong> (hard coat + AR + hydro-oleophobic + mirror): $2.50–$5.00 per pair</li>
              <li><strong>Sport premium</strong> (hard coat + AR + hydro-oleophobic + anti-fog + mirror): $3.00–$5.50 per pair</li>
            </ul>
          </div>

          {/* Stacking */}
          <h2 id="stacking" className="text-3xl font-bold mt-16 mb-6">Which Coatings Stack Together (and Which Don&apos;t)</h2>
          <p>
            This is where most brand owners get confused — and where some factories take advantage of that 
            confusion to upsell unnecessary combinations. So let me be straight with you.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">The Standard Layer Order</h3>
          <p>
            Coatings are applied in a specific sequence, from the lens surface outward. Get the order wrong 
            and the coatings interfere with each other or don&apos;t adhere properly. Here&apos;s the correct 
            stacking order:
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-2">Outer Surface (front of lens), Bottom to Top:</h3>
            <ol className="text-blue-800 space-y-1">
              <li><strong>1. Hard coat</strong> — directly on the lens, acts as the adhesion base</li>
              <li><strong>2. AR coating</strong> — on top of hard coat (if applied to front surface)</li>
              <li><strong>3. Mirror coating</strong> — outermost metallic layer (replaces front AR if used)</li>
              <li><strong>4. Hydrophobic + oleophobic</strong> — the very top layer, protecting everything below</li>
            </ol>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-2">Inner Surface (back of lens, facing your eye):</h3>
            <ol className="text-blue-800 space-y-1">
              <li><strong>1. Hard coat</strong> — base layer</li>
              <li><strong>2. AR coating</strong> — this is the critical back-surface AR for eliminating back-glare</li>
              <li><strong>3. Anti-fog</strong> — innermost layer, facing the skin</li>
              <li><strong>4. Hydrophobic + oleophobic</strong> — top layer on the back surface (if not using anti-fog)</li>
            </ol>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Combinations That Don&apos;t Work</h3>
          <p>
            There&apos;s really only one hard conflict: <strong>you can&apos;t put AR coating and full mirror coating 
            on the same surface.</strong> The mirror coating is already managing reflected light — adding AR underneath 
            it on the front surface is redundant and can actually cause delamination issues. Mirror on the front, 
            AR on the back. That&apos;s the standard and it works perfectly.
          </p>
          <p>
            Another soft conflict: <strong>anti-fog and hydrophobic on the same surface</strong> work against each 
            other. Hydrophobic repels water. Anti-fog works by spreading water into an invisible film. They have 
            opposite goals. On the inner surface, pick one — and for sport frames, anti-fog is the right choice. 
            Save the hydrophobic for the outer surface.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">My Recommended Stacks</h3>
          <p>
            After twenty years and millions of pairs, here&apos;s what I recommend for different product tiers:
          </p>

          <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-primary-900 mb-3">Stack Recommendations by Product Tier:</h3>
            <ul className="text-primary-800 space-y-3">
              <li>
                <strong>Entry-level ($15-30 retail):</strong> Hard coat + hydrophobic. 
                Cost: ~$0.50/pair. Gets you scratch resistance and water repellency. The minimum viable coating stack.
              </li>
              <li>
                <strong>Mid-range ($30-80 retail):</strong> Hard coat + back-surface AR + hydro-oleophobic (both surfaces). 
                Cost: ~$1.50-2.00/pair. This is the sweet spot. Covers all the functional bases without gold-plating.
              </li>
              <li>
                <strong>Premium ($80-200 retail):</strong> Hard coat + multi-layer back AR + mirror (front) + hydro-oleophobic + blue light filter. 
                Cost: ~$3.50-5.00/pair. The full treatment. Every surface is optimized. This is what brands like Oakley and Maui Jim are putting on their $180 frames.
              </li>
              <li>
                <strong>Sport performance ($50-150 retail):</strong> Hard coat + back AR + hydro-oleophobic (front) + anti-fog (back) + optional mirror. 
                Check our{' '}
                <Link href="/products/sport" className="text-primary-600 hover:underline">sport collection</Link> — 
                this is the exact stack we use. Cost: ~$2.50-4.00/pair.
              </li>
            </ul>
          </div>

          <p>
            One more thing about stacking: don&apos;t let anyone tell you that more coatings always means better. 
            I&apos;ve had clients request seven coatings on an entry-level frame retailing for $20. The coatings 
            cost more than the frame and lens combined. That&apos;s not smart — it&apos;s just expensive. Match 
            the coating stack to the product tier and the end user&apos;s needs. A beach-vacation sunglass doesn&apos;t 
            need anti-fog. A driving sunglass doesn&apos;t need mirror. Be deliberate.
          </p>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Need Help Choosing the Right Coatings?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Every product and market is different. I&apos;ll help you figure out which coating stack 
              makes sense for your brand, your price point, and your customers — without overselling you 
              on coatings you don&apos;t need.
            </p>
            <Link href="/contact" className="btn-primary">
              Talk to Jacky About Coatings
            </Link>
          </div>

          {/* FAQ */}
          <h2 id="faq" className="text-3xl font-bold mt-16 mb-6">Questions I Hear Every Week</h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">What are the main types of sunglasses coatings?</h3>
              <p className="text-gray-600">
                Seven main types: mirror (flash) coating for glare and style, anti-reflective (AR) for 
                eliminating back-glare, hydrophobic for repelling water, oleophobic for resisting fingerprints, 
                anti-fog for preventing condensation, hard coat for scratch resistance, and blue light filter 
                for blocking HEV light. Most quality sunglasses use at least 3-4 of these stacked together.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">How much do sunglasses coatings cost per pair?</h3>
              <p className="text-gray-600">
                At factory volumes, individual coatings range from $0.15 for hard coat to $3.00 for 
                premium gradient mirror. A practical mid-range stack (hard coat + AR + hydro-oleophobic) runs 
                about $1.50-$2.00 per pair. A full premium stack with mirror adds $3.50-$5.00 per pair. 
                These are production costs — not what you&apos;ll see at retail.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Can you combine multiple lens coatings on one pair?</h3>
              <p className="text-gray-600">
                Yes, and you should. The standard layer order is hard coat as the base, then AR, then mirror 
                (if used), then hydrophobic and oleophobic on top. Anti-fog goes on the inner surface only. 
                The one conflict: don&apos;t put full mirror and AR on the same lens surface — the mirror already 
                handles reflection on that side.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">How long do sunglasses coatings last?</h3>
              <p className="text-gray-600">
                Hard coat lasts the lifetime of the lens. AR coating holds up 2-3 years. Mirror coatings 
                last 1-3 years depending on layer count — cheap single-layer mirrors fade fast. Hydrophobic 
                and oleophobic wear down the quickest at 1-2 years because they&apos;re the outermost layer 
                taking daily abuse. Anti-fog coatings last about 1-2 years.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">What&apos;s the best coating combo for sport sunglasses?</h3>
              <p className="text-gray-600">
                Hard coat (mandatory), back-surface AR (kills distracting back-glare during activity), 
                hydrophobic on the front (sheds rain and sweat), oleophobic on the front (resists sunscreen), 
                and anti-fog on the inner surface (prevents fogging during exertion). Add mirror for 
                high-glare environments like water and snow. Full sport stack runs about $3.00-$4.50 per pair.
              </p>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">More From the Factory Floor</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/sunglasses-lens-guide" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Sunglasses Lens Guide: Materials, Tints &amp; What Actually Matters</h3>
                <p className="text-gray-600 text-sm">CR-39, polycarbonate, nylon, TAC — which lens material is right for your brand? The companion piece to this coating guide.</p>
              </Link>
              <Link href="/products/sport" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Sport Sunglasses Collection</h3>
                <p className="text-gray-600 text-sm">See our full sport range — every pair built with the premium coating stack described in this guide.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
