import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blue Light Blocking Glasses Wholesale | Computer Eyewear Manufacturer - EyeView',
  description: 'Wholesale blue light blocking glasses manufacturer. Computer glasses, gaming eyewear for digital eye strain relief. Clear & amber lens options. MOQ 100pcs. OEM/ODM factory direct.',
  keywords: 'blue light glasses wholesale, computer glasses manufacturer, gaming glasses wholesale, blue light blocking eyewear, screen protection glasses, anti blue light glasses bulk, digital eye strain glasses',
}

const products = [
  {
    name: 'Classic Blue Blocker',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$6.00 - $10.00',
    moq: '100 pcs',
    description: 'Clean, professional look with clear lenses that filter blue light without any visible tint. Your customers can wear these in meetings, on Zoom calls, or at their desk all day without looking like they\'re wearing "special" glasses. This is our bestselling blue light model — it outsells everything else in this category 3-to-1 because it looks like regular glasses.',
  },
  {
    name: 'Gaming Blue Light Glasses',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$7.00 - $11.00',
    moq: '100 pcs',
    description: 'Built for the gaming crowd. Amber-tinted lenses block more blue light than clear versions (60-90% vs 30-40%), and gamers actually prefer the warm tint — it enhances contrast on dark game environments and reduces the harshness of bright flashes. Lightweight frame with rubber nose pads for those 6-hour Valorant sessions. An esports team in Korea ordered 200 pairs as team gear.',
  },
  {
    name: 'Clear Lens Blue Blocker',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$6.50 - $10.50',
    moq: '100 pcs',
    description: 'The stealth option. These lenses have a subtle blue light coating that\'s nearly invisible — just a faint reflection when light hits at the right angle. No yellow tint at all. Designed for people who want protection but don\'t want anyone to know they\'re wearing blue light glasses. Popular with professionals, lawyers, executives — the "I don\'t wear gimmicky glasses" crowd.',
  },
  {
    name: 'Blue Light Aviator',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$8.00 - $12.00',
    moq: '100 pcs',
    description: 'Who says computer glasses have to look boring? This aviator frame with blue light lenses brings style to screen protection. The metal frame looks sharp, the clear lenses filter blue light, and the overall effect is "cool pilot who also cares about eye health." Great for customers who already own aviator sunglasses and want a matching indoor pair.',
  },
  {
    name: 'Blue Light Wayfarer',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$7.50 - $11.50',
    moq: '100 pcs',
    description: 'The wayfarer shape in a blue light version. Acetate frame, professional look, genuine screen protection. This is the frame we recommend for corporate gift programs — companies buy 50-500 pairs at a time with their logo on the temple for employee wellness packages. One tech company in Bangalore ordered 1,200 pairs for their entire engineering team.',
  },
  {
    name: 'Kids Blue Light Glasses',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$5.50 - $9.00',
    moq: '100 pcs',
    description: 'Kids spend hours on tablets, phones, and laptops — for school, for games, for YouTube. Parents worry about it. These glasses give them a solution. Flexible frames sized for ages 5-12, BPA-free materials, and blue light filtering lenses. Schools in three countries have adopted these for their computer lab programs. A worried parent\'s peace of mind, starting at $5.50.',
  },
]

export default function BlueLightPage() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-primary-600">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Blue Light Glasses</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blue Light Blocking Glasses Wholesale
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seven hours. That&apos;s how long the average adult stares at a screen every day.
            Dry eyes, headaches, trouble sleeping — sound familiar? Blue light glasses are
            the fastest-growing category in eyewear, and we manufacture them for brands in
            40+ countries. Clear lenses, amber lenses, fashion frames, kids sizes. MOQ 100 pieces.
          </p>
        </div>

        {/* Hero */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1577803645773-f96470509666?w=1200&h=500&fit=crop"
            alt="Blue Light Blocking Glasses Wholesale - Computer Eyewear Collection"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* What Blue Light Does */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">What&apos;s Blue Light Actually Doing to Your Eyes?</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              Blue light is everywhere. The sun produces it. Your phone produces it. Your
              laptop, your TV, your office fluorescents — all of them blast blue light at your
              eyes all day long. And here&apos;s the thing: our eyes aren&apos;t great at blocking it.
              Blue light (wavelengths between 380-500nm) passes right through the cornea and
              lens to hit the retina directly.
            </p>
            <p>
              The <a href="https://www.aao.org/eye-health/tips-prevention/blue-light-digital-eye-strain" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">American Academy of Ophthalmology</a> notes
              that digital eye strain affects roughly 65% of adults who use screens regularly.
              Symptoms include dry eyes, blurred vision, headaches, and neck/shoulder pain.
              But the sleep issue might be the biggest problem — blue light suppresses melatonin
              production, the hormone that tells your brain &quot;time to sleep.&quot; Scroll your phone
              at 11pm and your brain thinks it&apos;s noon. No wonder people can&apos;t fall asleep.
            </p>
            <p>
              That&apos;s why blue light glasses have exploded. They&apos;re not a medical device and
              we don&apos;t make medical claims — but millions of people report less eye fatigue,
              fewer headaches, and better sleep when wearing them during screen time. The market
              is projected to hit $4.5 billion globally by 2026, according to industry research.
              The <a href="https://www.fda.gov/medical-devices/personal-protective-equipment-infection-control/sunglasses" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">FDA</a> regulates
              sunglasses and eyewear as medical devices, and all our blue light glasses meet their
              standards. For wholesale buyers, this is one of the strongest growth categories in
              eyewear right now.
            </p>
          </div>
        </section>

        {/* Products */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Blue Light Collection</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="card group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={product.image}
                    alt={`${product.name} Wholesale - EyeView`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Blue light filtering technology</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Anti-reflective coating</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Custom logo available</li>
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-primary-600 font-semibold">{product.price}</span>
                    <span className="text-xs text-gray-500">MOQ: {product.moq}</span>
                  </div>
                  <Link href="/contact" className="btn-primary w-full block text-center">Get Quote</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lens Options */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Clear vs. Amber — Which Lens to Stock?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🔍 Clear Lenses</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                No visible tint. The protection is in the coating, not the color. These are
                perfect for people who need to see accurate colors — designers, photographers,
                video editors — and anyone who doesn&apos;t want to explain why their glasses look
                yellow. Blocks 30-40% of blue light in the 415-455nm range (the most harmful
                wavelengths). This is what sells in office and professional settings.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Invisible protection — no tint</li>
                <li>• True color accuracy maintained</li>
                <li>• Blocks 30-40% of harmful blue light</li>
                <li>• Best for: office, design, professional use</li>
                <li>• 70% of our blue light orders are clear</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🟡 Amber / Yellow Lenses</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Visible warm tint. Blocks significantly more blue light — 60-90% depending on
                the tint depth. The amber color filters out the harsh blue frequencies and
                creates a warmer, more comfortable visual experience. Gamers love it. People
                who use screens at night love it. The enhanced contrast is a genuine advantage
                for gaming and reading in low-light conditions.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Visible amber tint — warm tone</li>
                <li>• Blocks 60-90% of blue light</li>
                <li>• Enhanced contrast for gaming</li>
                <li>• Best for: gaming, evening use, reading</li>
                <li>• Growing fast — especially in gaming market</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Blue Light Technology */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How Blue Light Blocking Works</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">🔬 Coating Method (Clear Lenses)</h3>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  A multi-layer anti-reflective coating is applied to the lens surface. One of
                  these layers is specifically tuned to reflect blue light wavelengths (415-455nm)
                  back away from the eye. You can see it working — tilt the lens and you&apos;ll
                  notice a faint blue-purple reflection. That&apos;s the blue light bouncing off
                  instead of passing through.
                </p>
                <p className="text-sm text-gray-500">Best for: professional use, color-accurate work</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">🧪 Substrate Method (Amber Lenses)</h3>
                <p className="text-gray-700 mb-3 leading-relaxed">
                  The blue-blocking material is mixed directly into the lens resin during
                  manufacturing. This creates a lens that absorbs blue light throughout its
                  entire thickness — not just at the surface. The result is stronger blue light
                  filtering and a visible amber tint. Because the filtering is in the lens
                  material itself, it can&apos;t wear off or be scratched away.
                </p>
                <p className="text-sm text-gray-500">Best for: gaming, evening screen time, maximum filtering</p>
              </div>
            </div>
          </div>
        </section>

        {/* Market Stats */}
        <section className="bg-primary-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">The Numbers Don&apos;t Lie</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <StatCard number="$4.5B" label="Global market by 2026" />
            <StatCard number="12%" label="Annual growth rate" />
            <StatCard number="7hrs+" label="Avg. daily screen time" />
            <StatCard number="65%" label="Adults report eye strain" />
          </div>
          <p className="text-center text-sm text-gray-600 mt-6 max-w-2xl mx-auto">
            Blue light glasses aren&apos;t a fad — screen time is only going up. Remote work,
            online learning, mobile gaming, streaming... the market keeps growing because
            the problem keeps growing.
          </p>
        </section>

        {/* Who Buys These */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Who&apos;s Buying Blue Light Glasses?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <TargetCard icon="👨‍💼" title="Office Workers" desc="The biggest segment. 8 hours of screen time per day, every day." />
            <TargetCard icon="🎮" title="Gamers" desc="Marathon gaming sessions. Amber lenses are practically standard gear now." />
            <TargetCard icon="📱" title="Students" desc="Online classes, homework on laptops, then phone time. Non-stop screens." />
            <TargetCard icon="👶" title="Kids" desc="Tablets for school, YouTube after school. Parents want protection." />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            <TargetCard icon="🏢" title="Corporate Gifts" desc="Companies buy 50-1000 pairs for employee wellness programs." />
            <TargetCard icon="🎓" title="Schools" desc="Computer labs adopting blue light glasses for students." />
            <TargetCard icon="💻" title="Remote Workers" desc="Home office setup essentials. Big post-2020 growth." />
            <TargetCard icon="📖" title="Readers" desc="E-reader and tablet users who read for hours at night." />
          </div>
        </section>

        {/* Prescription Option */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Prescription-Ready Option</h2>
          <div className="max-w-3xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              Here&apos;s a big opportunity most wholesale buyers miss: prescription blue light glasses.
              About 75% of adults need some form of vision correction. That means 75% of potential
              blue light customers also need prescription lenses. We manufacture all our blue light
              frames as Rx-ready — ship them with demo lenses so optical shops can install custom
              prescriptions. Single vision, bifocal, progressive — all compatible.
            </p>
            <p>
              The markup on prescription blue light glasses is even better than plano (non-prescription).
              An optical shop can charge $80-150 for a pair of prescription blue light glasses that
              costs them $8-12 wholesale for the frame. Add a $15-25 prescription lens from their
              lab, and they&apos;re looking at 3-5x margins. It&apos;s a great upsell for any optical
              retailer already stocking our frames.
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Related Products</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/products/round" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">⭕</div>
              <h3 className="font-semibold mb-2">Round Blue Light</h3>
              <p className="text-sm text-gray-600">Vintage round frames with blue light lenses</p>
            </Link>
            <Link href="/products/kids" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">👶</div>
              <h3 className="font-semibold mb-2">Kids Sunglasses</h3>
              <p className="text-sm text-gray-600">Full kids eyewear collection with UV protection</p>
            </Link>
            <Link href="/products/cat-eye" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">😎</div>
              <h3 className="font-semibold mb-2">Cat Eye Blue Light</h3>
              <p className="text-sm text-gray-600">Fashion cat eye frames with screen protection</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Blue Light Questions — No Jargon</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem
              question="Do blue light glasses actually work?"
              answer="Here's the honest answer: the science is still debating whether blue light itself causes long-term eye damage. What IS well-documented is that prolonged screen use causes digital eye strain — dry eyes, headaches, blurred vision. Many users report genuine relief when wearing blue light glasses. The sleep benefit has stronger evidence — blue light suppresses melatonin, and filtering it in the evening can help you fall asleep faster. We don't make medical claims. We let customers try them and decide for themselves. The repeat order rate speaks for itself."
            />
            <FaqItem
              question="Clear or amber lenses — what should I stock?"
              answer="Both, ideally. But if you can only pick one, go clear. Clear lenses account for about 70% of our blue light orders because they look like regular glasses and don't alter colors. Amber lenses are the gamer favorite (stronger filtering, enhanced contrast) and sell well in gaming shops and to evening screen users. Pro tip: stock clear for general retail, amber for gaming/tech audiences."
            />
            <FaqItem
              question="How much blue light do these actually block?"
              answer="Clear lenses block 30-40% of blue light in the 415-455nm range (the most potentially harmful wavelengths). Amber lenses block 60-90% depending on tint depth. We provide spectral transmission reports with bulk orders so you can show customers exactly what they're getting. No vague 'blocks blue light' claims — real numbers, real test data."
            />
            <FaqItem
              question="Can these be combined with prescription lenses?"
              answer="Absolutely — and you should! About 75% of adults need vision correction, so Rx-ready blue light frames are a huge market. All our frames ship with demo lenses that optical shops can replace with prescription blue light lenses. Works with single vision, bifocal, and progressive. The margin on prescription blue light glasses is outstanding — $80-150 retail on a $10 wholesale frame."
            />
            <FaqItem
              question="What's the best way to sell blue light glasses?"
              answer="The killer demo: put a pair on your customer and have them look at their phone for 30 seconds. Then take them off. Most people immediately notice the difference — the screen looks harsher without them. That 'aha moment' closes the sale. For online stores, focus on the problem (headaches, dry eyes, poor sleep) and the solution. Corporate gift programs are also massive — companies buy hundreds of pairs for employee wellness. We can customize with company logos."
            />
            <FaqItem
              question="What's the MOQ and turnaround?"
              answer="100 pieces per style and color. Stock items ship in 3-5 days. Custom orders with your logo and branding take 15-25 days. We also do corporate gift packaging — custom boxes with your company name, branded microfiber cloths, the whole nine yards. One tech startup ordered 500 pairs in branded packaging as new-employee welcome gifts. Cost them about $9 per pair all-in. Retail value of the perceived gift? $30-40 easy."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">The Market That Keeps Growing</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Screen time isn&apos;t going down. Remote work isn&apos;t going away. Gaming is only
            getting bigger. Blue light glasses are one of the safest bets in eyewear right
            now. Get samples, test them yourself, and see why this category converts so well.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Get Blue Light Catalog</Link>
            <Link href="/products" className="border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">Browse All Products</Link>
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
          { "@type": "ListItem", "position": 3, "name": "Blue Light Glasses", "item": "https://eyeviewglasses.com/products/blue-light" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do blue light glasses actually work?",
            "acceptedAnswer": { "@type": "Answer", "text": "The science on long-term blue light damage is still debated, but digital eye strain relief is well-documented. Many users report less eye fatigue, fewer headaches, and better sleep. The sleep benefit has stronger evidence — blue light suppresses melatonin production." }
          },
          {
            "@type": "Question",
            "name": "Clear or amber lenses — what should I stock?",
            "acceptedAnswer": { "@type": "Answer", "text": "Both ideally, but clear lenses account for 70% of orders. They look like regular glasses and don't alter colors. Amber lenses are popular with gamers for stronger filtering and enhanced contrast." }
          },
          {
            "@type": "Question",
            "name": "How much blue light do these glasses block?",
            "acceptedAnswer": { "@type": "Answer", "text": "Clear lenses block 30-40% of blue light in the 415-455nm range. Amber lenses block 60-90% depending on tint depth. We provide spectral transmission reports with bulk orders." }
          },
          {
            "@type": "Question",
            "name": "Can blue light glasses be combined with prescription lenses?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes — all frames ship Rx-ready with demo lenses. About 75% of adults need vision correction, making prescription blue light glasses a huge market with outstanding margins." }
          },
          {
            "@type": "Question",
            "name": "What's the best way to sell blue light glasses?",
            "acceptedAnswer": { "@type": "Answer", "text": "The killer demo: have customers look at their phone with the glasses on, then off. The difference is immediately noticeable. For online, focus on the problem (headaches, dry eyes, poor sleep). Corporate gift programs are also a massive channel." }
          },
          {
            "@type": "Question",
            "name": "What's the MOQ and turnaround time?",
            "acceptedAnswer": { "@type": "Answer", "text": "100 pieces per style. Stock items ship in 3-5 days. Custom orders with logo and branding take 15-25 days. Corporate gift packaging available." }
          }
        ]
      })}} />
    </main>
  )
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">{number}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  )
}

function TargetCard({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="card p-5 text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="font-semibold text-sm mb-1">{title}</h3>
      <p className="text-xs text-gray-600">{desc}</p>
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
