import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About EyeView | Sunglasses Manufacturer Since 2006 | OEM & ODM Factory',
  description: 'EyeView Sunglasses is a leading OEM/ODM sunglasses manufacturer founded in 2006. 500+ brand clients in 50+ countries. CE, FDA, ISO 9001 certified. Factory-direct pricing.',
  keywords: 'sunglasses manufacturer, eyewear factory, OEM sunglasses company, sunglasses supplier China, about EyeView, eyewear manufacturer',
}

export default function AboutPage() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Organization Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "EyeView Sunglasses",
          "url": "https://eyeviewsunglasses.com",
          "logo": "https://eyeviewsunglasses.com/logo.png",
          "foundingDate": "2006",
          "founder": { "@type": "Person", "name": "Jacky Chen" },
          "description": "Leading OEM/ODM sunglasses manufacturer with 500+ brand clients in 50+ countries. CE, FDA, ISO 9001 certified factory.",
          "address": { "@type": "PostalAddress", "addressCountry": "CN" },
          "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 100, "maxValue": 200 },
          "sameAs": [],
          "contactPoint": { "@type": "ContactPoint", "contactType": "sales", "availableLanguage": ["English", "Chinese"] }
        })}} />

        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About EyeView Sunglasses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a two-person workshop in 2006 to a modern factory serving 500+ brands worldwide. 
            Here&apos;s who we are and why we do what we do.
          </p>
        </div>

        {/* Origin Story */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  EyeView started in 2006 in a workshop that was, honestly, not much bigger than a 
                  two-car garage. It was me — Jacky Chen — and one technician, hand-polishing acetate frames 
                  and assembling hinges by hand. Our first &quot;production run&quot; was 200 pairs for a surf shop 
                  in Sydney. I hand-packed every box.
                </p>
                <p>
                  By 2010, we&apos;d outgrown the garage and moved into our first real factory space. We added 
                  injection molding, bought our first CNC machine, and hired a small quality control team. 
                  The surf shop in Sydney? They&apos;re still a client. Their orders are a bit bigger now.
                </p>
                <p>
                  Today, we operate a 5,000 m² facility with 5 production lines, 150+ employees, and the 
                  capacity to produce 10,000 pairs per day. We&apos;ve served over 500 brands in 50+ countries — 
                  from Kickstarter startups ordering 100 pairs to retail chains ordering 50,000. The workshop 
                  is long gone, but the mindset isn&apos;t: every pair still gets inspected like it&apos;s going to 
                  that surf shop in Sydney.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl aspect-square flex items-center justify-center">
              <div className="text-center">
                <span className="text-8xl block mb-4">🏭</span>
                <span className="text-primary-600 font-medium">Since 2006</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                Make quality sunglasses manufacturing accessible to brands of all sizes. Whether you&apos;re 
                a solo entrepreneur with a sketch on a napkin or a retail chain scaling to 100,000 units, 
                you deserve a manufacturing partner who treats your brand like their own. No minimum budget 
                required. No attitude. Just good product and honest communication.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be the factory that the next generation of great eyewear brands points to and says, 
                &quot;They helped us get started.&quot; We&apos;ve already helped launch hundreds of brands. 
                We want to help launch thousands more — and keep the ones we&apos;ve launched growing. 
                Your success is our best marketing.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-primary-600 text-white rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="text-2xl font-bold text-center mb-8">EyeView by the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">19+</div>
              <div className="text-primary-100">Years in Business</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Brand Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-primary-100">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1M+</div>
              <div className="text-primary-100">Pairs Produced / Year</div>
            </div>
          </div>
        </section>

        {/* Factory Capabilities */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Factory Capabilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our facility is built for flexibility — small runs and large orders, OEM and ODM, 
              simple designs and complex engineering.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <CapabilityCard
              icon="⚙️"
              title="5 Production Lines"
              description="Dedicated lines for acetate, metal, TR90/injection, and mixed-material frames. Each line optimized for its material type."
            />
            <CapabilityCard
              icon="📦"
              title="10,000 Pairs / Day"
              description="Daily production capacity across all lines. We can scale up to 15,000/day during peak season with overtime shifts."
            />
            <CapabilityCard
              icon="📐"
              title="5,000 m² Facility"
              description="Modern factory floor with separate zones for cutting, assembly, polishing, QC, and packaging. Clean, organized, and efficient."
            />
            <CapabilityCard
              icon="🔬"
              title="In-House QC Lab"
              description="UV transmission testing, impact testing, hinge cycle testing, and dimensional verification — all done on-site before anything ships."
            />
            <CapabilityCard
              icon="🎨"
              title="400+ ODM Designs"
              description="Ready-to-brand frame catalog spanning aviators, wayfarers, cat-eyes, sports wraps, round, oversized, and kids' styles."
            />
            <CapabilityCard
              icon="🛠️"
              title="Full OEM Capability"
              description="From your CAD file to finished product. Custom mold making, CNC prototyping, and small-batch sampling before mass production."
            />
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Certifications & Compliance</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every product we ship meets international safety and quality standards. 
              These aren&apos;t badges we collect — they&apos;re requirements we take seriously.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <CertCard
              name="CE"
              description="European Conformity"
              link="https://single-market-economy.ec.europa.eu/single-market/ce-marking_en"
            />
            <CertCard
              name="FDA"
              description="US Compliance"
              link="https://www.fda.gov/radiation-emitting-products/home-business-and-entertainment-products/sunglasses"
            />
            <CertCard
              name="UV400"
              description="100% UV Protection"
            />
            <CertCard
              name="ISO 9001"
              description="Quality Management"
              link="https://www.iso.org/iso-9001-quality-management.html"
            />
            <CertCard
              name="ANSI Z80.3"
              description="US Optical Standard"
            />
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The People Behind the Product</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We&apos;re 150+ people who care about making great sunglasses. Here are a few of the faces 
              you&apos;ll work with directly.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <TeamCard
              initials="JC"
              name="Jacky Chen"
              role="Founder & CEO"
              bio="Started EyeView in 2006 from a garage workshop. 20 years of eyewear manufacturing experience. Still inspects samples personally."
            />
            <TeamCard
              initials="LW"
              name="Lisa Wang"
              role="Head of Design"
              bio="Former designer at a major Italian eyewear house. Joined EyeView in 2014. Leads our 8-person design team and manages all OEM projects."
            />
            <TeamCard
              initials="DZ"
              name="David Zhang"
              role="Production Manager"
              bio="15 years on the factory floor. Oversees all 5 production lines and 80+ production workers. Known for his obsession with efficiency."
            />
            <TeamCard
              initials="SC"
              name="Sarah Chen"
              role="Quality Control Director"
              bio="Trained in optical testing at a Swiss lab. Runs our QC department with a 0.5% defect rate target. Nothing ships without her sign-off."
            />
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="We started with 200 ODM pairs as a test. Three years later, we're ordering 5,000 custom OEM pairs per quarter. EyeView grew with us — they never pushed us to order more than we were ready for."
              name="Rachel M."
              title="Founder, Coastal Shade Co."
              location="Melbourne, Australia"
            />
            <TestimonialCard
              quote="I'd been burned by two other factories before finding EyeView. The difference was immediate — Jacky's team actually listened to what I needed instead of just quoting me the cheapest option. Quality has been consistent across 12 orders now."
              name="Marcus T."
              title="CEO, Elevate Eyewear"
              location="Atlanta, USA"
            />
            <TestimonialCard
              quote="The sample process sold me. They sent five pairs in different materials so I could compare side by side. No other factory offered that. We've been working together for four years and I have zero complaints."
              name="Henrik S."
              title="Buyer, Nordic Optics"
              location="Stockholm, Sweden"
            />
            <TestimonialCard
              quote="As a startup with zero eyewear experience, I expected to be ignored by real factories. EyeView treated my 100-piece first order with the same seriousness as their big clients. That loyalty goes both ways — we're now one of their bigger accounts."
              name="Priya K."
              title="Founder, Dusk & Dawn Eyewear"
              location="Toronto, Canada"
            />
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Stand For</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard
              icon="🎯"
              title="Quality Without Excuses"
              description="Every pair gets inspected. Every lens gets UV-tested. Every hinge gets cycled. We don't ship product we wouldn't put our own name on."
            />
            <ValueCard
              icon="🤝"
              title="Partnerships, Not Transactions"
              description="80% of our revenue comes from repeat clients. We'd rather earn your fifth order through great service than squeeze your first order for maximum margin."
            />
            <ValueCard
              icon="💬"
              title="Straight Talk"
              description="If something will take 60 days, we say 60 days — not 30. If a material won't work for your design, we tell you before you waste money on a mold. No surprises."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to See What We Can Do for Your Brand?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re launching your first line or scaling an existing brand, we&apos;d love to talk. 
            No obligation, no hard sell — just an honest conversation about what&apos;s possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get in Touch
            </Link>
            <Link href="/products" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
              Browse Products
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}

function CapabilityCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="card p-6">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}

function ValueCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="card p-6 text-center">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function CertCard({ name, description, link }: { name: string; description: string; link?: string }) {
  const content = (
    <>
      <div className="text-2xl font-bold text-primary-600 mb-2">{name}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </>
  )

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener" className="bg-white rounded-xl p-6 text-center shadow hover:shadow-md transition-shadow block">
        {content}
      </a>
    )
  }

  return (
    <div className="bg-white rounded-xl p-6 text-center shadow">
      {content}
    </div>
  )
}

function TeamCard({ initials, name, role, bio }: { initials: string; name: string; role: string; bio: string }) {
  return (
    <div className="card p-6 text-center">
      <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
        {initials}
      </div>
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-primary-600 text-sm font-medium mb-3">{role}</p>
      <p className="text-gray-600 text-sm">{bio}</p>
    </div>
  )
}

function TestimonialCard({ quote, name, title, location }: { quote: string; name: string; title: string; location: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <div className="text-primary-600 text-3xl mb-3">&ldquo;</div>
      <p className="text-gray-700 mb-4 italic">{quote}</p>
      <div>
        <div className="font-bold text-gray-900">{name}</div>
        <div className="text-sm text-gray-500">{title}</div>
        <div className="text-sm text-gray-400">{location}</div>
      </div>
    </div>
  )
}
