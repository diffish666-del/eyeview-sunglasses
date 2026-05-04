import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sunglasses Certifications & Compliance | FDA, CE, ISO 9001, UV400 - EyeView',
  description: 'EyeView sunglasses meet all international safety standards. FDA registered, CE certified, ISO 9001, UV400, ANSI Z80.3 compliant. Full documentation available.',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/certifications',
    languages: {
      'en': 'https://eyeviewsunglasses.com/certifications',
      'es': 'https://eyeviewsunglasses.com/es/certificaciones',
    },
  },
}

export default function CertificationsPage() {
  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* BreadcrumbList Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://eyeviewsunglasses.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Certifications",
              "item": "https://eyeviewsunglasses.com/certifications"
            }
          ]
        })}} />

        {/* FAQPage Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Do your sunglasses meet FDA requirements?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. All EyeView sunglasses comply with FDA 21 CFR 801.410, which regulates sunglasses as over-the-counter medical devices. Every pair undergoes UV transmission testing and impact resistance testing per FDA requirements. We provide full FDA compliance documentation with every shipment to the United States."
              }
            },
            {
              "@type": "Question",
              "name": "Can you provide CE certificates for EU import?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. We provide CE certificates compliant with EN ISO 12312-1:2013 for all sunglasses shipped to the European Union. Each shipment includes a Declaration of Conformity, test reports from accredited labs, and CE marking on the product. We've been shipping CE-certified sunglasses to EU markets since 2008."
              }
            },
            {
              "@type": "Question",
              "name": "What UV protection level do your lenses provide?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "All EyeView lenses provide UV400 protection, which blocks 99.9-100% of UVA and UVB radiation up to 400 nanometers. This is the highest UV protection rating available for sunglasses. Every lens batch is tested using a spectrophotometer to verify UV transmission levels before production continues."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer third-party testing reports?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We provide third-party testing reports from accredited laboratories including SGS, Intertek, and Bureau Veritas. Reports cover UV transmission, impact resistance, optical power, and material safety. These reports are included with every shipment at no additional cost."
              }
            },
            {
              "@type": "Question",
              "name": "Are your kids' sunglasses CPSIA compliant?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. All EyeView children's sunglasses comply with CPSIA (Consumer Product Safety Improvement Act) requirements, including lead content limits, phthalate restrictions, and third-party testing by CPSC-accepted laboratories. We provide Children's Product Certificates (CPC) for every kids' sunglasses order."
              }
            },
            {
              "@type": "Question",
              "name": "Can I use your certificates for my own brand's marketing?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. When we manufacture sunglasses under your brand (OEM/ODM), all certificates and test reports are issued for your brand name and product specifications. You can use these certificates in your marketing materials, retail packaging, and compliance documentation. We handle all the paperwork — you just need to tell us your brand details."
              }
            }
          ]
        })}} />

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Certifications &amp; Compliance
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I learned the hard way why compliance matters. A few years back, one of our clients had a 
            shipment of 8,000 pairs confiscated at Hamburg customs — not because the sunglasses were bad, 
            but because their previous supplier hadn&apos;t provided proper CE documentation. Eight thousand 
            pairs, sitting in a warehouse, unsellable. That client came to us, and we made sure it 
            never happened again. Every pair we ship leaves our{' '}
            <Link href="/about" className="text-primary-600 hover:underline">factory</Link> with 
            the right paperwork, the right testing, and the right certifications. No exceptions.
          </p>
        </div>

        {/* Certification Cards */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">International Certifications</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These aren&apos;t just logos on a website. Each certification represents real testing, real 
              audits, and real compliance work that we do for every single order.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CertificationCard
              icon="🇺🇸"
              name="FDA Registered"
              standard="21 CFR 801.410"
              description="The FDA classifies sunglasses as over-the-counter medical devices in the US. Our facility is FDA-registered, and every pair we ship stateside meets impact resistance and UV protection requirements under 21 CFR 801.410. We handle the compliance so your customs clearance is smooth."
              link="https://www.fda.gov/radiation-emitting-products/home-business-and-entertainment-products/sunglasses"
              linkText="View FDA Sunglasses Requirements →"
            />
            <CertificationCard
              icon="🇪🇺"
              name="CE Certified"
              standard="EN ISO 12312-1:2013"
              description="If you're selling in Europe, CE marking isn't optional — it's the law. Our sunglasses comply with EN ISO 12312-1:2013, covering UV protection, optical quality, mechanical strength, and labeling. Every EU shipment includes a Declaration of Conformity. No more Hamburg-style surprises."
              link="https://single-market-economy.ec.europa.eu/single-market/ce-marking_en"
              linkText="Learn About CE Marking →"
            />
            <CertificationCard
              icon="🏭"
              name="ISO 9001:2015"
              standard="Quality Management System"
              description="Our entire manufacturing process — from raw material inspection to final packaging — operates under an ISO 9001:2015 certified quality management system. This means documented procedures, regular internal audits, and continuous improvement. It's not exciting, but it's why our defect rate stays below 0.5%."
              link="https://www.iso.org/iso-9001-quality-management.html"
              linkText="About ISO 9001 →"
            />
            <CertificationCard
              icon="☀️"
              name="UV400 Protection"
              standard="100% UVA/UVB Blocking"
              description={<>
                UV400 means our lenses block all light rays with wavelengths up to 400 nanometers — that 
                covers 100% of UVA (315–400nm) and UVB (280–315nm) radiation. We test every lens batch 
                with a spectrophotometer before production continues. If a batch doesn&apos;t hit UV400, 
                it gets rejected. Period. Learn more about how we test in our{' '}
                <Link href="/blog/sunglasses-lens-guide" className="text-primary-600 hover:underline">lens guide</Link>.
              </>}
            />
            <CertificationCard
              icon="🔬"
              name="ANSI Z80.3"
              standard="US Optical Standard"
              description={<>
                ANSI Z80.3 is the American National Standard for non-prescription sunglasses. It covers 
                optical quality, UV transmittance, impact resistance, and flammability. While not legally 
                required like FDA registration, major US retailers expect it — and we deliver. Our{' '}
                <Link href="/products/polarized" className="text-primary-600 hover:underline">polarized lenses</Link> are 
                tested to ANSI Z80.3 specifications for optical clarity and polarization efficiency.
              </>}
              link="https://www.ansi.org/"
              linkText="Visit ANSI →"
            />
            <CertificationCard
              icon="👶"
              name="CPSIA Compliant"
              standard="Children's Product Safety"
              description={<>
                Our{' '}
                <Link href="/products/kids" className="text-primary-600 hover:underline">kids&apos; sunglasses</Link> meet 
                CPSIA requirements for children&apos;s products, including lead content limits (under 100 ppm), 
                phthalate restrictions, and mandatory third-party testing by CPSC-accepted labs. Every 
                children&apos;s order ships with a Children&apos;s Product Certificate (CPC). Because when 
                it comes to kids&apos; safety, there&apos;s zero room for shortcuts.
              </>}
              link="https://www.cpsc.gov/Business--Manufacturing/Business-Education/Business-Guidance/CPSIA"
              linkText="CPSIA Business Guidance →"
            />
          </div>
        </section>

        {/* Testing Process */}
        <section className="mb-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our 6-Point QC Inspection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every pair of sunglasses goes through our 6-point quality control process before it 
              leaves the factory. This is how we maintain a defect rate below 0.5% across millions 
              of pairs produced.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InspectionCard
              step={1}
              title="UV Transmission Testing"
              description="Every lens batch is tested with a spectrophotometer to verify UV400 protection levels. We measure transmittance across the full UV spectrum (280–400nm). Any batch that doesn't block 99.9%+ of UV radiation gets rejected — no rework, no exceptions."
            />
            <InspectionCard
              step={2}
              title="Impact Resistance Testing"
              description="Lenses are subjected to drop-ball impact testing per FDA 21 CFR 801.410 standards. A 16g steel ball is dropped from 127cm onto the lens. If it cracks, chips, or shatters, the entire batch fails. This test is non-negotiable for US-bound shipments."
            />
            <InspectionCard
              step={3}
              title="Hinge Cycle Testing"
              description="We open and close every hinge design 2,000+ times using automated testing equipment to simulate years of daily use. Spring hinges, barrel hinges, flex hinges — each type has its own cycle count requirement. Loose or sticky hinges mean a redesign, not a pass."
            />
            <InspectionCard
              step={4}
              title="Dimensional Verification"
              description="Frame dimensions are measured against the original spec sheet using digital calipers and optical comparators. Temple length, bridge width, lens height — every measurement must fall within ±0.5mm tolerance. This is how we ensure sizing consistency across production runs."
            />
            <InspectionCard
              step={5}
              title="Lens Clarity Check"
              description={<>
                Optical clarity is tested for distortion, waviness, and power deviation. We use a lensometer 
                to verify that non-prescription lenses have zero optical power (±0.06 diopters max). Nobody 
                wants sunglasses that give them a headache. See our{' '}
                <Link href="/blog/sunglasses-lens-guide" className="text-primary-600 hover:underline">lens technology guide</Link> for 
                more on how we ensure optical quality.
              </>}
            />
            <InspectionCard
              step={6}
              title="Cosmetic Inspection"
              description="The final check is visual. Every pair is inspected under standardized lighting for scratches, color inconsistencies, uneven coating, rough edges, and assembly defects. Our QC team uses a standardized 22-point cosmetic checklist. If it doesn't look right, it doesn't ship."
            />
          </div>
        </section>

        {/* Documentation Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">What Ships With Every Order</h2>
              <p className="text-gray-600 mb-6">
                Compliance documentation isn&apos;t an afterthought — it&apos;s part of our production process. 
                Every shipment leaves our{' '}
                <Link href="/about" className="text-primary-600 hover:underline">factory</Link> with 
                a complete documentation package. Your customs broker and retail partners will have 
                everything they need on day one.
              </p>
              <ul className="space-y-4">
                <DocumentItem
                  title="Third-Party Test Reports"
                  description="UV transmission, impact resistance, and material safety reports from accredited labs (SGS, Intertek, or Bureau Veritas). Issued per your product specs and brand name."
                />
                <DocumentItem
                  title="Certificates of Compliance"
                  description="CE certificates, FDA compliance letters, and ISO 9001 certification copies. All current and verifiable. Updated annually or when standards change."
                />
                <DocumentItem
                  title="Declaration of Conformity"
                  description="EU Declaration of Conformity per EN ISO 12312-1:2013, listing your brand as the manufacturer/importer of record. Ready for EU customs clearance."
                />
                <DocumentItem
                  title="Children's Product Certificate (CPC)"
                  description="For kids' sunglasses orders: CPSIA-compliant CPC with third-party testing lab details, applicable standards, and product identification. Required for all children's products sold in the US."
                />
                <DocumentItem
                  title="Material Safety Data Sheets"
                  description="MSDS for all materials used in production — frame materials, lens coatings, hinge components, packaging materials. Essential for import compliance in many markets."
                />
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 flex flex-col items-center justify-center aspect-square">
              <span className="text-8xl block mb-6">📋</span>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-primary-700 font-medium">Documentation Included</div>
                <div className="text-primary-600 text-sm mt-2">Every order. Every shipment.</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These are the compliance questions we hear most often from new clients. 
              If yours isn&apos;t here, just ask — we&apos;re happy to get specific.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <FAQItem
              question="Do your sunglasses meet FDA requirements?"
              answer="Yes. All EyeView sunglasses comply with FDA 21 CFR 801.410, which regulates sunglasses as over-the-counter medical devices. Every pair undergoes UV transmission testing and impact resistance testing per FDA requirements. We provide full FDA compliance documentation with every shipment to the United States."
            />
            <FAQItem
              question="Can you provide CE certificates for EU import?"
              answer="Absolutely. We provide CE certificates compliant with EN ISO 12312-1:2013 for all sunglasses shipped to the European Union. Each shipment includes a Declaration of Conformity, test reports from accredited labs, and CE marking on the product. We've been shipping CE-certified sunglasses to EU markets since 2008."
            />
            <FAQItem
              question="What UV protection level do your lenses provide?"
              answer="All EyeView lenses provide UV400 protection, which blocks 99.9–100% of UVA and UVB radiation up to 400 nanometers. This is the highest UV protection rating available for sunglasses. Every lens batch is tested using a spectrophotometer to verify UV transmission levels before production continues."
            />
            <FAQItem
              question="Do you offer third-party testing reports?"
              answer="Yes. We provide third-party testing reports from accredited laboratories including SGS, Intertek, and Bureau Veritas. Reports cover UV transmission, impact resistance, optical power, and material safety. These reports are included with every shipment at no additional cost."
            />
            <FAQItem
              question="Are your kids' sunglasses CPSIA compliant?"
              answer="Yes. All EyeView children's sunglasses comply with CPSIA requirements, including lead content limits (under 100 ppm), phthalate restrictions, and mandatory third-party testing by CPSC-accepted labs. Every children's order ships with a Children's Product Certificate (CPC)."
            />
            <FAQItem
              question="Can I use your certificates for my own brand's marketing?"
              answer="Yes. When we manufacture sunglasses under your brand (OEM/ODM), all certificates and test reports are issued for your brand name and product specifications. You can use these in your marketing materials, retail packaging, and compliance documentation. We handle all the paperwork — you just need to tell us your brand details."
            />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-900 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Compliance Documentation?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you need test reports for an existing order, certificates for a new market, 
            or just want to understand what documentation you&apos;ll need — reach out. We&apos;ll get you 
            the right paperwork, fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Request Documentation
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

function CertificationCard({ icon, name, standard, description, link, linkText }: {
  icon: string
  name: string
  standard: string
  description: string | React.ReactNode
  link?: string
  linkText?: string
}) {
  return (
    <div className="card p-6">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-sm text-primary-600 font-medium mb-3">{standard}</p>
      <div className="text-gray-600 text-sm mb-4">{description}</div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 text-sm font-medium hover:underline"
        >
          {linkText}
        </a>
      )}
    </div>
  )
}

function InspectionCard({ step, title, description }: {
  step: number
  title: string
  description: string | React.ReactNode
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-lg mb-4">
        {step}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <div className="text-gray-600 text-sm">{description}</div>
    </div>
  )
}

function DocumentItem({ title, description }: { title: string; description: string }) {
  return (
    <li className="flex gap-3">
      <span className="text-primary-600 mt-1 flex-shrink-0">✓</span>
      <div>
        <div className="font-semibold text-gray-900">{title}</div>
        <div className="text-gray-600 text-sm">{description}</div>
      </div>
    </li>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group bg-white rounded-xl shadow p-6 cursor-pointer">
      <summary className="font-bold text-gray-900 list-none flex items-center justify-between">
        <span>{question}</span>
        <span className="text-primary-600 text-xl group-open:rotate-45 transition-transform">+</span>
      </summary>
      <p className="text-gray-600 mt-4">{answer}</p>
    </details>
  )
}
