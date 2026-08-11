import Link from 'next/link'
import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Sunglasses Industry Blog | Expert Manufacturing & Branding Insights',
  description: 'Expert insights from a 20-year sunglasses factory owner. OEM/ODM guides, lens technology, sourcing tips, and brand-building for eyewear entrepreneurs.',
  keywords: 'sunglasses blog, eyewear industry, sunglasses manufacturing, OEM sunglasses guide, start sunglasses brand, lens guide, find manufacturer',
  alternates: {
    canonical: '/blog',
    languages: {
      'en': '/blog',
      'es': '/es/blog',
      'fr': '/fr/blog',
      'de': '/de/blog',
      'pt': '/pt/blog',
      'it': '/it/blog',
    },
  },
}

const posts = [
  {
    slug: 'custom-sunglasses-manufacturing-process',
    title: 'From Sketch to Sample: How Custom Sunglasses Are Manufactured in 4 Weeks',
    excerpt: 'A factory owner walks you through the complete custom sunglasses manufacturing process — design review, mold making, material sourcing, assembly, QC, and shipping. Real timelines, real costs, no fluff.',
    date: 'August 11, 2026',
    category: 'Factory Know-How',
    readTime: '9 min read',
    emoji: '🏭',
    featured: true,
  },
  {
    slug: 'sunglasses-retail-display-merchandising',
    title: 'Sunglasses Retail Display & Merchandising: How to Make Wholesale Eyewear Move Off the Shelf',
    excerpt: 'Practical guide to sunglasses retail displays: counter spinners, wall racks, lighting strategies, POP materials, and seasonal merchandising. Factory-tested display strategies that increase in-store sell-through for wholesale eyewear brands.',
    date: 'August 4, 2026',
    category: 'Retail Operations',
    readTime: '12 min read',
    emoji: '🏪',
    featured: true,
  },
  {
    slug: 'sunglasses-frame-measurements-guide',
    title: 'Sunglasses Frame Measurements Explained: PD, Bridge Width, Temple Length — A Factory Buyer\'s Guide',
    excerpt: 'A factory owner breaks down sunglasses frame measurements — PD, bridge width, temple length, frame width — with real wholesale data so you stop ordering frames that don\'t fit your customers.',
    date: 'August 11, 2026',
    category: 'Factory Know-How',
    readTime: '8 min read',
    emoji: '📐',
    featured: true,
  },
  {
    slug: 'photochromic-sunglasses-wholesale-guide',
    title: 'Photochromic Sunglasses Wholesale Guide: Transition Lenses Pricing, MOQ & Factory Sourcing',
    excerpt: 'Factory-direct guide to photochromic sunglasses wholesale: lens quality grades (entry/mid/high), bulk pricing by quantity tier, MOQ minimums, fade-speed testing methods, and how to avoid cheap photochromic lenses that kill your brand reputation.',
    date: 'August 4, 2026',
    category: 'Product Guide',
    readTime: '14 min read',
    emoji: '🕶️',
    featured: true,
  },
  {
    slug: 'kids-sunglasses-wholesale-guide',
    title: 'Kids Sunglasses Wholesale Guide: B2B Sourcing, Safety Standards & Bulk Pricing',
    excerpt: 'Complete B2B guide to sourcing kids sunglasses wholesale: FDA/CE safety requirements, age-specific sizing, flexible frame materials, bulk pricing by quantity tier, and the #1 mistake importers make with children\'s eyewear.',
    date: 'August 4, 2026',
    category: 'Wholesale Guide',
    readTime: '11 min read',
    emoji: '👶',
    featured: true,
  },
  {
    slug: 'b2b-vs-b2c-sunglasses',
    title: 'B2B vs B2C Sunglasses: Which Business Model Actually Makes Money in 2026?',
    excerpt: 'A factory owner who supplies both B2B wholesalers and DTC brands compares the real numbers: margins, cash flow, customer acquisition costs, and which model survives a downturn.',
    date: 'July 27, 2026',
    category: 'Business',
    readTime: '14 min read',
    emoji: '📊',
    featured: true,
  },
  {
    slug: 'sunglasses-import-duties',
    title: 'Sunglasses Import Duties & Tariffs Guide 2026: US, EU, UK, AU, CA Rates',
    excerpt: 'Complete sunglasses import duties guide. HS codes, tariff rates by country, free trade agreements, and how to calculate landed cost. Factory owner\'s practical guide to saving on customs.',
    date: 'July 27, 2026',
    category: 'Import & Logistics',
    readTime: '13 min read',
    emoji: '📋',
    featured: true,
  },
  {
    slug: 'sunglasses-trade-shows-guide',
    title: 'Sunglasses Trade Shows 2026: A Factory Owner\'s Guide to Finding the Right Suppliers',
    excerpt: 'A Chinese factory owner\'s guide to sunglasses trade shows — MIDO, SILMO, Vision Expo, IOFT, HK Optical Fair. Booth costs, vendor vetting strategies, and follow-up that actually works.',
    date: 'July 20, 2026',
    category: 'Sourcing',
    readTime: '12 min read',
    emoji: '🎪',
    featured: true,
  },
  {
    slug: 'negotiate-chinese-manufacturers',
    title: 'How to Negotiate with Chinese Sunglasses Manufacturers: The Factory Owner\'s Playbook',
    excerpt: 'Real negotiation strategies from someone on the other side of the table. Price tactics, relationship building, and what actually moves the needle when negotiating with Chinese factories.',
    date: 'July 20, 2026',
    category: 'Sourcing',
    readTime: '11 min read',
    emoji: '🤝',
    featured: true,
  },
  {
    slug: 'sunglasses-import-duties',
    title: 'Sunglasses Import Duties by Country: What You\'ll Actually Pay in 2026',
    excerpt: 'Real import duty rates for sunglasses shipped to 30+ countries. A factory owner breaks down tariffs, HS codes, free trade deals, and how to cut your customs bill.',
    date: 'July 27, 2026',
    category: 'Import & Logistics',
    readTime: '9 min read',
    emoji: '🌍',
    featured: true,
  },
  {
    slug: 'b2b-vs-b2c-sunglasses',
    title: 'B2B vs B2C Sunglasses: Which Business Model Actually Makes Money in 2026?',
    excerpt: 'A factory owner who supplies both B2B wholesalers and DTC brands compares the real numbers: margins, cash flow, customer acquisition costs, and which model survives a downturn.',
    date: 'July 27, 2026',
    category: 'Business Strategy',
    readTime: '8 min read',
    emoji: '📊',
    featured: false,
  },
  {
    slug: 'import-sunglasses-from-china',
    title: 'How to Import Sunglasses from China: Complete 2026 Guide',
    excerpt: 'Step-by-step guide to importing sunglasses from China. Customs, duties, shipping costs, and quality control. Written by a factory owner with 20 years experience exporting to 50+ countries.',
    date: 'July 11, 2026',
    category: 'Import & Logistics',
    readTime: '8 min read',
  },
  {
    slug: 'wholesale-sunglasses-pricing-guide',
    title: 'Wholesale Sunglasses Price Guide 2026: Real Factory-Direct Numbers',
    excerpt: 'Transparent factory-direct pricing by material, style, and quantity. MOQ requirements, per-unit costs, and real-world pricing examples for every type of sunglasses.',
    date: 'July 11, 2026',
    category: 'Pricing & Sourcing',
    readTime: '7 min read',
  },
  {
    slug: 'private-label-sunglasses-guide',
    title: 'Private Label Sunglasses: Build Your Own Eyewear Brand in 2026',
    excerpt: 'Complete guide to launching your own private label sunglasses brand. Product selection, branding, samples, pricing strategy, and launch preparation.',
    date: 'July 11, 2026',
    category: 'Brand Building',
    readTime: '6 min read',
  },
  {
    slug: 'how-sunglasses-are-made',
    title: 'How Sunglasses Are Made: Inside a Chinese Factory',
    excerpt: 'Step-by-step factory tour from raw materials to finished sunglasses. Acetate cutting, metal welding, lens coating, polishing, QC testing — every step explained by a factory owner.',
    date: 'July 11, 2026',
    category: 'Manufacturing',
    readTime: '8 min read',
  },
  {
    slug: 'custom-sunglasses-packaging-ideas',
    title: 'Sunglasses Packaging That Sells: Budget to Premium Options',
    excerpt: 'Complete packaging guide with real pricing. EVA cases, leather pouches, gift boxes, and unboxing strategies. $0.50-5.00/unit. 500+ brand examples.',
    date: 'July 11, 2026',
    category: 'Branding & Packaging',
    readTime: '7 min read',
  },
  {
    slug: 'fda-ce-certification-sunglasses',
    title: 'FDA & CE Certification for Sunglasses: Complete Compliance Guide',
    excerpt: 'A factory owner explains FDA registration, CE marking, UV testing, and ANSI standards for sunglasses. Step-by-step compliance guide for selling eyewear in the US, EU, and globally.',
    date: 'May 4, 2026',
    category: 'Compliance',
    readTime: '15 min read',
    emoji: '📋',
    featured: false,
  },
  {
    slug: 'import-sunglasses-guide',
    title: 'How to Import Sunglasses from China: Complete 2026 Guide',
    excerpt: 'A Chinese sunglasses factory owner explains how to import sunglasses from China -- sourcing, shipping, customs duties, quality control, and common mistakes to avoid.',
    date: 'May 4, 2026',
    category: 'Sourcing',
    readTime: '16 min read',
    emoji: '🚢',
    featured: false,
  },
  {
    slug: 'sunglasses-design-trends-2026',
    title: 'Top Sunglasses Design Trends for 2026: What\'s Selling Now',
    excerpt: 'A sunglasses factory owner reveals the hottest eyewear design trends for 2026. Real sales data on what\'s moving -- oversized frames, Y2K revivals, sustainable materials, and more.',
    date: 'May 4, 2026',
    category: 'Trends',
    readTime: '12 min read',
    emoji: '🎨',
    featured: false,
  },
  {
    slug: 'sunglasses-face-shape-guide',
    title: 'Best Sunglasses for Your Face Shape: Complete Buying Guide',
    excerpt: 'Find the perfect sunglasses for your face shape -- round, oval, square, heart, oblong. A factory owner explains which frames flatter each face shape with real examples and buying tips.',
    date: 'May 4, 2026',
    category: 'Buying Guide',
    readTime: '10 min read',
    emoji: '👤',
    featured: false,
  },
  {
    slug: 'sunglasses-pricing-strategy',
    title: 'Sunglasses Pricing Strategy: From Factory Cost to Retail Price',
    excerpt: 'A factory owner reveals the real economics of sunglasses pricing -- factory costs, wholesale markup, retail margins, and pricing strategies that work for new and established brands.',
    date: 'May 4, 2026',
    category: 'Business',
    readTime: '14 min read',
    emoji: '💰',
    featured: false,
  },
  {
    slug: 'sunglasses-quality-control',
    title: 'Sunglasses Quality Control: Factory Inspection Checklist',
    excerpt: 'A factory owner shares the complete sunglasses QC checklist -- lens testing, frame inspection, hinge checks, UV verification, and what to look for before approving production.',
    date: 'May 4, 2026',
    category: 'Manufacturing',
    readTime: '13 min read',
    emoji: '✅',
    featured: false,
  },
  {
    slug: 'sunglasses-startup-cost',
    title: 'How Much Does It Cost to Start a Sunglasses Brand in 2026?',
    excerpt: 'A factory owner breaks down every cost to start a sunglasses brand -- from product development to marketing. Real numbers from $3,000 bootstrap to $50,000+ premium launch.',
    date: 'May 4, 2026',
    category: 'Business',
    readTime: '15 min read',
    emoji: '💵',
    featured: false,
  },
  {
    slug: 'sustainable-sunglasses-manufacturing',
    title: 'Sustainable Sunglasses Manufacturing: Eco-Friendly Materials & Processes',
    excerpt: 'A factory owner explains sustainable sunglasses manufacturing -- bio-acetate, recycled nylon, ocean plastic, eco-friendly packaging, and what "sustainable" actually means in eyewear production.',
    date: 'May 4, 2026',
    category: 'Manufacturing',
    readTime: '14 min read',
    emoji: '🌿',
    featured: false,
  },
  {
    slug: 'frame-material-comparison',
    title: 'TR90 vs Acetate vs Metal Sunglasses: Which Frame Material Is Right for Your Brand?',
    excerpt: 'A factory owner breaks down TR90, acetate, and metal sunglasses frames -- real cost data, weight comparisons, durability tests, and which material works best for different brand strategies.',
    date: 'May 4, 2026',
    category: 'Manufacturing',
    readTime: '14 min read',
    emoji: '🧪',
    featured: false,
  },
  {
    slug: 'uv400-vs-polarized',
    title: 'UV400 vs Polarized Sunglasses: What\'s the Difference and Do You Need Both?',
    excerpt: 'A sunglasses factory owner explains the real difference between UV400 and polarized lenses -- what each does, wholesale cost impact, and when your brand needs one, both, or neither.',
    date: 'May 4, 2026',
    category: 'Technology',
    readTime: '12 min read',
    emoji: '🛡️',
    featured: false,
  },
  {
    slug: 'sunglasses-coating-guide',
    title: 'Sunglasses Coating Guide: Mirror, Anti-Reflective, Hydrophobic & More',
    excerpt: 'A factory owner breaks down every sunglasses coating type -- mirror, AR, hydrophobic, oleophobic, anti-fog, hard coat, blue light filter. Real costs per pair and which coatings stack together.',
    date: 'May 4, 2026',
    category: 'Technology',
    readTime: '15 min read',
    emoji: '✨',
    featured: false,
  },
  {
    slug: 'sunglasses-moq-guide',
    title: 'Sunglasses MOQ Guide: How Many Pairs Should You Order First?',
    excerpt: 'A factory owner breaks down sunglasses MOQ for wholesale orders. ODM starts at 50-200 pieces, OEM at 300-1,000+. Learn the smart way to scale your first sunglasses order without overcommitting.',
    date: 'May 4, 2026',
    category: 'Sourcing',
    readTime: '13 min read',
    emoji: '📦',
    featured: false,
  },
  {
    slug: 'custom-sunglasses-packaging',
    title: 'Custom Sunglasses Packaging: Complete Branding Guide for 2026',
    excerpt: 'A factory owner breaks down every packaging option for sunglasses brands -- hard cases, soft pouches, retail boxes, hang tags, and more. Real costs, real examples, and tips that actually work.',
    date: 'May 4, 2026',
    category: 'Branding',
    readTime: '14 min read',
    emoji: '🎁',
    featured: false,
  },
  {
    slug: 'find-sunglasses-manufacturer',
    title: 'How to Find a Reliable Sunglasses Manufacturer in 2026',
    excerpt: 'A factory owner reveals where to find manufacturers, how to spot trading companies on Alibaba, 10 evaluation criteria, and negotiation tips from the other side of the table.',
    date: 'April 28, 2026',
    category: 'Sourcing',
    readTime: '16 min read',
    emoji: '🔍',
    featured: false,
  },
  {
    slug: 'sunglasses-lens-guide',
    title: 'Sunglasses Lens Types: Complete Buyer\'s Guide for 2026',
    excerpt: 'Polycarbonate, CR-39, glass, or TAC? Grey, brown, or mirror? Polarized or not? Real costs, honest comparisons, and a brand owner\'s playbook for choosing the right lens setup.',
    date: 'April 25, 2026',
    category: 'Technology',
    readTime: '14 min read',
    emoji: '🔬',
    featured: false,
  },
  {
    slug: 'sunglasses-lens-technology-guide',
    title: 'Sunglasses Lens Technology Guide: UV400 vs Polarized vs Photochromic (2026)',
    excerpt: 'UV400 = health, polarized = comfort, photochromic = convenience. The car windshield gotcha nobody explains. Factory breakdown of every lens type, what they actually do, and which one you need.',
    date: 'July 17, 2026',
    category: 'Technology',
    readTime: '13 min read',
    emoji: '🔬',
    featured: true,
  },
  {
    slug: 'oem-vs-odm',
    title: 'OEM vs ODM Sunglasses: What\'s the Difference? Complete Guide',
    excerpt: 'After 3,000 conversations about OEM vs ODM, here\'s the honest version -- real costs, real timelines, and a decision framework that actually helps you choose.',
    date: 'April 20, 2026',
    category: 'Manufacturing',
    readTime: '12 min read',
    emoji: '🏭',
    featured: false,
  },
  {
    slug: 'sell-sunglasses-shopify-amazon',
    title: 'How to Sell Sunglasses on Shopify vs Amazon: 2026 Guide for Brand Owners',
    excerpt: 'Amazon gets you sales, Shopify builds you a brand. Real numbers on margins, fees, and launch costs from someone who supplies both channels. Which platform actually makes sense for your sunglasses business.',
    date: 'July 17, 2026',
    category: 'Business',
    readTime: '12 min read',
    emoji: '🛒',
    featured: true,
  },
  {
    slug: 'start-sunglasses-brand',
    title: 'How to Start a Sunglasses Brand: Complete Guide',
    excerpt: 'The full playbook from idea to first sale -- market research, sourcing, branding, pricing, and marketing. Everything I wish someone told me when I started in 2006.',
    date: 'March 28, 2026',
    category: 'Business',
    readTime: '10 min read',
    emoji: '🚀',
    featured: true,
  },
]

export default function BlogPage() {
  const featured = posts.find(p => p.featured)
  const otherPosts = posts.filter(p => !p.featured)

  return (
    <main className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: 'Home', href: '/' }, { name: 'Blog' }]} />

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            From the Factory Floor
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Straight talk about sunglasses manufacturing, sourcing, and brand building -- 
            written by someone who&apos;s been making sunglasses since 2006.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-sm">JC</div>
            <div className="text-left">
              <div className="font-medium text-gray-900 text-sm">Written by Jacky Chen</div>
              <div className="text-xs text-gray-500">Founder, EyeView Sunglasses</div>
            </div>
          </div>
        </div>

        {/* Featured Post */}
        {featured && (
          <div className="card mb-12 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 aspect-video md:aspect-auto flex items-center justify-center">
                <span className="text-8xl">{featured.emoji}</span>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-primary-600 font-semibold text-sm mb-2">FEATURED</span>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {featured.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <span>{featured.date}</span>
                  <span>•</span>
                  <span>{featured.readTime}</span>
                </div>
                <Link href={`/blog/${featured.slug}`} className="btn-primary self-start">
                  Read Article
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card group">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <span className="text-6xl group-hover:scale-110 transition-transform">{post.emoji}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="text-sm text-gray-500">{post.date}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter */}
        <section className="mt-20 bg-primary-600 text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Get Factory Insights in Your Inbox
          </h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            One email per month. No fluff -- just the manufacturing tips, market trends, 
            and sourcing strategies that actually help you build a better brand.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button type="submit" className="bg-white text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </form>
        </section>
      </div>
    </main>
  )
}
