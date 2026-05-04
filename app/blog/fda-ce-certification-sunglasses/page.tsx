import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FDA & CE Certification for Sunglasses: Complete Compliance Guide',
  description: 'A factory owner explains FDA registration, CE marking, UV testing, and ANSI standards for sunglasses. Step-by-step compliance guide for selling eyewear in the US, EU, and globally.',
  keywords: 'sunglasses FDA certification, CE marking sunglasses, eyewear compliance, sunglasses UV testing, ANSI Z80.3, EN ISO 12312-1, sunglasses regulations',
  alternates: {
    canonical: '/blog/fda-ce-certification-sunglasses',
    languages: {
      'en': '/blog/fda-ce-certification-sunglasses',
      'es': '/es/blog/fda-ce-certification-sunglasses',
    },
  },
}

export default function FdaCeCertificationPage() {
  return (
    <article className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "FDA & CE Certification for Sunglasses: Complete Compliance Guide",
          "datePublished": "2026-05-04",
          "dateModified": "2026-05-04",
          "author": { "@type": "Person", "name": "Jacky Chen", "jobTitle": "Founder", "worksFor": { "@type": "Organization", "name": "EyeView Sunglasses" } },
          "publisher": { "@type": "Organization", "name": "EyeView Sunglasses" },
          "description": "A factory owner explains FDA registration, CE marking, UV testing, and compliance requirements for selling sunglasses globally.",
          "mainEntityOfPage": { "@type": "WebPage", "@id": "https://eyeviewsunglasses.com/blog/fda-ce-certification-sunglasses" }
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Do sunglasses need FDA approval to sell in the US?",
              "acceptedAnswer": { "@type": "Answer", "text": "Sunglasses don't need FDA 'approval' but they do need FDA compliance. The FDA classifies sunglasses as medical devices (Class I) under 21 CFR 886.5850. Manufacturers and importers must register their establishment with the FDA and list their products. The lenses must also meet impact resistance requirements under 21 CFR 801.410. There's no pre-market approval process — it's registration and compliance with performance standards." }
            },
            {
              "@type": "Question",
              "name": "What is CE marking for sunglasses?",
              "acceptedAnswer": { "@type": "Answer", "text": "CE marking indicates that sunglasses comply with EU safety, health, and environmental requirements. For sunglasses, the key standard is EN ISO 12312-1, which covers UV protection, optical quality, and mechanical strength. CE marking is mandatory for selling sunglasses in the EU, EEA, and UK. The manufacturer must create a Declaration of Conformity and apply the CE mark to the product or packaging." }
            },
            {
              "@type": "Question",
              "name": "How much does sunglasses compliance testing cost?",
              "acceptedAnswer": { "@type": "Answer", "text": "Basic UV400 testing costs $100-$300 per style. Full compliance testing (UV, impact resistance, optical quality, lens category verification) runs $300-$800 per style. FDA establishment registration is free. CE marking documentation costs $200-$500 if you hire a consultant. Most reputable factories include basic testing in their production costs and provide certificates at no extra charge." }
            },
            {
              "@type": "Question",
              "name": "What UV protection do sunglasses need?",
              "acceptedAnswer": { "@type": "Answer", "text": "For legal sale in most markets, sunglasses must block 99-100% of UVA and UVB radiation up to 400nm (UV400). In the US, the FDA requires 'adequate' UV protection. The EU standard EN ISO 12312-1 specifies maximum UV transmittance based on lens category (0-4). Australia's AS/NZS 1067 is the strictest, requiring UV400 blocking for all categories. Bottom line: UV400 certification is the global baseline — don't sell sunglasses without it." }
            },
            {
              "@type": "Question",
              "name": "Can my sunglasses get seized at customs for non-compliance?",
              "acceptedAnswer": { "@type": "Answer", "text": "Yes. US Customs and Border Protection (CBP) can detain sunglasses that lack proper FDA registration or don't meet impact resistance standards. EU customs regularly seizes shipments without CE marking. Australia is particularly strict — non-compliant sunglasses are routinely seized and destroyed. I've personally seen clients lose entire shipments worth $10,000-$50,000 due to missing documentation. Compliance isn't optional." }
            }
          ]
        })}} />

        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">Compliance</span>
            <span>May 4, 2026</span>
            <span>•</span>
            <span>15 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            FDA &amp; CE Certification for Sunglasses: Complete Compliance Guide
          </h1>
          <p className="text-xl text-gray-600">
            Nobody starts a sunglasses brand because they&apos;re excited about regulatory compliance. 
            But skip this step and your sunglasses could get seized at customs — or worse. Here&apos;s 
            everything you need to know, simplified.
          </p>
          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div>
              <div className="font-medium text-gray-900">Jacky Chen</div>
              <div className="text-sm text-gray-500">Founder, EyeView Sunglasses</div>
            </div>
          </div>
        </header>

        <nav className="bg-gray-100 rounded-xl p-6 mb-12">
          <h2 className="font-bold mb-4">Table of Contents</h2>
          <ul className="space-y-2">
            <li><a href="#why-compliance" className="text-primary-600 hover:underline">Why Compliance Matters (Real Horror Stories)</a></li>
            <li><a href="#fda-us" className="text-primary-600 hover:underline">FDA Requirements: Selling Sunglasses in the US</a></li>
            <li><a href="#ce-eu" className="text-primary-600 hover:underline">CE Marking: Selling Sunglasses in the EU</a></li>
            <li><a href="#uv-testing" className="text-primary-600 hover:underline">UV Protection Standards</a></li>
            <li><a href="#ansi" className="text-primary-600 hover:underline">ANSI Z80.3: The US Optical Standard</a></li>
            <li><a href="#other-markets" className="text-primary-600 hover:underline">Other Markets: Australia, UK, Japan</a></li>
            <li><a href="#testing-cost" className="text-primary-600 hover:underline">Testing Costs &amp; Where to Get Tested</a></li>
            <li><a href="#factory-role" className="text-primary-600 hover:underline">What Your Factory Should Provide</a></li>
            <li><a href="#checklist" className="text-primary-600 hover:underline">Your Compliance Checklist</a></li>
            <li><a href="#faq" className="text-primary-600 hover:underline">FAQ</a></li>
          </ul>
        </nav>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            I&apos;ve been exporting sunglasses for 20 years. In that time, I&apos;ve watched three clients 
            lose entire shipments to customs seizures — totaling over $120,000 in destroyed product. Every 
            single case was preventable. The testing would have cost less than $500.
          </p>

          <h2 id="why-compliance" className="text-3xl font-bold mt-16 mb-6">Why Compliance Matters (Real Horror Stories)</h2>
          <p>
            Let me tell you about Carlos. He was a first-time brand owner from Miami who ordered 3,000 
            pairs of sunglasses in 2023. Beautiful frames, great quality, $18,000 investment. He shipped 
            them by sea to Port Miami. US Customs flagged the shipment because it lacked FDA establishment 
            registration documentation. The goods were held for 45 days while Carlos scrambled to register 
            and get paperwork in order. By the time he got his sunglasses, he&apos;d missed his entire 
            summer launch window. The sunglasses were fine — the paperwork wasn&apos;t.
          </p>
          <p>
            Then there&apos;s Lisa, who sold sunglasses on Amazon UK. A competitor reported her listing for 
            missing CE marking. Amazon removed the listing, froze her inventory (600 pairs worth £9,000), 
            and it took 3 months to get it reinstated after she provided proper CE documentation. Three 
            months of zero sales and frozen capital.
          </p>
          <p>
            Compliance isn&apos;t glamorous. But it&apos;s the difference between a smooth launch and a 
            very expensive disaster.
          </p>

          <h2 id="fda-us" className="text-3xl font-bold mt-16 mb-6">FDA Requirements: Selling Sunglasses in the US</h2>
          <p>
            Here&apos;s something that surprises most people: <strong>the FDA classifies sunglasses as 
            medical devices</strong>. Specifically, Class I medical devices under 21 CFR 886.5850. Don&apos;t 
            panic — Class I is the lowest risk category, and the requirements are straightforward.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">What You Need to Do</h3>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-2">Step 1: FDA Establishment Registration</h3>
            <p className="text-blue-800">
              Every manufacturer and importer of sunglasses sold in the US must register with the FDA. 
              This is done online through the{' '}
              <a href="https://www.fda.gov/medical-devices/how-study-and-market-your-device/device-registration-and-listing" target="_blank" rel="noopener" className="underline">FDA FURLS system</a>. 
              Registration is free but must be renewed annually (October 1 – December 31 each year). 
              If your factory in China is the manufacturer, <em>they</em> need to register. If you import 
              and sell under your own brand, <em>you</em> also need to register as a specification developer.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-2">Step 2: Product Listing</h3>
            <p className="text-blue-800">
              After registration, you must list your sunglasses products in the FDA database. This includes 
              product code (HQF for non-prescription sunglasses), brand name, and model numbers. Also free, 
              also done through FURLS.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-2">Step 3: Impact Resistance Compliance</h3>
            <p className="text-blue-800">
              Under 21 CFR 801.410, all non-prescription sunglass lenses must pass the FDA&apos;s impact 
              resistance test: a 5/8-inch steel ball dropped from 50 inches must not fracture the lens. 
              This is the &quot;drop ball test.&quot; Your factory should perform this test on a statistical 
              sample of every production batch and keep records. Polycarbonate and CR-39 lenses generally 
              pass easily. Glass lenses require chemical or heat tempering.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-blue-900 mb-2">Step 4: Labeling Requirements</h3>
            <p className="text-blue-800">
              Sunglasses sold in the US must include: UV protection level on packaging or hang tag, 
              impact resistance claim (if made), the manufacturer or distributor&apos;s name and address, 
              and any relevant warnings. If you claim &quot;UV400&quot; or &quot;100% UV protection,&quot; 
              you must be able to substantiate it with test data.
            </p>
          </div>

          <h2 id="ce-eu" className="text-3xl font-bold mt-16 mb-6">CE Marking: Selling Sunglasses in the EU</h2>
          <p>
            CE marking is <strong>mandatory</strong> for selling sunglasses in the European Union, the 
            European Economic Area (EEA), and the UK (which now uses the UKCA mark, but still accepts 
            CE for most products through 2027).
          </p>
          <p>
            The key standard is <strong>EN ISO 12312-1:2022</strong> (Personal eye protection — Sunglasses 
            and related eyewear). This standard covers:
          </p>
          <ul>
            <li><strong>UV transmittance:</strong> Maximum allowed UV radiation passing through the lens, based on filter category</li>
            <li><strong>Optical quality:</strong> Spherical, astigmatic, and prismatic power tolerances</li>
            <li><strong>Mechanical strength:</strong> Minimum robustness requirements</li>
            <li><strong>Filter categories (0-4):</strong> How much visible light the lens transmits</li>
            <li><strong>Nickel release:</strong> For metal frames in contact with skin</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">CE Marking Filter Categories</h3>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left">Category</th>
                  <th className="px-6 py-4 text-left">Light Transmittance</th>
                  <th className="px-6 py-4 text-left">Use Case</th>
                  <th className="px-6 py-4 text-left">Driving?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4">Cat 0</td><td className="px-6 py-4">80-100%</td><td className="px-6 py-4">Fashion/indoor</td><td className="px-6 py-4">Yes</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Cat 1</td><td className="px-6 py-4">43-80%</td><td className="px-6 py-4">Low sunlight</td><td className="px-6 py-4">Yes</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">Cat 2</td><td className="px-6 py-4">18-43%</td><td className="px-6 py-4">Medium sunlight</td><td className="px-6 py-4">Yes</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Cat 3</td><td className="px-6 py-4">8-18%</td><td className="px-6 py-4">Strong sunlight</td><td className="px-6 py-4">Yes</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">Cat 4</td><td className="px-6 py-4">3-8%</td><td className="px-6 py-4">Extreme (glaciers, etc.)</td><td className="px-6 py-4 text-red-600 font-bold">NO</td></tr>
              </tbody>
            </table>
          </div>

          <p>
            Most fashion sunglasses fall into <strong>Category 3</strong> (8-18% transmittance). This is 
            the sweet spot for everyday sun protection. Category 4 is very dark and explicitly banned for 
            driving — you must include a warning if you sell Cat 4 lenses.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">What You Need for CE Compliance</h3>
          <ol>
            <li><strong>Testing to EN ISO 12312-1</strong> by an accredited laboratory</li>
            <li><strong>Technical file</strong> documenting design, materials, test results, and risk assessment</li>
            <li><strong>Declaration of Conformity (DoC)</strong> — a formal document declaring your product meets EU requirements. You (the brand/importer) sign this.</li>
            <li><strong>CE mark</strong> on the product or its packaging</li>
            <li><strong>Mandatory labeling:</strong> Filter category number, CE mark, manufacturer/importer name, &quot;not suitable for driving&quot; warning if Cat 4</li>
          </ol>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-amber-900 mb-2">💡 Important: Self-Certification</h3>
            <p className="text-amber-800">
              CE marking for sunglasses is <strong>self-certified</strong> — you don&apos;t need a notified 
              body to approve your product. You (or your factory) conduct the testing, compile the technical 
              file, and sign the Declaration of Conformity. This makes it affordable, but it also means 
              you&apos;re legally responsible for the accuracy of your claims. Don&apos;t fake it.
            </p>
          </div>

          <h2 id="uv-testing" className="text-3xl font-bold mt-16 mb-6">UV Protection Standards</h2>
          <p>
            UV protection is the single most important compliance requirement for sunglasses. Lenses that 
            don&apos;t adequately block UV radiation can actually be <em>more dangerous</em> than wearing 
            no sunglasses at all — the dark tint causes your pupils to dilate, letting in more UV if the 
            lens isn&apos;t properly blocking it.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">UV400: The Global Baseline</h3>
          <p>
            <strong>UV400 means the lens blocks 99-100% of UV radiation up to 400 nanometers</strong>, 
            covering both UVA (315-400nm) and UVB (280-315nm). This is the minimum standard you should 
            meet for any sunglasses you sell, anywhere in the world.
          </p>
          <p>
            Every reputable lens manufacturer produces UV400-compliant lenses by default. The UV-blocking 
            properties come from either the lens material itself (polycarbonate naturally blocks UV400) 
            or UV-absorbing coatings applied during manufacturing. Learn more about lens materials in our{' '}
            <Link href="/blog/uv400-vs-polarized" className="text-primary-600 hover:underline">UV400 vs polarized guide</Link>.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">How UV Testing Works</h3>
          <p>
            UV testing is done with a spectrophotometer that measures light transmittance at every 
            wavelength from 280nm to 780nm. The test generates a transmittance curve showing exactly 
            how much UV, visible, and infrared light passes through the lens. A UV400-compliant lens 
            should show less than 1% transmittance below 400nm.
          </p>
          <p>
            The test takes about 5 minutes per lens and costs $50-$100 per sample at most testing labs. 
            Your factory should have a spectrophotometer in-house and test every production batch. We 
            do — and we provide the test reports with every shipment.
          </p>

          <h2 id="ansi" className="text-3xl font-bold mt-16 mb-6">ANSI Z80.3: The US Optical Standard</h2>
          <p>
            While the FDA covers impact resistance and general safety, <strong>ANSI Z80.3</strong> 
            (American National Standards Institute) covers the optical quality of non-prescription 
            sunglasses. It&apos;s technically voluntary in the US, but it&apos;s the recognized 
            benchmark and most retailers require it.
          </p>
          <p>ANSI Z80.3 covers:</p>
          <ul>
            <li><strong>Optical power:</strong> Lenses shouldn&apos;t have significant prescription power (±0.12 diopters max)</li>
            <li><strong>Prismatic power:</strong> Lenses shouldn&apos;t cause image displacement</li>
            <li><strong>Cosmetic defects:</strong> Bubbles, scratches, inclusions in the lens</li>
            <li><strong>UV transmittance:</strong> Must meet specific UV blocking requirements</li>
            <li><strong>Impact resistance:</strong> Aligns with FDA requirements</li>
          </ul>

          <h2 id="other-markets" className="text-3xl font-bold mt-16 mb-6">Other Markets: Australia, UK, Japan</h2>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Australia &amp; New Zealand (AS/NZS 1067)</h3>
          <p>
            Australia has the <strong>strictest sunglasses regulations in the world</strong>. AS/NZS 1067 
            is mandatory, not voluntary. Sunglasses must be tested, categorized (0-4), and labeled with 
            their lens category, UV protection level, and compliance statement. Non-compliant sunglasses 
            are regularly seized at customs and destroyed. If you&apos;re selling to Australia, do not 
            cut corners on compliance.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">United Kingdom (UKCA)</h3>
          <p>
            Post-Brexit, the UK technically requires the UKCA mark instead of CE. However, the UK 
            government has extended CE acceptance through at least 2027 for most products including 
            sunglasses. If you already have CE marking, you&apos;re covered for the UK market for now. 
            Watch for updates as the transition deadline approaches.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">Japan (JIS T 7333)</h3>
          <p>
            Japan follows JIS T 7333, which is similar to ISO 12312-1 but with some Japan-specific 
            requirements. The Japanese market is quality-obsessed, and retailers often require third-party 
            test reports even beyond what&apos;s legally mandated.
          </p>

          <h2 id="testing-cost" className="text-3xl font-bold mt-16 mb-6">Testing Costs &amp; Where to Get Tested</h2>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-6 py-4 text-left">Test Type</th>
                  <th className="px-6 py-4 text-left">Cost per Style</th>
                  <th className="px-6 py-4 text-left">Turnaround</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white"><td className="px-6 py-4">UV400 transmittance only</td><td className="px-6 py-4">$100–$300</td><td className="px-6 py-4">3-5 days</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Full EN ISO 12312-1 (CE)</td><td className="px-6 py-4">$300–$600</td><td className="px-6 py-4">5-10 days</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">ANSI Z80.3 full suite</td><td className="px-6 py-4">$300–$500</td><td className="px-6 py-4">5-10 days</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">AS/NZS 1067 (Australia)</td><td className="px-6 py-4">$400–$800</td><td className="px-6 py-4">7-14 days</td></tr>
                <tr className="bg-white"><td className="px-6 py-4">FDA drop ball test</td><td className="px-6 py-4">$50–$150</td><td className="px-6 py-4">1-3 days</td></tr>
                <tr className="bg-gray-50"><td className="px-6 py-4">Nickel release (metal frames)</td><td className="px-6 py-4">$100–$200</td><td className="px-6 py-4">5-7 days</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4">Recommended Testing Labs</h3>
          <ul>
            <li><strong>SGS</strong> — Global leader. Labs in China, US, EU. Widely recognized.</li>
            <li><strong>Bureau Veritas</strong> — Another top-tier option with global coverage.</li>
            <li><strong>Intertek</strong> — Strong in both optical and material testing.</li>
            <li><strong>TÜV Rheinland</strong> — Especially trusted in the EU market.</li>
            <li><strong>Local university labs</strong> — Often 30-50% cheaper for basic UV testing. Check if they&apos;re accredited.</li>
          </ul>

          <h2 id="factory-role" className="text-3xl font-bold mt-16 mb-6">What Your Factory Should Provide</h2>
          <p>
            A good factory — one that&apos;s serious about quality and compliance — should provide most 
            of what you need without you having to ask. Here&apos;s what we provide at EyeView, and 
            what you should expect from any reputable manufacturer:
          </p>
          <ul>
            <li><strong>UV400 test certificate</strong> for every production batch (not just once — every batch)</li>
            <li><strong>CE Declaration of Conformity template</strong> that you can customize with your brand name</li>
            <li><strong>FDA drop ball test records</strong> on file and available on request</li>
            <li><strong>Material safety data sheets (MSDS)</strong> for frame materials</li>
            <li><strong>Nickel-free certification</strong> for metal components</li>
            <li><strong>ISO 9001 quality management certification</strong></li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg my-8">
            <h3 className="font-bold text-red-900 mb-2">🚩 Red Flags</h3>
            <p className="text-red-800">
              If a factory can&apos;t provide UV test certificates within 24 hours of asking, walk away. 
              If they say &quot;all our lenses are UV400&quot; but can&apos;t show you the test data, 
              walk away. If they&apos;ve never heard of EN ISO 12312-1 or ANSI Z80.3, <em>definitely</em> 
              walk away. Compliance documentation is the bare minimum of a professional operation.
            </p>
          </div>

          <h2 id="checklist" className="text-3xl font-bold mt-16 mb-6">Your Compliance Checklist</h2>
          <p>
            Before you ship or sell a single pair, make sure you&apos;ve covered these:
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4">For the US Market</h3>
          <ul>
            <li>☐ FDA establishment registration (manufacturer and/or importer)</li>
            <li>☐ FDA product listing (HQF product code)</li>
            <li>☐ Drop ball impact test records on file</li>
            <li>☐ UV400 test certificate for each style</li>
            <li>☐ Proper labeling (UV claims, manufacturer info)</li>
            <li>☐ Product liability insurance</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">For the EU Market</h3>
          <ul>
            <li>☐ Testing to EN ISO 12312-1 by accredited lab</li>
            <li>☐ Technical file compiled and stored</li>
            <li>☐ Declaration of Conformity signed</li>
            <li>☐ CE mark applied to product/packaging</li>
            <li>☐ Filter category clearly labeled</li>
            <li>☐ EU-based importer or authorized representative identified</li>
            <li>☐ Driving suitability warning if Cat 4</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4">For Australia</h3>
          <ul>
            <li>☐ Testing to AS/NZS 1067</li>
            <li>☐ Lens category label on product</li>
            <li>☐ UV protection compliance statement</li>
            <li>☐ Supplier Declaration of Conformity</li>
          </ul>

          <h2 id="faq" className="text-3xl font-bold mt-16 mb-6">FAQ</h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Do sunglasses need FDA approval to sell in the US?</h3>
              <p className="text-gray-600">
                Not &quot;approval&quot; — but FDA compliance, yes. Sunglasses are Class I medical devices. 
                Manufacturers/importers must register with the FDA and list their products. Lenses must pass 
                impact resistance tests. There&apos;s no pre-market approval process — it&apos;s registration 
                plus compliance with performance standards.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">What is CE marking for sunglasses?</h3>
              <p className="text-gray-600">
                CE marking shows your sunglasses meet EU safety requirements under EN ISO 12312-1. It covers 
                UV protection, optical quality, and mechanical strength. It&apos;s mandatory for selling in the 
                EU/EEA/UK. You self-certify by testing to the standard, creating a technical file, and signing 
                a Declaration of Conformity.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">How much does sunglasses compliance testing cost?</h3>
              <p className="text-gray-600">
                Basic UV testing: $100-$300/style. Full CE compliance: $300-$600/style. Full ANSI Z80.3: 
                $300-$500/style. Australian AS/NZS 1067: $400-$800/style. FDA registration is free. Most 
                good factories include basic UV testing in their production costs.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">What UV protection do sunglasses need?</h3>
              <p className="text-gray-600">
                UV400 — blocking 99-100% of UV radiation up to 400nm — is the global baseline. Every 
                major market requires adequate UV protection. Don&apos;t sell sunglasses without UV400 
                certification. The risk to consumers (and your liability) is too high.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2">Can my sunglasses get seized at customs for non-compliance?</h3>
              <p className="text-gray-600">
                Yes. US CBP can detain shipments lacking FDA registration. EU customs regularly seizes 
                products without CE marking. Australia is the strictest — non-compliant sunglasses are 
                routinely destroyed. I&apos;ve seen clients lose $10,000-$50,000 in seized shipments. 
                The compliance testing costs a fraction of that.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Need Help With Compliance?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We handle FDA, CE, and UV compliance for every order we produce. Our team can walk you 
              through the requirements for your specific markets and provide all necessary documentation. 
              No extra charge for standard compliance — it&apos;s part of doing business right.
            </p>
            <Link href="/contact" className="btn-primary">
              Ask Jacky About Compliance
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold mb-6">More From the Factory Floor</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/sunglasses-quality-control" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">Sunglasses Quality Control: Factory Inspection Checklist</h3>
                <p className="text-gray-600 text-sm">What to check before approving a production run — from lens clarity to hinge tension.</p>
              </Link>
              <Link href="/blog/import-sunglasses-guide" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                <h3 className="font-bold text-primary-600 mb-2">How to Import Sunglasses from China</h3>
                <p className="text-gray-600 text-sm">Complete guide to customs, duties, shipping, and documentation.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
