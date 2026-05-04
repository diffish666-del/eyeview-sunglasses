import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Occhiali Bambini all'Ingrosso | Produttore Eyewear Protezione UV Bambini - EyeView`,
  description: `Produttore di occhiali da sole per bambini all'ingrosso. Sicuri, privi di BPA, certificati CPSIA e EN71. Montature flessibili infrangibili, UV400. MOQ 100 pezzi.`,
  keywords: `occhiali bambini ingrosso, produttore occhiali bambini, occhiali neonato ingrosso, occhiali protezione UV bambini`,
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/it/prodotti/bambini',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/kids',
      'it': 'https://eyeviewsunglasses.com/it/prodotti/bambini',
    },
  },
}

const products = [
  {
    name: 'Baby Sunglasses (0-3 yrs)',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=600&h=400&fit=crop',
    price: '$5.50 - $8.50',
    moq: '100 pcs',
    description: 'Let\'s be real — babies chew on everything. That\'s why these frames are made from food-grade silicone, the same stuff in baby bottle nipples. You could literally put them in your mouth (your baby will). Completely BPA-free, phthalate-free, and soft enough that they won\'t poke or pinch. The adjustable strap keeps them on even when your little one is determined to pull them off. Which they will. Repeatedly.',
  },
  {
    name: 'Toddler Sunglasses (3-5 yrs)',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=600&h=400&fit=crop',
    price: '$6.00 - $9.00',
    moq: '100 pcs',
    description: 'You know what happens to toddler sunglasses? They get sat on, stepped on, thrown across the room, and buried in the sandbox. That\'s why we make these from TPE — a flexible material that bends, twists, and gets absolutely abused, then bounces right back to shape. Available in 15+ colors because apparently every 4-year-old has a very strong opinion about their favorite color. (It\'s usually pink. Or dinosaur green.)',
  },
  {
    name: 'Kids Sport Sunglasses (6-9 yrs)',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=400&fit=crop',
    price: '$7.00 - $10.00',
    moq: '100 pcs',
    description: 'For the kid who\'s always outside — soccer practice, swimming lessons, bike rides around the neighborhood. These are scaled-down versions of our adult sport frames with TR90 flexible frames and wraparound coverage. Polarized option available for beach trips and snow days. A youth sports league in California ordered 800 pairs last year for their summer program. Their feedback: "Finally, sport glasses that actually fit kids."',
  },
  {
    name: 'Girls Fashion Cat Eye (6-10 yrs)',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&h=400&fit=crop',
    price: '$7.00 - $10.00',
    moq: '100 pcs',
    description: 'Mini cat eyes for girls who want to look like Mom (or their favorite YouTuber). Sparkle accents, pastel colors, heart-shaped temple decorations — all the things that make a 7-year-old squeal "I LOVE THESE!" Same safety standards as all our kids frames, just with way more glitter. These are absolute rockstars in children\'s boutiques and beach resort shops.',
  },
  {
    name: 'Boys Aviator (8-12 yrs)',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=400&fit=crop',
    price: '$7.50 - $11.00',
    moq: '100 pcs',
    description: 'For the pre-teen who thinks he\'s too cool for "kiddie" sunglasses. These aviators look grown-up but are sized for younger faces (49-52mm lens width). Lightweight metal frame with spring hinges that accommodate different head sizes as kids grow. Impact-resistant polycarbonate lenses for skateboarding, biking, and whatever else 10-year-old boys get up to. (Spoiler: it usually involves jumping off things.)',
  },
  {
    name: 'Kids Polarized Sport',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&h=400&fit=crop',
    price: '$8.00 - $12.00',
    moq: '100 pcs',
    description: 'For the junior athletes who take their sport seriously. TAC polarized lenses cut glare from water, snow, and pavement — a real difference-maker for kids in swimming, skiing, or fishing with dad. These are our premium kids frames and the ones parents specifically ask for when they want the best protection money can buy. A swim school in Sydney uses these exclusively for their outdoor lessons.',
  },
]

export default function KidsPageIt() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/it/prodotti" className="hover:text-primary-600">Prodotti</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Kids Sunglasses</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kids Sunglasses Wholesale
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Parents don&apos;t mess around when it comes to their kids&apos; eyes. Neither do we.
            Every pair is BPA-free, UV400 certified, and meets CPSIA, ASTM F963, and EN71
            safety standards. Flexible frames that survive toddler chaos. Real UV protection
            — not just tinted plastic. Ages 0-12, starting at $5.50.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=1200&h=500&fit=crop"
            alt="Kids Sunglasses Wholesale - Safe UV Protection for Children Ages 0-12"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Why It Matters */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Here&apos;s Something Most Parents Don&apos;t Know</h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-4">
            <p>
              A child&apos;s eyes let in way more UV radiation than adult eyes. Way more. Before
              age 10, a kid&apos;s lens transmits over 75% of UV-A and 70% of UV-B rays straight
              to the retina. An adult lens? Only about 10%. That means your child&apos;s eyes are
              absorbing roughly 6-7x more UV damage on the same sunny day. And here&apos;s the
              scary part — the <a href="https://www.who.int/news-room/questions-and-answers/item/radiation-ultraviolet-(uv)" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">WHO says up to 80%</a> of a person&apos;s lifetime UV exposure happens
              before age 18.
            </p>
            <p>
              So when a parent buys those cute $2 novelty sunglasses from a dollar store?
              Those dark tinted lenses might actually be making things <em>worse</em>. Dark
              lenses without real UV protection cause pupils to dilate, letting in even more
              harmful radiation than no sunglasses at all. It&apos;s a problem. A real one.
            </p>
            <p>
              That&apos;s exactly why we take kids sunglasses so seriously. Every single pair we
              make gets lab-tested for UV400 compliance — meaning they block 99.9% of UV
              radiation up to 400 nanometers. We provide the test reports. We have the
              certifications. When a parent picks up a pair of our kids sunglasses, they
              can trust that their child&apos;s eyes are actually protected. Not just shaded.
              Protected.
            </p>
          </div>
        </section>

        {/* Hero Image */}
        <div className="mb-12">
          <img src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=1200&h=500&fit=crop" alt="Wholesale Kids Sunglasses" loading="lazy" className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg" />
        </div>

        {/* Products Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">The Kids Collection</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="card group">
                <div className="aspect-video overflow-hidden">
                  <img loading="lazy"
                    src={product.image}
                    alt={`${product.name} Wholesale - EyeView`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  <ul className="space-y-2 text-sm text-gray-600 mb-4">
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>BPA-free safe materials</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>Flexible unbreakable frame</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>100% UV400 protection</li>
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-primary-600 font-semibold">{product.price}</span>
                    <span className="text-xs text-gray-500">MOQ: {product.moq}</span>
                  </div>
                  <Link href="/it/contatti" className="btn-primary w-full block text-center">Get Quote</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Safety Certifications */}
        <section className="bg-primary-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Certifications Parents Can Trust</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-3">🇺🇸</div>
              <h3 className="font-bold mb-2">CPSIA</h3>
              <p className="text-sm text-gray-600">The big one for the US market. Lead below 100ppm, zero phthalates. If you&apos;re selling kids products in America, <a href="https://www.cpsc.gov/Regulations-Laws--Standards/Statutes/The-Consumer-Product-Safety-Improvement-Act" target="_blank" rel="noopener" className="text-primary-600 underline hover:text-primary-800">this isn&apos;t optional — it&apos;s the law</a>. We&apos;ve got it covered.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-3">🇺🇸</div>
              <h3 className="font-bold mb-2">ASTM F963</h3>
              <p className="text-sm text-gray-600">The US toy safety standard. Tests for mechanical hazards (sharp edges, small parts), flammability, and toxic chemicals. Our frames pass all three sections.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-3">🇪🇺</div>
              <h3 className="font-bold mb-2">EN71</h3>
              <p className="text-sm text-gray-600">The European toy safety standard. Three parts covering mechanical safety, flammability, and migration of toxic elements. Required for selling in the EU.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="font-bold mb-2">CE & FDA</h3>
              <p className="text-sm text-gray-600">CE for Europe, FDA for the US optical market. Both verify that our UV protection claims are real — not just marketing stickers on cheap frames.</p>
            </div>
          </div>
        </section>

        {/* Materials */}
        <section className="bg-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What Are These Made Of? (Parents Always Ask)</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🍼 Food-Grade Silicone (Ages 0-3)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Same material as baby bottle nipples and teething rings. If it&apos;s safe to go
                in a baby&apos;s mouth — and it will go in their mouth, guaranteed — it&apos;s safe
                for sunglasses. Infinitely bendable, impossibly soft, BPA-free, phthalate-free,
                PVC-free, latex-free. Won&apos;t irritate sensitive baby skin. We designed these
                for the parent who worries about everything. (We get it. We&apos;re parents too.)
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🔄 TPE Flexible Frames (Ages 3-8)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                TPE (Thermoplastic Elastomer) is the material equivalent of &quot;try to break
                me, I dare you.&quot; Bend it. Twist it. Sit on it. Throw it out of a moving
                stroller. It bounces right back. We&apos;ve tested these to survive drops from
                1.5 meters (roughly table height) and 500+ bending cycles. Because toddlers
                and young kids will find ways to stress-test them that no engineer ever imagined.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">🏃 TR90 Nylon (Ages 8-12)</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                For the older kids who are playing sports, riding bikes, and generally being
                rough with everything they own. TR90 is 35% lighter than regular plastic,
                flexes without snapping, and handles temperatures from -40°C to 120°C (so
                yes, it survives being left in a hot car). Hypoallergenic too — no itchy red
                marks behind the ears after a long day outside.
              </p>
            </div>
          </div>
        </section>

        {/* Size Guide */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Size Guide by Age</h2>
          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left font-semibold">Age</th>
                  <th className="p-4 text-left font-semibold">Lens Width</th>
                  <th className="p-4 text-left font-semibold">Bridge</th>
                  <th className="p-4 text-left font-semibold">Temple</th>
                  <th className="p-4 text-left font-semibold">Material</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr><td className="p-4 font-semibold">Baby (0-2)</td><td className="p-4 text-gray-600">36-40mm</td><td className="p-4 text-gray-600">10-12mm</td><td className="p-4 text-gray-600">Strap</td><td className="p-4 text-gray-600">Food-grade silicone</td></tr>
                <tr><td className="p-4 font-semibold">Toddler (2-4)</td><td className="p-4 text-gray-600">40-44mm</td><td className="p-4 text-gray-600">12-14mm</td><td className="p-4 text-gray-600">105-115mm</td><td className="p-4 text-gray-600">Silicone / TPE</td></tr>
                <tr><td className="p-4 font-semibold">Kids (4-7)</td><td className="p-4 text-gray-600">44-48mm</td><td className="p-4 text-gray-600">14-16mm</td><td className="p-4 text-gray-600">115-125mm</td><td className="p-4 text-gray-600">TPE / TPEE</td></tr>
                <tr><td className="p-4 font-semibold">Junior (7-10)</td><td className="p-4 text-gray-600">48-52mm</td><td className="p-4 text-gray-600">15-17mm</td><td className="p-4 text-gray-600">125-135mm</td><td className="p-4 text-gray-600">TR90 / PC</td></tr>
                <tr><td className="p-4 font-semibold">Youth (10-12)</td><td className="p-4 text-gray-600">52-56mm</td><td className="p-4 text-gray-600">16-18mm</td><td className="p-4 text-gray-600">130-140mm</td><td className="p-4 text-gray-600">TR90 / Acetate</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Safety Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Built for Real Kids, Not Careful Kids</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <FeatureCard icon="🛡️" title="Zero Nasty Chemicals" description="BPA-free. Phthalate-free. PVC-free. Lead-free. We test for everything parents worry about." />
            <FeatureCard icon="🔄" title="Try to Break Them" description="Bend them. Twist them. Step on them. They bounce back. We dare your toddler to destroy them." />
            <FeatureCard icon="☀️" title="Real UV400" description="Lab-tested, not just label-claimed. We provide test reports. Your customers' kids are genuinely protected." />
            <FeatureCard icon="💪" title="Shatterproof Lenses" description="Polycarbonate lenses that won't shatter on impact. Because kids fall. A lot." />
          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Related Products</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/it/prodotti/sportivo" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🏃</div>
              <h3 className="font-semibold mb-2">Sport Sunglasses</h3>
              <p className="text-sm text-gray-600">Adult sport frames — parents and kids can match!</p>
            </Link>
            <Link href="/it/prodotti/polarizzato" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🔆</div>
              <h3 className="font-semibold mb-2">Polarized Options</h3>
              <p className="text-sm text-gray-600">Premium glare protection for beach and snow</p>
            </Link>
            <Link href="/it/prodotti/luce-blu" className="card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">💻</div>
              <h3 className="font-semibold mb-2">Kids Blue Light Glasses</h3>
              <p className="text-sm text-gray-600">Screen protection for tablets and online school</p>
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Parent Questions (We Get These Daily)</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <FaqItem
              question="How young is too young for sunglasses?"
              answer="The American Academy of Ophthalmology says 6 months. Before that, keep babies in shade with hats and stroller canopies. But once they're 6 months old and spending time outdoors, their eyes need UV protection. We know it sounds early — but remember, their little eyes are letting in 6-7x more UV than yours. The earlier you start, the better."
            />
            <FaqItem
              question="Are these actually protective or just cute?"
              answer="Both! But protection comes first. Every pair blocks 99.9% of UV radiation up to 400 nanometers — verified by independent lab testing. We'll send you the test reports if you want them. Beware of cheap kids sunglasses that are just dark-tinted plastic with no UV filter. Those actually make things worse by dilating pupils and letting in more harmful rays. Our glasses are cute AND safe."
            />
            <FaqItem
              question="My kid destroys everything. Will these survive?"
              answer="That's literally what we designed them for. The baby silicone frames? Infinitely bendable. The toddler TPE frames? We've tested them to survive 500+ bending cycles and drops from 1.5 meters. The TR90 frames for older kids? Bend them 90 degrees — they snap right back. We can't promise they're 100% indestructible (kids are creative), but they're the toughest frames we know how to make."
            />
            <FaqItem
              question="What certifications do these have? I need to know for my store."
              answer="Everything you need: CPSIA (mandatory for US children's products — lead under 100ppm, zero phthalates), ASTM F963 (US toy safety), EN71 (EU toy safety), CE marking, and FDA optical standards. We provide complete certification documents with every wholesale order. If customs asks questions, you'll have the paperwork ready."
            />
            <FaqItem
              question="Can I customize with our brand or cartoon characters?"
              answer="Totally. Custom colors (20+ standards plus Pantone matching), character designs on temples, your brand logo, glitter-infused frames, glow-in-the-dark temples — you name it. MOQ for custom designs is 300 pieces per style. We've done licensed character collaborations, school mascot designs, and even matching parent-child sets. Just send us your idea and we'll mock it up."
            />
            <FaqItem
              question="Do the baby sunglasses come with straps?"
              answer="Yep — detachable adjustable neoprene straps, adjustable from 14cm to 18cm. Soft on baby skin, secure enough to stay on a wiggly baby. For toddler frames (ages 3-5), we offer optional strap attachments that clip on and off. Most parents use the strap until around age 3-4, then switch to regular temples once the kid is old enough to keep them on."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4">Protect Little Eyes. Build Parent Trust.</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Children&apos;s boutiques, toy stores, pediatric offices, summer camps, beach resorts,
            school supply stores — our kids sunglasses sell everywhere parents shop. Full
            safety documentation included. Free samples available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/it/contatti" className="btn-primary">Get Kids Collection Catalog</Link>
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
          { "@type": "ListItem", "position": 3, "name": "Kids Sunglasses", "item": "https://eyeviewglasses.com/products/kids" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How young is too young for sunglasses?",
            "acceptedAnswer": { "@type": "Answer", "text": "The American Academy of Ophthalmology recommends UV-protective sunglasses starting from 6 months of age. Children's eyes transmit 6-7x more UV radiation than adult eyes." }
          },
          {
            "@type": "Question",
            "name": "Are kids sunglasses actually protective or just decorative?",
            "acceptedAnswer": { "@type": "Answer", "text": "Every pair blocks 99.9% of UV radiation up to 400nm, verified by independent lab testing. We provide test reports. Beware of cheap novelty sunglasses without real UV protection." }
          },
          {
            "@type": "Question",
            "name": "Will these sunglasses survive my kid?",
            "acceptedAnswer": { "@type": "Answer", "text": "Designed for it. Baby silicone frames are infinitely bendable. Toddler TPE frames survive 500+ bending cycles and 1.5m drops. TR90 frames for older kids bend 90° without breaking." }
          },
          {
            "@type": "Question",
            "name": "What safety certifications do these kids sunglasses have?",
            "acceptedAnswer": { "@type": "Answer", "text": "CPSIA (lead under 100ppm, zero phthalates), ASTM F963, EN71, CE marking, and FDA optical standards. Complete certification documents provided with every wholesale order." }
          },
          {
            "@type": "Question",
            "name": "Can I customize kids sunglasses with brand logos or characters?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes — custom colors, character designs, brand logos, glitter frames, glow-in-the-dark temples. MOQ for custom designs is 300 pieces per style." }
          },
          {
            "@type": "Question",
            "name": "Do baby sunglasses come with head straps?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes — detachable adjustable neoprene straps (14-18cm). Toddler frames have optional clip-on straps. Most parents use straps until age 3-4." }
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
