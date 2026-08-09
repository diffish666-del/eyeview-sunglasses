import type { Metadata } from 'next'
import DefinitionBlock from '@/components/DefinitionBlock'

export const metadata: Metadata = {
  title: 'Sunglasses Glossary – Terminology, Materials & Certifications',
  description: 'Comprehensive sunglasses industry glossary covering frame materials, lens technology, certifications, and manufacturing terms. Essential reference for eyewear buyers and manufacturers.',
  openGraph: {
    title: 'Sunglasses Glossary – Terminology, Materials & Certifications',
    description: 'Comprehensive sunglasses industry glossary covering frame materials, lens technology, certifications, and manufacturing terms.',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/glossary',
  },
}

interface TermDef {
  '@type': 'DefinedTerm'
  '@id': string
  name: string
  description: string
  termCode: string
  inDefinedTermSet: {
    '@type': 'DefinedTermSet'
    name: string
  }
}

const terms = [
  // ── 镜框材质 (Frame Materials) ──
  { id: 'acetate', term: 'Acetate (醋酸纤维)', definition: 'A plant-based cellulose plastic widely used for premium eyewear frames. Offers rich color depth, high polish, hypoallergenic properties, and excellent durability. EyeView uses Mazzucchelli acetate for top-tier collections.', category: 'Frame Materials' },
  { id: 'tr90', term: 'TR90', definition: 'A thermoplastic polyamide material known for extreme flexibility, lightweight feel, and shape memory. TR90 frames bend under stress and snap back to original shape, ideal for sports and active wear sunglasses.', category: 'Frame Materials' },
  { id: 'titanium', term: 'Titanium (钛金属)', definition: 'A premium metal for eyewear frames. 40% lighter than standard metals, corrosion-resistant, hypoallergenic, and exceptionally strong. Pure titanium and beta-titanium are common grades used in high-end sunglasses.', category: 'Frame Materials' },
  { id: 'stainless-steel', term: 'Stainless Steel (不锈钢)', definition: 'Durable, corrosion-resistant alloy used in mid-to-high range eyewear. Provides strength without bulk, supports thin-profile designs, and offers good value-to-performance ratio.', category: 'Frame Materials' },
  { id: 'pc', term: 'Polycarbonate (PC/聚碳酸酯)', definition: 'Impact-resistant thermoplastic used for both frames and lenses. Lightweight and cost-effective for mass production. Common in safety eyewear and budget sunglasses.', category: 'Frame Materials' },
  { id: 'wood-bamboo', term: 'Wood & Bamboo Frames (木质/竹制)', definition: 'Natural, eco-friendly frame materials gaining popularity in sustainable eyewear. Each piece has unique grain patterns. Requires special treatment for moisture resistance and longevity.', category: 'Frame Materials' },
  { id: 'ultem', term: 'Ultem® (PEI)', definition: 'High-performance thermoplastic polyetherimide known for extreme heat resistance, chemical resistance, and tensile strength. Popular in industrial safety eyewear and premium performance sunglasses.', category: 'Frame Materials' },
  { id: 'monel', term: 'Monel (蒙乃尔合金)', definition: 'Nickel-copper alloy commonly used in eyewear frames. Offers excellent corrosion resistance with good malleability for intricate designs. A cost-effective metal frame option with reliable durability.', category: 'Frame Materials' },

  // ── 镜片技术 (Lens Technology) ──
  { id: 'polarized-lens', term: 'Polarized Lens (偏光镜片)', definition: 'Lenses with a special chemical film that blocks horizontal light waves, eliminating glare from reflective surfaces like water, snow, and roads. Essential for driving, fishing, and outdoor sports sunglasses.', category: 'Lens Technology' },
  { id: 'uv400', term: 'UV400 Protection', definition: 'Lens coating that blocks 100% of UVA and UVB rays up to wavelength 400nm. The highest standard for UV protection, recommended by optometrists worldwide for preventing long-term eye damage.', category: 'Lens Technology' },
  { id: 'photochromic', term: 'Photochromic Lens (光致变色)', definition: 'Lenses that automatically darken in sunlight and clear up indoors. Uses silver halide or organic photochromic molecules that react to UV exposure. Offers convenience of one pair for all conditions.', category: 'Lens Technology' },
  { id: 'gradient-lens', term: 'Gradient Lens (渐变色镜片)', definition: 'Lenses with tint density decreasing from top to bottom. Darker at top for overhead sun protection; lighter at bottom for reading or viewing dashboard. Popular in fashion and driving sunglasses.', category: 'Lens Technology' },
  { id: 'mirror-coating', term: 'Mirror Coating (镜面镀膜)', definition: 'A reflective metallic coating applied to the front surface of lenses. Reduces visible light transmission by 10-60% while adding a distinctive aesthetic. Available in silver, gold, blue, green, and rainbow finishes.', category: 'Lens Technology' },
  { id: 'ar-coating', term: 'Anti-Reflective Coating (AR/抗反射镀膜)', definition: 'Microscopically thin multi-layer coating that reduces reflections on the back surface of lenses. Eliminates ghost images, improves visual clarity, and reduces eye strain, especially during screen use.', category: 'Lens Technology' },
  { id: 'hydrophobic', term: 'Hydrophobic Coating (疏水镀膜)', definition: 'Nano-scale coating that repels water, oil, and dust from lens surfaces. Water beads up and rolls off, keeping lenses cleaner longer. Often combined with oleophobic coating for smudge resistance.', category: 'Lens Technology' },
  { id: 'polycarbonate-lens', term: 'Polycarbonate Lens', definition: 'Lens material that is 10x more impact-resistant than standard plastic or glass. Naturally blocks 100% UV without additional coating. The preferred choice for safety, sports, and children\'s sunglasses.', category: 'Lens Technology' },

  // ── 行业术语 (Industry Terms) ──
  { id: 'oem', term: 'OEM (Original Equipment Manufacturing)', definition: 'A manufacturing model where the factory produces products based on the buyer\'s design specifications with the buyer\'s branding. EyeView offers full OEM services from design to finished product.', category: 'Industry Terms' },
  { id: 'odm', term: 'ODM (Original Design Manufacturing)', definition: 'A manufacturing model where the factory designs and produces products that buyers can brand as their own. Reduces development time and costs for brands entering the eyewear market.', category: 'Industry Terms' },
  { id: 'moq', term: 'MOQ (Minimum Order Quantity)', definition: 'The smallest quantity a manufacturer will produce per order. For custom sunglasses, MOQ typically ranges from 300-500 pieces per style, varying by material complexity and customization level.', category: 'Industry Terms' },
  { id: 'lead-time', term: 'Lead Time (交货期)', definition: 'The total time from order confirmation to shipment. For custom sunglasses manufacturing, typical lead times are 30-60 days including mold development, sampling, production, and quality inspection.', category: 'Industry Terms' },
  { id: 'sku', term: 'SKU (Stock Keeping Unit)', definition: 'A unique identifier for each distinct product variant. One frame style in 5 colors and 2 sizes = 10 SKUs. Critical for inventory management in wholesale sunglasses distribution.', category: 'Industry Terms' },
  { id: 'private-label', term: 'Private Label (自有品牌)', definition: 'Products manufactured by one company but sold under another brand\'s name. EyeView\'s private label service allows retailers and brands to sell high-quality sunglasses under their own identity.', category: 'Industry Terms' },
  { id: 'white-label', term: 'White Label (白标)', definition: 'Generic products manufactured without branding, ready for retailers to add their own labels and packaging. Fastest route to market for sunglasses resellers with minimal upfront design work.', category: 'Industry Terms' },
  { id: 'fob', term: 'FOB (Free On Board)', definition: 'International trade term indicating the seller delivers goods to the port and loads them onto the vessel. The buyer assumes responsibility and cost from that point. Common incoterm in sunglasses export.', category: 'Industry Terms' },

  // ── 认证标准 (Certification Standards) ──
  { id: 'ce-mark', term: 'CE Mark (CE认证)', definition: 'Mandatory conformity marking for products sold in the European Economic Area. Indicates compliance with EU health, safety, and environmental requirements. All EyeView sunglasses exported to Europe carry CE marking.', category: 'Certification Standards' },
  { id: 'fda', term: 'FDA Registration', definition: 'U.S. Food and Drug Administration registration required for medical devices including impact-resistant sunglasses. Verifies compliance with U.S. safety standards for eyewear sold in the American market.', category: 'Certification Standards' },
  { id: 'iso9001', term: 'ISO 9001', definition: 'International standard for quality management systems. Certification demonstrates consistent product quality, continuous improvement focus, and customer satisfaction commitment in manufacturing processes.', category: 'Certification Standards' },
  { id: 'uv-test', term: 'EN ISO 12312-1 (UV Testing)', definition: 'International standard specifically for sunglasses and eyewear. Tests UV transmittance, optical quality, impact resistance, and frame durability. Required for CE marking compliance in Europe.', category: 'Certification Standards' },
  { id: 'ansi-z87', term: 'ANSI Z87.1', definition: 'American National Standards Institute standard for occupational and educational eye protection. Certifies impact resistance, optical clarity, and coverage. Essential for safety sunglasses sold in North America.', category: 'Certification Standards' },
  { id: 'as-nzs', term: 'AS/NZS 1067', definition: 'Australian/New Zealand joint standard for sunglasses and fashion spectacles. One of the world\'s strictest standards, with 5 lens categories (0-4) based on light transmittance and UV protection levels.', category: 'Certification Standards' },
  { id: 'reach', term: 'REACH Compliance', definition: 'EU regulation on Registration, Evaluation, Authorisation, and Restriction of Chemicals. Sunglasses exported to Europe must comply with REACH substance restrictions for frame materials and coatings.', category: 'Certification Standards' },
  { id: 'cpsia', term: 'CPSIA (Consumer Product Safety)', definition: 'U.S. regulation setting safety requirements for consumer products including children\'s sunglasses. Mandates lead content limits, phthalate restrictions, and third-party testing for youth eyewear.', category: 'Certification Standards' },

  // ── 制造工艺 (Manufacturing Processes) ──
  { id: 'injection-molding', term: 'Injection Molding (注塑成型)', definition: 'Manufacturing process where molten plastic is injected into a mold cavity under high pressure. Primary method for mass-producing plastic sunglasses frames with consistent quality and fast cycle times.', category: 'Manufacturing Processes' },
  { id: 'cnc-machining', term: 'CNC Machining (数控加工)', definition: 'Computer-controlled cutting process used for precision metal frame components and acetate frame shaping. Ensures micron-level accuracy in temple hinges, bridge fittings, and decorative elements.', category: 'Manufacturing Processes' },
  { id: 'hand-polishing', term: 'Hand Polishing (手工抛光)', definition: 'Skilled manual finishing process for acetate frames. Artisans use progressively finer polishing compounds and buffing wheels to achieve the signature deep gloss characteristic of high-end sunglasses.', category: 'Manufacturing Processes' },
  { id: 'laser-engraving', term: 'Laser Engraving (激光雕刻)', definition: 'Contactless marking technology for branding logos, model numbers, and decorative patterns on frames and lenses. Offers permanent, wear-resistant marking with sub-millimeter precision on all materials.', category: 'Manufacturing Processes' },
  { id: 'electroplating', term: 'Electroplating (电镀)', definition: 'Process of depositing a thin metal coating onto frame surfaces via electric current. Creates gold, silver, rose gold, and gunmetal finishes on metal and plastic frames with uniform coverage and color consistency.', category: 'Manufacturing Processes' },
  { id: 'tumbling', term: 'Barrel Tumbling (滚筒抛光)', definition: 'Mass finishing process where metal frame parts rotate in a barrel with abrasive media. Removes burrs, smooths edges, and creates a uniform satin or matte surface finish before final plating or coating.', category: 'Manufacturing Processes' },
  { id: 'pad-printing', term: 'Pad Printing (移印)', definition: 'Indirect printing process using a silicone pad to transfer ink onto curved frame surfaces. Ideal for logos, size markings, and decorative details on finished sunglasses where screen printing would be impractical.', category: 'Manufacturing Processes' },
  { id: 'qc-inspection', term: 'QC Inspection (质检)', definition: 'Multi-stage quality control process including incoming material inspection (IQC), in-process quality control (IPQC), and final quality control (FQC). Includes AQL sampling, optical testing, drop testing, and fit verification.', category: 'Manufacturing Processes' },
]

// Generate DefinedTerm JSON-LD schema
const definedTermSetJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': 'https://eyeviewsunglasses.com/glossary#term-set',
  'name': 'Sunglasses Industry Glossary – EyeView',
  'description': 'Comprehensive glossary of sunglasses and eyewear manufacturing terminology covering frame materials, lens technology, industry terms, certification standards, and manufacturing processes.',
  'hasDefinedTerm': terms.map(t => ({
    '@type': 'DefinedTerm',
    '@id': `https://eyeviewsunglasses.com/glossary#${t.id}`,
    'name': t.term,
    'description': t.definition,
    'termCode': t.id,
    'inDefinedTermSet': {
      '@type': 'DefinedTermSet',
      '@id': 'https://eyeviewsunglasses.com/glossary#term-set',
      'name': 'Sunglasses Industry Glossary – EyeView',
    },
  })),
}

const categories = [
  { key: 'frame-materials', name: 'Frame Materials', nameZh: '镜框材质', icon: '🕶️' },
  { key: 'lens-tech', name: 'Lens Technology', nameZh: '镜片技术', icon: '🔬' },
  { key: 'industry-terms', name: 'Industry Terms', nameZh: '行业术语', icon: '📋' },
  { key: 'certifications', name: 'Certification Standards', nameZh: '认证标准', icon: '✅' },
  { key: 'manufacturing', name: 'Manufacturing Processes', nameZh: '制造工艺', icon: '⚙️' },
]

const categoryKeys: Record<string, string> = {
  'Frame Materials': 'frame-materials',
  'Lens Technology': 'lens-tech',
  'Industry Terms': 'industry-terms',
  'Certification Standards': 'certifications',
  'Manufacturing Processes': 'manufacturing',
}

export default function GlossaryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Sunglasses Industry Glossary</h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Comprehensive reference guide to sunglasses and eyewear manufacturing terminology.
            40+ essential terms every buyer and manufacturer should know.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map(cat => (
            <a
              key={cat.key}
              href={`#${cat.key}`}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-primary-50 hover:text-primary-700 rounded-full text-sm font-medium transition-colors"
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
              <span className="text-gray-400 text-xs">({cat.nameZh})</span>
            </a>
          ))}
        </div>

        {/* Terms by Category */}
        <div className="space-y-12">
          {categories.map(cat => {
            const catTerms = terms.filter(t => t.category === cat.name)
            return (
              <section key={cat.key} id={cat.key} className="scroll-mt-20">
                <h2 className="text-2xl font-bold text-primary-700 mb-2 flex items-center gap-3">
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                  <span className="text-lg font-normal text-gray-400">({cat.nameZh})</span>
                </h2>
                <p className="text-gray-500 mb-6">{catTerms.length} terms</p>
                <dl className="grid gap-4 md:grid-cols-2">
                  {catTerms.map(t => (
                    <DefinitionBlock key={t.id} id={t.id} term={t.term} definition={t.definition} />
                  ))}
                </dl>
              </section>
            )
          })}
        </div>
      </section>

      {/* SEO Call-to-Action */}
      <section className="bg-gray-50 border-t border-gray-200 py-12 mt-8">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-primary-700 mb-3">
            Need Custom Sunglasses Manufacturing?
          </h3>
          <p className="text-gray-600 mb-6">
            EyeView provides OEM & ODM sunglasses manufacturing with 15+ years of expertise.
            CE, FDA, ISO 9001 certified. MOQ from 300 pcs/style.
          </p>
          <a
            href="/contact/"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Request a Quote →
          </a>
        </div>
      </section>
    </>
  )
}
