import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Occhiali Sportivi all'Ingrosso | Produttore Eyewear Atletico Polarizzato - EyeView`,
  description: `Produttore di occhiali sportivi all'ingrosso. Lenti polarizzate TAC, montature TR90, design avvolgente per ciclismo, corsa, pesca, golf, sci e baseball. MOQ 100 pezzi.`,
  keywords: `occhiali sportivi ingrosso, occhiali polarizzati sport, produttore occhiali atletici, occhiali ciclismo ingrosso`,
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/it/prodotti/sportivo',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/sport',
      'it': 'https://eyeviewsunglasses.com/it/prodotti/sportivo',
    },
  },
}

const sportCategories = [
  {
    name: 'Cycling Sunglasses',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$10.00 - $15.00',
    moq: '100 pcs',
    description: 'You\'re doing 40km/h on a descent. A bug hits your eye. Game over. That\'s why every serious cyclist needs proper eyewear — not fashion shades from a gas station. Our cycling sunglasses wrap around the face to block wind, dust, and insects from every angle. The interchangeable lens system lets riders swap between clear lenses for dawn rides, yellow for overcast days, and dark tints for noon blasts. And the anti-slip rubber grips? They actually grip tighter when you sweat. No more pushing glasses back up your nose mid-climb.',
    features: ['Aerodynamic wraparound design', 'Interchangeable 3-lens system', 'Sweat-activated rubber grips', 'Ventilated anti-fog frame'],
  },
  {
    name: 'Running Sunglasses',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$9.50 - $14.00',
    moq: '100 pcs',
    description: 'Here\'s the thing about running sunglasses — if you can feel them on your face, they\'re wrong. Our running frames weigh under 25 grams. That\'s lighter than a AA battery. Marathoners wear them for 4+ hours without even noticing. The flexible TR90 frame absorbs the constant bounce of running, and the wide lenses give you full peripheral vision so you can spot that pothole or that off-leash dog before it\'s too late. We\'ve had running club owners order 500+ pairs at a time for team kits.',
    features: ['Under 25g — lighter than a battery', 'Hydrophilic sweat-grip pads', 'Full peripheral vision', 'Bounce-absorbing flexible frame'],
  },
  {
    name: 'Fishing Sunglasses',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$11.00 - $16.00',
    moq: '100 pcs',
    description: 'Picture this — you\'re out on the lake at 6am, the sun\'s bouncing off the water and you can\'t see your line. Every angler knows that blinding glare. Our fishing sunglasses cut right through it. The polarized lenses strip away surface reflection so you can actually see into the water — spot the fish, read the structure, watch your lure. Amber and copper tints boost contrast in both freshwater and saltwater. One fishing guide in Florida told us these glasses "paid for themselves on the first charter." We also offer floating frame options because, let\'s be honest, sunglasses and boats don\'t always mix well.',
    features: ['Polarized glare-cutting lenses', 'Amber/copper contrast tints', 'Floating frame option available', 'Saltwater-resistant hinges'],
  },
  {
    name: 'Golf Sunglasses',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$10.50 - $15.50',
    moq: '100 pcs',
    description: 'Golf is a game of inches, and you can\'t play inches if you can\'t see the ball. Our golf sunglasses use rose and amber lens tints that make a white ball pop against a green fairway. Tracking the ball flight against a bright sky? Easy. Reading the break on a sunlit green? Much clearer. The frame is so light you\'ll forget you\'re wearing them mid-swing — which is exactly the point. We supply several golf resort pro shops across Southeast Asia, and the feedback is always the same: "Players actually want to buy them after trying them on."',
    features: ['Rose/amber ball-tracking lenses', 'Featherlight swing-friendly fit', 'Wide temple sun shade', 'Pro-shop tested and approved'],
  },
  {
    name: 'Ski & Snowboard Sunglasses',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$12.00 - $17.00',
    moq: '100 pcs',
    description: 'Did you know UV levels jump 10% for every 1,000 meters of elevation? At the top of a ski run, your eyes are getting hammered. Snow blindness is real — and it\'s painful. Our ski sunglasses use Category 3-4 dark lenses that block 92-97% of visible light. The close-fitting wraparound design keeps wind and snow out of your eyes, while anti-fog ventilation channels prevent that annoying lens fogging when you\'re breathing hard on a mogul run. Helmet-compatible temple tips mean no pressure points under your helmet. A ski rental shop in Hokkaido orders 2,000 pairs from us every season.',
    features: ['Cat 3-4 snow blindness protection', 'Anti-fog ventilation channels', 'Wind-blocking close fit', 'Helmet-compatible design'],
  },
  {
    name: 'Baseball Sunglasses',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$10.00 - $15.00',
    moq: '100 pcs',
    description: 'An outfielder staring into the sun on a fly ball — that split second of blindness can cost the game. Our baseball sunglasses are built for exactly this moment. The amber polarized lenses sharpen a white ball against blue sky like nothing else. And these aren\'t flimsy frames — they meet ASTM F803 impact standards, meaning they can handle a line drive to the face. The secure wraparound stays locked during diving catches and headfirst slides. We\'ve supplied Little League teams, college programs, and rec leagues across 12 countries.',
    features: ['ASTM F803 impact protection', 'Amber polarized ball tracking', 'Secure no-slip wraparound', 'Shatterproof polycarbonate lens'],
  },
]

export default function SportPageIt() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/it/prodotti" className="hover:text-primary-600">Prodotti</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Sport Sunglasses</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sport Sunglasses Wholesale
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built for athletes who actually need their sunglasses to perform — not just look good.
            Polarized TAC lenses, featherlight TR90 frames, and wraparound designs that stay put
            when you&apos;re pushing hard. From cycling clubs to fishing charters, we supply the
            eyewear that works as hard as the people wearing it.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=1200&h=500&fit=crop"
            alt="Sport Sunglasses Collection - Polarized Athletic Eyewear for Cycling Running Fishing"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Why Sport Sunglasses Matter */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Why Cheap Sunglasses Don&apos;t Cut It for Sports</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              Let&apos;s be blunt: those $3 sunglasses from the checkout counter will fall off your face
              the moment you start sweating. They&apos;ll fog up when you breathe hard. They&apos;ll bounce
              around on every stride. And worst of all — some of them don&apos;t even block UV properly,
              which means they&apos;re actually <em>more dangerous</em> than wearing nothing at all. (Dark
              lenses without UV protection dilate your pupils, letting in more harmful radiation.
              Not good.)
            </p>
            <p>
              Real sport sunglasses solve problems that athletes actually have. Glare from wet roads
              during a morning ride? Polarized TAC lenses kill it. Frames that shatter on impact?
              TR90 nylon bends instead of breaking — you can literally twist them 90 degrees and they
              snap right back. Glasses sliding down a sweaty nose? Hydrophilic rubber pads grip
              <em> tighter</em> when wet. These aren&apos;t gimmicks. They&apos;re the difference between
              gear that helps you perform and gear that gets in the way. The <a href="https://www.who.int/news-room/questions-and-answers/item/radiation-ultraviolet-(uv)" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">World Health Organization</a> recommends
              UV-protective eyewear for anyone spending extended time outdoors — and athletes are at the top of that list.
            </p>
            <p>
              We&apos;ve been manufacturing sport sunglasses for over 8 years, shipping to outdoor
              retailers, sports teams, gym chains, and promotional companies across 50+ countries.
              Whether you need 100 pairs for a cycling team or 10,000 for a retail launch, we&apos;ve
              got you covered — and we&apos;ll put your logo on them too.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=1200&h=500&fit=crop" alt="Wholesale Sport Sunglasses" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

        {/* Products with Unique Descriptions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Sport Sunglasses by Activity</h2>
          <div className="space-y-12">
            {sportCategories.map((product, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                <div className="md:w-1/2">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img loading="lazy"
                      src={product.image}
                      alt={`${product.name} Wholesale - EyeView`}
                      className="w-full h-72 object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-lg font-semibold text-primary-600">{product.price}</span>
                    <span className="text-sm text-gray-500">MOQ: {product.moq}</span>
                  </div>
                  <Link href="/it/contatti" className="btn-primary inline-block">
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Materials & Technology */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">The Tech Behind the Toughness</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">🔬 TR90 Frames — Bend Them, They Won&apos;t Break</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                TR90 is a thermoplastic nylon originally developed in Switzerland. It&apos;s the same
                family of materials used in high-end sports equipment. What makes it special? It&apos;s
                35% lighter than regular plastic frames — most of our sport frames weigh between
                22-28 grams. You can bend a TR90 frame 90 degrees and it springs right back. Try
                that with a cheap pair from the market. It&apos;s also hypoallergenic, so no itchy red
                marks after a long ride. Works fine in freezing ski conditions (-40°C) and won&apos;t
                warp in a hot car (up to 120°C).
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>35% lighter than standard plastic</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Survives 90° bending — no snap</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Handles -40°C to 120°C</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Hypoallergenic & BPA-free</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">🛡️ TAC Polarized Lenses — 7 Layers of &quot;Whoa&quot;</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our TAC lenses aren&apos;t just a tinted piece of plastic. They&apos;re a 7-layer sandwich:
                hard coating on the outside for scratch resistance, TAC material layers for structural
                strength, a polarizing film in the center that kills 99% of glare, and UV coating
                underneath that blocks everything up to 400nm. The result? You put them on and the
                world just... clears up. Road glare disappears. Water reflection vanishes. Colors
                look richer. It&apos;s the kind of difference that makes people say &quot;I can&apos;t go back to
                regular lenses.&quot;
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>7-layer polarized construction</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>99% horizontal glare eliminated</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Full UV400 protection</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Impact-resistant polycarbonate option</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What Sets These Apart</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <FeatureCard icon="🏃" title="Stupid Light" description="Under 28g. You'll forget they're on your face — until someone asks where you got them." />
            <FeatureCard icon="🛡️" title="Impact Tough" description="Polycarbonate lenses that meet ANSI Z87.1. A rock chip won't ruin your ride." />
            <FeatureCard icon="💧" title="No Fog, Ever" description="Ventilated channels keep air moving. Sprint up a hill — lenses stay clear." />
            <FeatureCard icon="☀️" title="Real UV400" description="Lab-tested, certified. Blocks 100% of UVA/UVB/UVC. Not just a sticker claim." />
          </div>
        </section>

        {/* Specifications Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Specs at a Glance</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left font-semibold">Spec</th>
                  <th className="p-4 text-left font-semibold">Standard Line</th>
                  <th className="p-4 text-left font-semibold">Premium Line</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr><td className="p-4 font-medium">Frame Material</td><td className="p-4 text-gray-600">PC (Polycarbonate)</td><td className="p-4 text-gray-600">TR90 Nylon</td></tr>
                <tr><td className="p-4 font-medium">Lens Material</td><td className="p-4 text-gray-600">AC (Acrylic)</td><td className="p-4 text-gray-600">TAC Polarized</td></tr>
                <tr><td className="p-4 font-medium">Lens Width</td><td className="p-4 text-gray-600">65-68mm</td><td className="p-4 text-gray-600">65-72mm</td></tr>
                <tr><td className="p-4 font-medium">Bridge Width</td><td className="p-4 text-gray-600">14-16mm</td><td className="p-4 text-gray-600">14-18mm</td></tr>
                <tr><td className="p-4 font-medium">Temple Length</td><td className="p-4 text-gray-600">125-135mm</td><td className="p-4 text-gray-600">130-140mm</td></tr>
                <tr><td className="p-4 font-medium">Weight</td><td className="p-4 text-gray-600">28-35g</td><td className="p-4 text-gray-600">22-28g</td></tr>
                <tr><td className="p-4 font-medium">UV Protection</td><td className="p-4 text-gray-600">UV400</td><td className="p-4 text-gray-600">UV400</td></tr>
                <tr><td className="p-4 font-medium">Polarization</td><td className="p-4 text-gray-600">Optional</td><td className="p-4 text-gray-600">Standard (TAC 1.1mm)</td></tr>
                <tr><td className="p-4 font-medium">Lens Colors</td><td className="p-4 text-gray-600">5 options</td><td className="p-4 text-gray-600">12+ options</td></tr>
                <tr><td className="p-4 font-medium">Nose Pads</td><td className="p-4 text-gray-600">Fixed rubber</td><td className="p-4 text-gray-600">Adjustable hydrophilic rubber</td></tr>
                <tr><td className="p-4 font-medium">Hinge</td><td className="p-4 text-gray-600">Standard barrel</td><td className="p-4 text-gray-600">Spring hinge</td></tr>
                <tr><td className="p-4 font-medium">Certifications</td><td className="p-4 text-gray-600">CE, FDA</td><td className="p-4 text-gray-600">CE, FDA, ANSI Z87.1</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">You Might Also Like</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/it/prodotti/polarizzato" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🔆</div>
              <h3 className="font-semibold mb-2">Polarized Sunglasses</h3>
              <p className="text-sm text-gray-600">All our polarized styles in one place</p>
            </Link>
            <Link href="/it/prodotti/bambini" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">👶</div>
              <h3 className="font-semibold mb-2">Kids Sport Sunglasses</h3>
              <p className="text-sm text-gray-600">Safe, tough eyewear for young athletes</p>
            </Link>
            <Link href="/it/prodotti/luce-blu" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="font-semibold mb-2">Blue Light Glasses</h3>
              <p className="text-sm text-gray-600">For when training moves indoors</p>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Questions We Get All the Time</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem
              question="What's the minimum order? Can I start small?"
              answer="Yep — 100 pieces per style and color is our standard MOQ. If you want your own logo and custom colors, that bumps up to 300 pieces. But honestly, most first-time buyers start with a mixed sample order to test the market. Just tell us what you're after and we'll figure out a way to make it work."
            />
            <FaqItem
              question="TR90 vs. polycarbonate — which should I pick?"
              answer="Short answer: TR90 if you can afford it. It's 35% lighter, way more flexible (you can literally bend it flat and it springs back), and it feels premium. Polycarbonate is totally fine for budget lines — it's still impact-resistant and gets the job done. But if your customers are serious athletes or you're positioning as a premium brand, go TR90. The price difference is usually only $1-2 per pair."
            />
            <FaqItem
              question="Are all your sport sunglasses polarized?"
              answer="Polarization is available on every model, but it's not always included by default on the standard line — it's optional. On our premium line, TAC polarized lenses come standard. We offer 12+ lens colors including gray, brown, amber, yellow (great for low light), blue mirror, red mirror, and clear. We also do photochromic lenses that auto-adjust to sunlight. Those are popular with cyclists who ride from dawn to noon."
            />
            <FaqItem
              question="Can you put our logo on them?"
              answer="Absolutely. We do logo printing on temples (pad printing or laser etching), lens etching, custom frame colors with Pantone matching, custom packaging — the works. One client sent us a napkin sketch of a frame design and we turned it into a 3D prototype in two weeks. If you can dream it, we can probably make it."
            />
            <FaqItem
              question="What certifications come with these?"
              answer="Every pair ships with CE and FDA compliance. Our premium line also meets ANSI Z87.1 — that's the industrial impact resistance standard, meaning these lenses can take a hit from a steel ball at high velocity without shattering. We provide UV400 lab test reports from independent labs. Need AS/NZS 1067 for the Australian market? We can do that too."
            />
            <FaqItem
              question="How fast can you ship?"
              answer="Stock items without customization? 3-5 business days. Custom orders with your logo and colors? 15-25 days for production, then 5-7 days air freight to most countries. Sea freight is cheaper but takes 20-35 days. We ship via DHL, FedEx, UPS — your call. Rush orders? Talk to us. We've pulled off 10-day turnarounds before when a client had a deadline."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Get Your Sport Line Started</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Sports teams, outdoor shops, fitness brands, promo companies — we&apos;ve worked with them all.
            Tell us what you need, and we&apos;ll send samples so you can see the quality for yourself.
            No pressure, no commitment on samples.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/it/contatti" className="btn-primary">Get Team Pricing</Link>
            <Link href="/it/prodotti" className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">Browse All Products</Link>
          </div>
        </section>
      </div>

      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://eyeviewglasses.com" },
          { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://eyeviewglasses.com/products" },
          { "@type": "ListItem", "position": 3, "name": "Sport Sunglasses", "item": "https://eyeviewglasses.com/products/sport" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What's the minimum order? Can I start small?",
            "acceptedAnswer": { "@type": "Answer", "text": "100 pieces per style and color is our standard MOQ. Custom logo orders start at 300 pieces. Most first-time buyers start with a mixed sample order to test the market." }
          },
          {
            "@type": "Question",
            "name": "TR90 vs. polycarbonate — which should I pick?",
            "acceptedAnswer": { "@type": "Answer", "text": "TR90 if you can afford it — it's 35% lighter, way more flexible, and feels premium. Polycarbonate is fine for budget lines. The price difference is usually only $1-2 per pair." }
          },
          {
            "@type": "Question",
            "name": "Are all your sport sunglasses polarized?",
            "acceptedAnswer": { "@type": "Answer", "text": "Polarization is available on every model. It's optional on the standard line and included by default on the premium line. We offer 12+ lens colors including photochromic options." }
          },
          {
            "@type": "Question",
            "name": "Can you put our logo on them?",
            "acceptedAnswer": { "@type": "Answer", "text": "Absolutely — logo printing on temples, lens etching, custom frame colors with Pantone matching, and custom packaging. We can also create entirely new frame designs from your concept." }
          },
          {
            "@type": "Question",
            "name": "What certifications come with these?",
            "acceptedAnswer": { "@type": "Answer", "text": "CE and FDA on every pair. Premium line also meets ANSI Z87.1 for impact resistance. UV400 lab test reports included. AS/NZS 1067 available on request." }
          },
          {
            "@type": "Question",
            "name": "How fast can you ship?",
            "acceptedAnswer": { "@type": "Answer", "text": "Stock items ship in 3-5 business days. Custom orders take 15-25 days production plus 5-7 days air freight. Rush orders possible — we've done 10-day turnarounds." }
          }
        ]
      })}} />
    </main>
  )
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-sm">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-3">{question}</h3>
      <p className="text-gray-600 leading-relaxed">{answer}</p>
    </div>
  )
}
