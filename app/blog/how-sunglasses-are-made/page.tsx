import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Sunglasses Are Made: A Tour Through Our Factory Floor',
  description: 'I walk through my factory floor every day. Here is exactly how a pair of sunglasses gets made — the machines, the hands, the 27 steps from raw material to the box on your customer\'s doorstep.',
  keywords: 'how sunglasses are made, sunglasses manufacturing process, how are sunglasses manufactured, sunglasses factory process, eyewear production, sunglass manufacturing steps',
  alternates: { canonical: '/blog/how-sunglasses-are-made', languages: { 'en': '/blog/how-sunglasses-are-made' } },
}

export default function HowSunglassesAreMade() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org","@type": "Article",
          "headline": "How Sunglasses Are Made: A Tour Through Our Factory Floor",
          "datePublished": "2026-07-11","dateModified": "2026-07-11",
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "I walk through my factory floor every day. Here is exactly how a pair of sunglasses gets made.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/blog/how-sunglasses-are-made" }
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org","@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "What are the steps to manufacture sunglasses?", "acceptedAnswer": { "@type": "Answer", "text": "There are about 27 individual steps from raw material to finished product. The main stages are: material preparation (cutting acetate sheets or preparing metal wire), frame forming (CNC cutting or injection molding), tumbling and hand-polishing (24-48 hours for acetate), lens cutting and coating application, assembly (hinge insertion, lens mounting, logo engraving, temple attachment), quality inspection (6-point test covering UV transmission, impact, hinges, dimensions, clarity, and alignment), and finally packaging and shipping. The entire process takes 15-25 days for a standard production order." } },
            { "@type": "Question", "name": "What materials are sunglasses made from?", "acceptedAnswer": { "@type": "Answer", "text": "Frames are typically made from acetate (a plant-based plastic, premium feel), stainless steel or titanium (metal frames), TR90 nylon (lightweight and flexible), polycarbonate (cheap and impact-resistant), or eco-materials like recycled ocean plastic and bamboo. Lenses are usually polycarbonate or TAC (tri-acetate cellulose). The material choice determines both the manufacturing method and the final cost — acetate and metal cost more than injection-molded plastic but feel significantly more premium." } },
          ]
        })}} />

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How Sunglasses Are Made: A Tour Through Our Factory Floor</h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4"><span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Manufacturing</span><span>July 11, 2026</span><span>•</span><span>8 min read</span></div>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div><div className="font-medium text-gray-900">Jacky Chen</div><div className="text-sm text-gray-500">Founder, EyeView Sunglasses</div></div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">

          <p className="text-xl text-gray-600 mb-8">
            A client visited our factory last year. He had been buying from us for three years — thousands of pairs, never a quality issue. But he had never seen how his sunglasses were actually made. I walked him through the floor. He stopped at the tumbling barrels — these big rotating drums filled with wooden pegs and polishing compound — and stared for a solid minute. &ldquo;I had no idea this took this long,&rdquo; he said.
          </p>

          <p>Most people do not. They see the finished product — a shiny pair of sunglasses in a nice case — and never think about the 27 steps it took to get there. I have walked this factory floor every day since 2006. Here is what actually happens between the raw material arriving and the finished product shipping out.</p>

          <h2>The Beginning: What Arrives at Our Door</h2>

          <p>Monday morning. A truck from the port pulls up with pallets of raw material. Depending on what we are making, it is one of three things:</p>

          <p><strong><Link href="/products/acetate/" className="text-primary-600 hover:underline">Acetate sheets</Link>.</strong> Big rectangles, 150cm by 70cm, 6mm thick. Each sheet weighs about 8 kilos and costs maybe $40-60 from our supplier in Italy. One sheet becomes 30-40 frame fronts depending on the design. We go through about 80 sheets a week.</p>

          <p><strong>Metal wire on spools.</strong> Stainless steel or titanium, about 1.5mm thick. This is what becomes <Link href="/products/aviator/" className="text-primary-600 hover:underline">aviator frames</Link>. The wire gets cut, bent, shaped, and welded — completely different process from plastic frames. We use about 200 kilos of metal wire per week.</p>

          <p><strong><Link href="/products/tr90/" className="text-primary-600 hover:underline">TR90 plastic pellets</Link>.</strong> Tiny granules, maybe 2-3mm each. Look like nothing. But dump them into the injection molding machine hopper and 30 seconds later, a finished frame front pops out the other side. It still feels like magic to me after all these years.</p>

          <h2>Step 1: Cutting and Shaping</h2>

          <p>For acetate frames, this is where the real work begins. The acetate sheet goes onto a CNC machine — think of a very precise, very expensive router. A diamond-tipped bit cuts the frame front shape out of the sheet, following a CAD file that maps every curve and angle. Each frame front takes 8-12 minutes. The CNC room runs 16 hours a day in two shifts. The noise is deafening and smells like vinegar from the acetate being cut. I have gotten used to it. Visitors usually do not.</p>

          <p>For metal frames, the process is totally different. The wire feeds into an automatic bending machine — a series of hydraulic arms that bend the wire into the exact shape of a frame front. The joints where the temples attach get micro-welded using a laser. A single metal frame has 6-10 weld points, and every one of them gets stress-tested before the frame moves forward. If a weld fails, the frame gets scrapped — melted down and the metal reused.</p>

          <p>For injection-molded frames, it is fast and automated. The TR90 pellets melt at about 260°C, get injected into a steel mold at 80-120 tons of pressure, and 20 seconds later a robot arm plucks out a hot frame. One machine produces 1,200-1,500 frame fronts per shift. It is the fastest method, which is why TR90 frames cost less than acetate — less labor, less time, higher throughput.</p>

          <h2>Step 2: Tumbling and Polishing — Where Cheap Factories Cut Corners</h2>

          <p>Fresh out of the CNC machine, an acetate frame looks terrible. Rough edges, dull surface, machining marks everywhere. It goes into a tumbling barrel — a big rotating drum, about a meter in diameter, filled with wooden pegs and polishing compound. The barrel spins. Slowly. For 24 to 48 hours.</p>

          <p>Two full days. This is the step cheap factories rush or skip. They will tumble for 8-12 hours, which knocks off the roughness but does not get the deep polish. The difference is something you can feel with your fingers — a properly tumbled acetate frame is smooth as glass. A rushed one has a slight roughness at the edges that bothers you every time you put them on.</p>

          <p>After tumbling, skilled workers hand-polish each frame using buffing wheels. This is 100% manual. One experienced polisher finishes about 80-100 frames per day. Their hands develop calluses in specific spots from holding frames against the wheel. It is the kind of skill you cannot teach in a manual — it takes months of practice to know exactly how much pressure to apply.</p>

          <h2>Step 3: The Lenses</h2>

          <p>While frames are being cut and polished, the lens department is running parallel. Lenses start as big circular blanks — polycarbonate or TAC material, about 70mm in diameter. A diamond-grit edging machine cuts them to the exact shape of your frame, spraying water coolant the whole time to prevent heat warping.</p>

          <p>After cutting, the lenses go through whatever coating stack is specified for the order. UV400 is applied to every lens — that is not optional, it is the legal minimum. <Link href="/products/polarized/" className="text-primary-600 hover:underline">Polarized film</Link> gets sandwiched inside the lens during manufacturing if the order calls for it. Mirror coatings are applied via vacuum deposition — the lens goes into a chamber, the air gets sucked out, and a microscopic layer of metal oxide gets deposited on the surface. That is why mirror lenses have that reflective look.</p>

          <p>The coating room is the most expensive department in the factory. The vacuum deposition machine alone cost more than my first house. But if you want lenses that actually block UV, repel water, and do not scratch — this is the price of doing it right.</p>

          <h2>Step 4: Assembly</h2>

          <p>This is where everything comes together and where most of our 150 employees work. Each pair goes through about 15-20 individual assembly operations: hinge insertion, temple attachment, spring mechanism installation, nose pad welding or gluing, lens mounting (press-fit with 0.05mm tolerance), logo engraving via laser or pad printing, temple tip attachment, and final adjustment.</p>

          <p>A skilled assembler does 120-150 pairs per day. Our assembly room has 35 people working at stations arranged in a U-shape so frames flow naturally from one station to the next. It is the loudest, busiest part of the factory. The radio is always playing — the workers vote on the station every Monday. Usually it is Cantopop from the 90s. I have learned to tolerate it.</p>

          <h2>Step 5: Quality Control — What We Actually Test</h2>

          <p>Six tests. Every batch. No exceptions.</p>

          <p><strong>UV transmission.</strong> A spectrometer measures how much UV light passes through the lens. Must block 99.9% or higher. Lenses that fail get destroyed — snapped in half and thrown in the recycling bin.</p>

          <p><strong>Impact resistance.</strong> A 16-gram steel ball dropped from 1.27 meters onto the center of the lens. The lens must not crack, chip, or dislodge from the frame. This test is based on the FDA impact resistance standard. We test 10 random pairs from every batch of 500.</p>

          <p><strong>Hinge cycle.</strong> A machine opens and closes the temples 10,000 times. The hinge must maintain tension and alignment throughout. If it gets loose before 10,000 cycles, the entire batch gets reworked with better hinges.</p>

          <p><strong>Dimensional check.</strong> Digital calipers measure frame width, temple length, bridge width, and lens dimensions against the CAD spec. Tolerance is ±0.5mm on frame dimensions and ±0.1mm on lens fit.</p>

          <p><strong>Lens clarity.</strong> Visual inspection under 500-lux lighting. Zero scratches, bubbles, or optical distortions allowed. This is the most tedious test — an inspector stares at lenses under bright light for hours. We rotate inspectors every two hours to prevent eye fatigue.</p>

          <p><strong>Frame alignment.</strong> The finished sunglasses are placed on a flat granite surface. Both temples must touch the surface simultaneously within 1mm tolerance. If one temple hovers, the frame is out of alignment — it will sit crooked on a face. These get sent back for re-adjustment.</p>

          <p>Our QC target is a 0.5% defect rate. That means out of 10,000 pairs, 50 or fewer have any detectable issue. We hit this target about 90% of months.</p>

          <h2>The Last Step</h2>

          <p>Every finished pair goes into a microfiber pouch, then a case, then an outer carton. We take a photo of every carton before it leaves — the &ldquo;last look&rdquo; photo. It goes to the client so they can see exactly what is on the way. The cartons get loaded onto a DHL truck that picks up at 4 PM every weekday. By 6 PM the same day, the tracking numbers are in the client&apos;s inbox.</p>

          <p>Twenty-seven steps, roughly 15-25 days from raw material to shipping, and a lot of people who genuinely care about making a good product. That is how sunglasses are made — at least, that is how we make them.</p>

          <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 my-8">
            <p className="text-primary-900 mb-2">If you are curious about any part of the manufacturing process — or you want to see it for yourself — I do video tours of the factory floor for potential clients. Takes 15 minutes and you can ask questions as we go.</p>
            <Link href="/contact" className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-700 transition-colors mt-3">Schedule a Virtual Factory Tour</Link>
          </div>

        </div>
      </div>
    </article>
  )
}
