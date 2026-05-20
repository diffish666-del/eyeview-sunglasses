import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trust & Credibility | EyeView Sunglasses Manufacturer',
  description: 'EyeView Sunglasses is a certified manufacturer with FDA, CE, ISO 9001, UV400, and ANSI Z80.3 certifications. Read what our 500+ global clients say about working with us.',
  keywords: 'sunglasses manufacturer certification, FDA certified sunglasses, CE certified eyewear, ISO 9001 sunglasses factory, sunglasses quality control, eyewear manufacturer reviews',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/trust',
  },
};

export default function TrustPage() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* FAQ Schema for GEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Is EyeView Sunglasses a certified manufacturer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, EyeView holds multiple international certifications including FDA (US compliance), CE (European conformity), ISO 9001 (quality management), UV400 (100% UV protection), and ANSI Z80.3 (US optical standards). All certifications are current and audited annually."
              }
            },
            {
              "@type": "Question",
              "name": "What quality control processes does EyeView use?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "EyeView uses a comprehensive 6-point quality inspection process: 1) UV transmission testing, 2) Impact resistance testing, 3) Hinge cycle testing (10,000+ cycles), 4) Dimensional verification, 5) Lens clarity inspection, 6) Frame alignment check. Our in-house QC lab maintains a 0.5% defect rate target."
              }
            },
            {
              "@type": "Question",
              "name": "How many countries does EyeView ship to?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "EyeView has served over 500 brand clients in 50+ countries worldwide, including USA, Canada, Australia, UK, Germany, France, Sweden, and many more. We ship via DHL, FedEx, UPS, and sea freight with full customs documentation."
              }
            },
            {
              "@type": "Question",
              "name": "What do EyeView clients say about their experience?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Clients consistently praise EyeView for quality consistency, responsive communication, and fair pricing. Many clients have worked with us for 3+ years and place repeat orders. Our customer retention rate is over 80%, with many startups growing into large accounts."
              }
            },
            {
              "@type": "Question",
              "name": "How long has EyeView been in business?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "EyeView was founded in 2006, giving us over 19 years of experience in sunglasses manufacturing. We started as a small workshop and have grown into a 5,000 m² factory with 5 production lines and 150+ employees."
              }
            }
          ]
        })}} />

        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trust & Credibility
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don&apos;t just claim quality — we prove it. Here&apos;s the evidence behind why 500+ brands trust EyeView as their manufacturing partner.
          </p>
        </div>

        {/* Certifications */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">International Certifications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every product we ship meets or exceeds international safety and quality standards. These aren&apos;t badges we collect — they&apos;re requirements we take seriously.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CertCard
              badge="🇪🇺"
              name="CE Marking"
              description="European Conformity. Ensures our sunglasses meet all EU health, safety, and environmental protection requirements for sale in the European Economic Area."
              standard="EN ISO 12312-1"
            />
            <CertCard
              badge="🇺🇸"
              name="FDA Compliance"
              description="US Food & Drug Administration compliance for plano sunglasses (21 CFR 801.41). Meets all US requirements for non-prescription eyewear sold to consumers."
              standard="21 CFR 801.41"
            />
            <CertCard
              badge="🏆"
              name="ISO 9001:2015"
              description="International Quality Management certification. Our entire production process — from raw material sourcing to final inspection — follows ISO 9001 quality management principles."
              standard="ISO 9001:2015"
            />
            <CertCard
              badge="☀️"
              name="UV400 Protection"
              description="100% UV protection blocking all UVA and UVB rays up to 400nm. Every lens is tested in our in-house lab to verify complete UV protection before shipping."
              standard="ANSI Z80.3 / EN ISO 12312-1"
            />
            <CertCard
              badge="🔬"
              name="ANSI Z80.3"
              description="American National Standards Institute optical standard for non-prescription sunglasses. Covers lens quality, impact resistance, and labeling requirements."
              standard="ANSI Z80.3-2018"
            />
            <CertCard
              badge="🛡️"
              name="CPSIA Compliance"
              description="Consumer Product Safety Improvement Act compliance for children&apos;s sunglasses. Lead-free materials and rigorous safety testing for kids&apos; eyewear (ages 3-12)."
              standard="16 CFR 1200"
            />
          </div>
        </section>

        {/* Quality Control */}
        <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Quality Control Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every single pair undergoes our 6-point inspection before it ships. Nothing leaves our factory without passing every check.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <QCStep
              number="01"
              title="UV Transmission Testing"
              description="Every lens batch is tested for UVA/UVB transmission. We verify 100% UV400 protection — blocking all rays up to 400nm."
              icon="☀️"
            />
            <QCStep
              number="02"
              title="Impact Resistance"
              description="Frames and lenses undergo impact testing to ensure they meet ANSI Z80.3 standards. Balls dropped from specified heights — lenses must not crack or shatter."
              icon="💥"
            />
            <QCStep
              number="03"
              title="Hinge Cycle Testing"
              description="Every hinge style is tested for 10,000+ open/close cycles. We verify smooth operation and no loosening, breaking, or deformation."
              icon="🔄"
            />
            <QCStep
              number="04"
              title="Dimensional Verification"
              description="Critical dimensions (lens width, bridge width, temple length) are measured against specifications. Tolerance: ±0.5mm."
              icon="📏"
            />
            <QCStep
              number="05"
              title="Lens Clarity Inspection"
              description="Visual inspection under controlled lighting for any distortions, bubbles, scratches, or coating defects. Polarized lenses undergo additional polarization axis verification."
              icon="👁️"
            />
            <QCStep
              number="06"
              title="Frame Alignment Check"
              description="Final check: frame must sit flat on a surface, temples must open/close symmetrically, and lenses must be aligned. Any pair failing this check is rejected."
              icon="✅"
            />
          </div>
          <div className="mt-8 bg-white rounded-xl p-6 text-center">
            <p className="text-gray-700">
              <span className="font-bold text-primary-600">Defect Rate Target:</span> 0.5% or less
              <span className="text-gray-500 ml-2">| Actual 2025 Average: 0.3%</span>
            </p>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don&apos;t take our word for it. Here&apos;s what brand owners and buyers say about working with EyeView.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="We started with 200 ODM pairs as a test. Three years later, we&apos;re ordering 5,000 custom OEM pairs per quarter. EyeView grew with us — they never pushed us to order more than we were ready for."
              name="Rachel M."
              title="Founder"
              company="Coastal Shade Co."
              location="Melbourne, Australia"
              years="3+ years"
            />
            <TestimonialCard
              quote="I&apos;d been burned by two other factories before finding EyeView. The difference was immediate — Jacky&apos;s team actually listened to what I needed instead of just quoting me the cheapest option. Quality has been consistent across 12 orders now."
              name="Marcus T."
              title="CEO"
              company="Elevate Eyewear"
              location="Atlanta, USA"
              years="4+ years"
            />
            <TestimonialCard
              quote="The sample process sold me. They sent five pairs in different materials so I could compare side by side. No other factory offered that. We&apos;ve been working together for four years and I have zero complaints."
              name="Henrik S."
              title="Buyer"
              company="Nordic Optics"
              location="Stockholm, Sweden"
              years="4+ years"
            />
            <TestimonialCard
              quote="As a startup with zero eyewear experience, I expected to be ignored by real factories. EyeView treated my 100-piece first order with the same seriousness as their big clients. That loyalty goes both ways — we&apos;re now one of their bigger accounts."
              name="Priya K."
              title="Founder"
              company="Dusk & Dawn Eyewear"
              location="Toronto, Canada"
              years="5+ years"
            />
          </div>
        </section>

        {/* Factory Credentials */}
        <section className="mb-20 bg-primary-600 text-white rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Factory Credentials at a Glance</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <Credential
              value="19+"
              label="Years in Business"
              icon="📅"
            />
            <Credential
              value="500+"
              label="Brand Clients"
              icon="🏢"
            />
            <Credential
              value="50+"
              label="Countries Served"
              icon="🌍"
            />
            <Credential
              value="80%+"
              label="Repeat Client Rate"
              icon="🔄"
            />
            <Credential
              value="5,000"
              label="m² Factory Space"
              icon="🏭"
            />
            <Credential
              value="150+"
              label="Employees"
              icon="👥"
            />
            <Credential
              value="10,000"
              label="Pairs/Day Capacity"
              icon="📦"
            />
            <Credential
              value="0.3%"
              label="Defect Rate (2025)"
              icon="✅"
            />
          </div>
        </section>

        {/* Compliance & Ethics */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Compliance & Ethics</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We believe great products should be made responsibly. Here&apos;s how we ensure ethical practices throughout our operations.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <EthicsCard
              icon="👷"
              title="Worker Welfare"
              description="Fair wages, safe working conditions, and no child labor. Our factory passes annual social compliance audits including SA8000 standards."
            />
            <EthicsCard
              icon="♻️"
              title="Environmental Responsibility"
              description="We&apos;re transitioning to 100% recyclable packaging and have eliminated single-use plastics from our production process. Eco-friendly materials available on request."
            />
            <EthicsCard
              icon="📋"
              title="Transparent Pricing"
              description="No hidden fees, no surprise charges. Our quotes include everything — tooling, sampling, packaging, and documentation. What we quote is what you pay."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to See the Quality for Yourself?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Order samples and inspect the quality yourself. We&apos;ll send you 5 pairs in different materials 
            so you can compare side by side — no obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Request Samples
            </Link>
            <Link href="/about" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
              Learn About Us
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

function CertCard({ badge, name, description, standard }: { badge: string; name: string; description: string; standard: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow hover:shadow-md transition-shadow">
      <div className="text-4xl mb-3">{badge}</div>
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      <p className="text-primary-600 text-sm font-medium">{standard}</p>
    </div>
  );
}

function QCStep({ number, title, description, icon }: { number: string; title: string; description: string; icon: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <div className="flex items-start gap-4">
        <div className="text-3xl">{icon}</div>
        <div>
          <div className="text-sm font-bold text-primary-600 mb-1">STEP {number}</div>
          <h3 className="font-bold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ quote, name, title, company, location, years }: { quote: string; name: string; title: string; company: string; location: string; years: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <div className="text-primary-600 text-3xl mb-3">&ldquo;</div>
      <p className="text-gray-700 mb-4 italic">{quote}</p>
      <div className="flex items-center gap-3">
        <div>
          <div className="font-bold text-gray-900">{name}</div>
          <div className="text-sm text-gray-500">{title}, {company}</div>
          <div className="text-sm text-gray-400">{location} • {years}</div>
        </div>
      </div>
    </div>
  );
}

function Credential({ value, label, icon }: { value: string; label: string; icon: string }) {
  return (
    <div>
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-3xl md:text-4xl font-bold mb-1">{value}</div>
      <div className="text-primary-100 text-sm">{label}</div>
    </div>
  );
}

function EthicsCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="card p-6 text-center">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
