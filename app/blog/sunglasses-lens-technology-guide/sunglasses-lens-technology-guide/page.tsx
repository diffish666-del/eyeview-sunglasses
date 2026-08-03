import Link from 'next/link'
import type { Metadata } from 'next'
import { KeyTakeaways } from '@/components/GEOContent'

export const metadata: Metadata = {
  title: 'Sunglasses Lens Technology Guide: UV400 vs Polarized vs Photochromic (2026)',
  description: 'UV400 vs polarized vs photochromic — what each actually does, which one you need, and the car windshield gotcha nobody explains. Factory-level breakdown from someone who makes these lenses.',
  keywords: 'UV400 vs polarized, polarized vs photochromic, photochromic sunglasses, UV400 sunglasses, polarized sunglasses guide, sunglasses lens types, lens technology sunglasses, photochromic lens not working car, best lens for sunglasses',
  openGraph: {
    title: 'Sunglasses Lens Technology: UV400 vs Polarized vs Photochromic (2026)',
    description: 'UV400 vs polarized vs photochromic — what each actually does, which one you need, and the car windshield gotcha nobody explains.',
    type: 'article',
    publishedTime: '2026-07-17',
    url: 'https://eyeviewsunglasses.com/blog/sunglasses-lens-technology-guide/',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/blog/sunglasses-lens-technology-guide/',
  },
}

const blogFaqs = [
  {
    question: "What's the difference between UV400 and polarized?",
    answer: "UV400 blocks UV radiation (protection). Polarized blocks glare (comfort). They do completely different things. A lens can be UV400 without being polarized, and vice versa. Ideally, your sunglasses should be both: UV400 for eye health, polarized for visibility."
  },
  {
    question: "Why don't my photochromic (transition) lenses get dark in the car?",
    answer: "Because car windshields block UV light — and photochromic lenses are triggered by UV. Inside a car, there's minimal UV reaching the lenses, so they stay clear. This is the #1 complaint about photochromic lenses that nobody warns you about before buying. If you need dark lenses for driving, get proper polarized sunglasses instead."
  },
  {
    question: "Can a lens be both photochromic AND polarized?",
    answer: "Yes, but they're expensive and uncommon. Transitions Vantage is the best-known example — they darken AND polarize as UV increases. However, the polarization effect is proportional to darkness (weaker in low light), and they still don't work well behind car windshields for the same UV-blocking reason."
  },
  {
    question: "What lens type is best for driving?",
    answer: "Polarized grey or brown lenses with UV400 protection. Polarization cuts dashboard glare and road reflections. Avoid photochromic lenses for driving (windshield blocks UV, lenses stay clear). Category 3 tint is the sweet spot — dark enough for midday sun but not too dark for overcast conditions."
  },
]

export default function SunglassesLensTechGuidePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Sunglasses Lens Technology Guide: UV400 vs Polarized vs Photochromic (2026)",
            "datePublished": "2026-07-17",
            "dateModified": "2026-07-17",
            "description": "UV400 vs polarized vs photochromic — what each actually does, which one you need, and the car windshield gotcha nobody explains.",
            "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
            "publisher": { "@type": "Organization", "name": "EyeView Sunglasses", "logo": { "@type": "ImageObject", "url": "https://eyeviewsunglasses.com/logo.png" } }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": blogFaqs.map(f => ({
              "@type": "Question",
              "name": f.question,
              "acceptedAnswer": { "@type": "Answer", "text": f.answer }
            }))
          })
        }}
      />

      <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-primary-600">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/blog/" className="hover:text-primary-600">Blog</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-900">Sunglasses Lens Technology Guide: UV400 vs Polarized vs Photochromic</span>
      </nav>

      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Sunglasses Lens Technology Guide: UV400 vs Polarized vs Photochromic (2026)
      </h1>
      <p className="text-gray-500 mb-8">Published July 17, 2026 · 13 min read</p>

        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
          <div>
            <div className="font-medium text-gray-900">Jacky Chen</div>
            <div className="text-sm text-gray-500">Founder, EyeView Sunglasses</div>
          </div>
        </div>

        <nav className="bg-gray-100 rounded-xl p-6 mb-12">
          <h2 className="font-bold mb-4">Table of Contents</h2>
          <ul className="space-y-2">
            <li><a href="#uv400" className="text-primary-600 hover:underline">UV400: The Non-Negotiable Baseline</a></li>
            <li><a href="#polarized" className="text-primary-600 hover:underline">Polarized: The Glare Killer</a></li>
            <li><a href="#photochromic" className="text-primary-600 hover:underline">Photochromic: The Shape-Shifter (With a Big Catch)</a></li>
            <li><a href="#comparison" className="text-primary-600 hover:underline">UV400 vs Polarized vs Photochromic: The Comparison</a></li>
            <li><a href="#lens-colors" className="text-primary-600 hover:underline">Lens Colors: More Than Fashion</a></li>
            <li><a href="#lens-categories" className="text-primary-600 hover:underline">Lens Categories (VLT): How Dark Is Too Dark?</a></li>
            <li><a href="#what-to-buy" className="text-primary-600 hover:underline">What Should You Actually Buy?</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">Common Questions</a></li>
          </ul>
        </nav>

      {/* TL;DR */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-10">
        <p className="font-bold text-blue-900 mb-2">The Short Version</p>
        <p className="text-blue-800">
          I manufacture sunglasses lenses for a living, and the most common question isn't about frame styles — it's about lens tech. People walk into stores, see "UV400," "polarized," and "photochromic," and pick the cheapest pair because those words mean nothing to them. Here's the 30-second version: <strong>UV400 protects your eyes from damage</strong> (non-negotiable, every pair should have this). <strong>Polarized cuts glare</strong> (makes driving and fishing dramatically better). <strong>Photochromic adjusts to light</strong> (convenient, but there's a huge catch nobody tells you about — keep reading). They serve three completely different purposes, and picking the wrong one means you either overpaid or underprotected your eyes.
        </p>
      </div>

      <KeyTakeaways items={[
        "UV400 = health (blocks UVA+UVB). Polarized = comfort (blocks glare). Photochromic = convenience (adapts to light).",
        "You can get lenses that are UV400 + polarized. You can get photochromic + UV400. You can even get all three (expensive).",
        "Photochromic lenses DON'T WORK in cars — windshields block the UV that makes them darken.",
        "Polarized lenses can make LCD screens (car dashboards, phones) look black or distorted at certain angles.",
        "Grey lenses keep colors natural. Brown/amber boosts contrast. Green-grey is a nice middle ground. Mirror coating is pure fashion.",
      ]} />

      {/* UV400 Explained */}
      <section className="mb-10">
        <h2 id="uv400" className="text-2xl font-bold mb-4">UV400: The Non-Negotiable Baseline</h2>
        <p className="text-gray-700 mb-4">
          UV400 isn't a lens type — it's a protection standard. It means the lens blocks 100% of UVA and UVB rays up to 400 nanometers in wavelength. That covers the entire UV spectrum that harms human eyes.
        </p>
        
        <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-4">
          <p className="font-bold text-red-800 mb-1">⚠️ Critical: Dark lenses without UV400 are WORSE than no sunglasses at all.</p>
          <p className="text-red-700 text-sm">
            Dark tinted lenses make your pupils dilate (open wider). If there's no UV filtering, MORE harmful UV gets into your eyes than if you weren't wearing anything. This is why gas station sunglasses are an actual health risk.
          </p>
        </div>

        <p className="text-gray-700 mb-4">
          UV400 protection is embedded into the lens material or applied as a coating. In manufacturing, we test every batch with a UV spectrometer — a lens either passes at 400nm or it doesn't. There's no partial credit. Any decent factory includes UV400 as standard on every lens they make. If a supplier charges extra for "UV protection," find a different supplier.
        </p>

        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">UV Standard</th>
                <th className="border p-3 text-left">Blocks Up To</th>
                <th className="border p-3 text-left">Protection Level</th>
                <th className="border p-3 text-left">Suitable For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-medium">UV380</td>
                <td className="border p-3">380nm</td>
                <td className="border p-3 text-orange-600">Basic</td>
                <td className="border p-3">Indoor / fashion only</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3 font-medium">UV400</td>
                <td className="border p-3 font-bold text-green-700">400nm</td>
                <td className="border p-3 text-green-700 font-bold">Full</td>
                <td className="border p-3">All outdoor use</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500">CE and ANSI Z80.3 standards both require UV400 for a lens to be classified as sun protection. No reputable manufacturer ships anything less.</p>
      </section>

      {/* Polarized Explained */}
      <section className="mb-10">
        <h2 id="polarized" className="text-2xl font-bold mb-4">Polarized: The Glare Killer</h2>
        <p className="text-gray-700 mb-4">
          Polarized lenses have a chemical filter — a thin laminate layer — that blocks horizontally-polarized light waves. This is the light that bounces off flat surfaces: water, wet roads, car hoods, snow, sand. Without polarization, this reflected light hits your eyes as blinding glare. With it, the world looks sharper, colors are truer, and your eyes don't have to squint against the brightness.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">How to Test If Lenses Are Actually Polarized</h3>
        <p className="text-gray-700 mb-4">
          Hold the glasses in front of an LCD screen (phone, computer monitor). Rotate the glasses 90 degrees. If the lenses are polarized, the screen will go black or extremely dark at a certain angle. This works because LCD screens emit polarized light — when the lens filter aligns perpendicular to the screen's polarization, it blocks nearly all the light. Try it with your current pair. If nothing changes, they're not polarized despite what the sticker says.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">The LCD Screen Problem</h3>
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-4">
          <p className="font-bold text-yellow-800 mb-1">Known Issue: Polarized sunglasses make some screens hard to read.</p>
          <p className="text-yellow-700 text-sm">
            Car dashboards, airplane seatback screens, ATM displays, and some smartphones use LCD panels that appear black or have rainbow patterns when viewed through polarized lenses. This isn't a defect — it's physics. Tilt your head slightly and the effect usually goes away. If you're a pilot or rely on LCD instruments, consider non-polarized lenses.
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3">Polarized Lens Construction: TAC vs Others</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">Polarization Type</th>
                <th className="border p-3 text-left">Material</th>
                <th className="border p-3 text-left">Quality</th>
                <th className="border p-3 text-left">Cost/lens</th>
                <th className="border p-3 text-left">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-medium">TAC Polarized</td>
                <td className="border p-3">Tri-acetate cellulose</td>
                <td className="border p-3">Good</td>
                <td className="border p-3">$0.50-1.50</td>
                <td className="border p-3">Everyday, budget to mid-range</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3 font-medium">PC Polarized</td>
                <td className="border p-3">Polycarbonate</td>
                <td className="border p-3">Better</td>
                <td className="border p-3">$1.00-2.50</td>
                <td className="border p-3">Sports, impact resistance</td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">CR-39 Polarized</td>
                <td className="border p-3">CR-39 resin</td>
                <td className="border p-3">Best optical clarity</td>
                <td className="border p-3">$2.00-4.00</td>
                <td className="border p-3">Premium, optical grade</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3 font-medium">Glass Polarized</td>
                <td className="border p-3">Mineral glass</td>
                <td className="border p-3">Ultimate clarity</td>
                <td className="border p-3">$5.00-15.00</td>
                <td className="border p-3">High-end, Maui Jim tier</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Photochromic Explained */}
      <section className="mb-10">
        <h2 id="photochromic" className="text-2xl font-bold mb-4">Photochromic: The Shape-Shifter (With a Big Catch)</h2>
        <p className="text-gray-700 mb-4">
          Photochromic lenses — also called transition lenses — contain molecules (typically silver halide or organic photochromic compounds) that change shape when exposed to UV light. This molecular change makes the lens darker. Remove the UV, and the molecules return to their original shape, making the lens clear again.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">The Car Windshield Problem</h3>
        <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-4">
          <p className="font-bold text-red-800 mb-1">🚗 Photochromic lenses stay CLEAR in cars.</p>
          <p className="text-red-700">
            Modern car windshields are laminated with a PVB (polyvinyl butyral) interlayer that blocks 98-99% of UV radiation. Since photochromic lenses are triggered by UV, not visible light, they receive almost no activation signal inside a vehicle. Your transition lenses will stay clear or barely tinted while driving on the brightest day. I've had customers return photochromic "driving" glasses thinking they were defective. They weren't — the windshield was doing its job too well.
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3">Photochromic Performance Specs</h3>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">Performance Metric</th>
                <th className="border p-3 text-left">Typical Value</th>
                <th className="border p-3 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-medium">Darkening speed</td>
                <td className="border p-3">30-60 seconds to 80%</td>
                <td className="border p-3">Faster in cold weather, slower in heat</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3 font-medium">Clearing speed</td>
                <td className="border p-3">2-5 minutes indoors</td>
                <td className="border p-3">Slower in cold (can take 10+ min in winter)</td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">Full dark VLT</td>
                <td className="border p-3">12-20%</td>
                <td className="border p-3">Comparable to Category 3 sunglasses</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3 font-medium">Clear state VLT</td>
                <td className="border p-3">85-95%</td>
                <td className="border p-3">Nearly clear, slight residual tint</td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">Lifespan</td>
                <td className="border p-3">2-3 years active use</td>
                <td className="border p-3">Molecules fatigue; darkening weakens over time</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3 font-medium">Temperature effect</td>
                <td className="border p-3">Darker in cold, lighter in heat</td>
                <td className="border p-3">On a 35°C day, they may not reach full darkness</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Head-to-head comparison */}
      <section className="mb-10">
        <h2 id="comparison" className="text-2xl font-bold mb-4">UV400 vs Polarized vs Photochromic: The Comparison</h2>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">Feature</th>
                <th className="border p-3 text-left">UV400</th>
                <th className="border p-3 text-left">Polarized</th>
                <th className="border p-3 text-left">Photochromic</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-medium">What it does</td>
                <td className="border p-3">Blocks UV radiation</td>
                <td className="border p-3">Blocks reflected glare</td>
                <td className="border p-3">Darkens/clears with UV</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3 font-medium">Eye health</td>
                <td className="border p-3 text-green-700 font-bold">✅ Essential</td>
                <td className="border p-3">Indirect (reduces strain)</td>
                <td className="border p-3">✅ With UV coating</td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">Driving</td>
                <td className="border p-3">✅ Fine</td>
                <td className="border p-3 text-green-700 font-bold">✅ Best choice</td>
                <td className="border p-3 text-red-600 font-bold">❌ Doesn't work in cars</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3 font-medium">Fishing/water</td>
                <td className="border p-3">Protects only</td>
                <td className="border p-3 text-green-700 font-bold">✅ Cuts water glare</td>
                <td className="border p-3">Decent if UV4-matched</td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">Indoor/outdoor</td>
                <td className="border p-3">Wear anytime</td>
                <td className="border p-3">Outdoor only</td>
                <td className="border p-3 text-green-700 font-bold">✅ Seamless switch</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3 font-medium">Screen compatibility</td>
                <td className="border p-3">✅ No issues</td>
                <td className="border p-3 text-orange-600">⚠️ LCD distortion</td>
                <td className="border p-3">✅ No issues</td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">Lens lifespan</td>
                <td className="border p-3">Permanent</td>
                <td className="border p-3">Permanent</td>
                <td className="border p-3 text-orange-600">⚠️ 2-3 years</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3 font-medium">Wholesale cost adder</td>
                <td className="border p-3">$0 (standard)</td>
                <td className="border p-3">+$0.50-4.00</td>
                <td className="border p-3">+$3.00-10.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Lens Colors */}
      <section className="mb-10">
        <h2 id="lens-colors" className="text-2xl font-bold mb-4">Lens Colors: More Than Fashion</h2>
        <p className="text-gray-700 mb-4">
          Lens tint color changes what you see — contrast, color perception, depth judgment. Here's what each color actually does:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {[
            { color: 'Grey', effect: 'Neutral color perception. Best for driving and general use. Won\'t distort traffic light colors. Most popular.' },
            { color: 'Brown/Amber', effect: 'Boosts contrast, especially on green backgrounds (golf, hiking). Makes blues pop. Slightly warm color cast.' },
            { color: 'Green-Grey', effect: 'Reduces blue light without the warm cast of brown. Good for tennis, baseball — helps track fast objects.' },
            { color: 'Yellow/Gold', effect: 'Low-light enhancement, not sun protection. Skiing flat light, shooting, driving at dusk. NOT for bright sun.' },
            { color: 'Rose/Red', effect: 'High contrast in snow and water. Good for skiing and fishing. Can be fatiguing for all-day wear.' },
            { color: 'Blue/Mirror', effect: 'Pure fashion. Cool-looking but doesn\'t improve vision. Mirror coating reflects light but doesn\'t filter it.' },
          ].map((item, i) => (
            <div key={i} className="border rounded-lg p-4">
              <h3 className="font-bold mb-1">{item.color}</h3>
              <p className="text-gray-600 text-sm">{item.effect}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Category / VLT */}
      <section className="mb-10">
        <h2 id="lens-categories" className="text-2xl font-bold mb-4">Lens Categories (VLT): How Dark Is Too Dark?</h2>
        <p className="text-gray-700 mb-4">
          VLT = Visible Light Transmission. It's the percentage of light that passes through the lens. This is standardized into 5 categories:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">Category</th>
                <th className="border p-3 text-left">VLT Range</th>
                <th className="border p-3 text-left">Use Case</th>
                <th className="border p-3 text-left">Driving Legal?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-medium">Cat 0</td>
                <td className="border p-3">80-100%</td>
                <td className="border p-3">Indoor, fashion, night</td>
                <td className="border p-3 text-green-600">✅ Yes</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3 font-medium">Cat 1</td>
                <td className="border p-3">43-80%</td>
                <td className="border p-3">Overcast, low light</td>
                <td className="border p-3 text-green-600">✅ Yes</td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">Cat 2</td>
                <td className="border p-3">18-43%</td>
                <td className="border p-3">General purpose</td>
                <td className="border p-3 text-green-600">✅ Yes</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border p-3 font-medium">Cat 3</td>
                <td className="border p-3">8-18%</td>
                <td className="border p-3">Bright sun (most common)</td>
                <td className="border p-3 text-green-600">✅ Yes</td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">Cat 4</td>
                <td className="border p-3">3-8%</td>
                <td className="border p-3">Glacier, high altitude, extreme</td>
                <td className="border p-3 text-red-600 font-bold">❌ Illegal for driving</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500 mb-4">
          Cat 3 is the sweet spot for most sunglasses. Cat 4 lenses are dangerously dark for driving — banned in many countries. Most "gas station" sunglasses are Cat 3 tinted but lack UV400 certification, which is where the real danger lives.
        </p>
      </section>

      {/* Decision Framework */}
      <section className="mb-10">
        <h2 id="what-to-buy" className="text-2xl font-bold mb-4">What Should You Actually Buy?</h2>
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-green-800">Just want eye protection → UV400, non-polarized</h3>
            <p className="text-green-700 text-sm">Cheapest option. Blocks UV. Won't affect screens. Fine for casual walking and fashion. Get Category 2-3 tint.</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-green-800">Drive a lot → UV400 + Polarized, grey lens</h3>
            <p className="text-green-700 text-sm">Best setup for behind the wheel. Cuts road glare and dashboard reflections. Grey tint preserves true traffic light colors.</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-green-800">Fish, boat, or ski → UV400 + Polarized, brown or amber</h3>
            <p className="text-green-700 text-sm">Polarization cuts water/snow glare dramatically. Brown boosts contrast for reading water conditions.</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-green-800">Move indoors/outdoors all day → Photochromic + UV400</h3>
            <p className="text-green-700 text-sm">Convenience play. One pair that adapts. But price goes up and they wear out in 2-3 years. Keep a separate pair of polarized driving sunglasses in your car.</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-green-800">Cycling / trail running → Photochromic + UV400, not polarized</h3>
            <p className="text-green-700 text-sm">Photochromic handles tree cover to open sun transitions seamlessly. Skip polarization — it can mess with depth perception on trails and makes puddle/mud spotting harder.</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-green-800">Want everything? → Photochromic + Polarized combo lenses</h3>
            <p className="text-green-700 text-sm">Available (Transitions Vantage, some Zeiss options) but expensive — wholesale lenses cost $5-10+ each. Still won't work in cars. Consider: two pairs (one photochromic, one polarized) often costs less than one combo pair.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 id="faq" className="text-2xl font-bold mb-4">Common Questions</h2>
        <div className="space-y-4">
          {blogFaqs.map((faq, i) => (
            <div key={i} className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="bg-primary-50 border border-primary-200 rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold mb-3">Need sunglasses with specific lens specs for your brand?</h3>
        <p className="text-gray-600 mb-4">
          We manufacture every lens type covered in this guide — UV400, TAC polarized, PC polarized, CR-39 polarized, photochromic, and specialty tints. Specify your lens requirements and we'll match them. MOQ from 100 pieces per style.
        </p>
        <Link href="/contact/" className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
          Request Lens Samples →
        </Link>
      </div>
    </article>
  )
}
