import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sunglasses Industry Blog | Expert Manufacturing & Branding Insights',
  description: 'Expert insights from a 20-year sunglasses factory owner. OEM/ODM guides, lens technology, sourcing tips, and brand-building strategies for eyewear entrepreneurs.',
  keywords: 'sunglasses blog, eyewear industry, sunglasses manufacturing, OEM sunglasses guide, start sunglasses brand, lens guide, find manufacturer',
  alternates: {
    canonical: '/blog',
    languages: {
      'en': '/blog',
      'es': '/es/blog',
    },
  },
}

const posts = [
  {
    slug: 'frame-material-comparison',
    title: 'TR90 vs Acetate vs Metal Sunglasses: Which Frame Material Is Right for Your Brand?',
    excerpt: 'A factory owner breaks down TR90, acetate, and metal sunglasses frames — real cost data, weight comparisons, durability tests, and which material works best for different brand strategies.',
    date: 'May 4, 2026',
    category: 'Manufacturing',
    readTime: '14 min read',
    emoji: '🧪',
    featured: false,
  },
  {
    slug: 'uv400-vs-polarized',
    title: 'UV400 vs Polarized Sunglasses: What\'s the Difference and Do You Need Both?',
    excerpt: 'A sunglasses factory owner explains the real difference between UV400 and polarized lenses — what each does, wholesale cost impact, and when your brand needs one, both, or neither.',
    date: 'May 4, 2026',
    category: 'Technology',
    readTime: '12 min read',
    emoji: '🛡️',
    featured: false,
  },
  {
    slug: 'sunglasses-coating-guide',
    title: 'Sunglasses Coating Guide: Mirror, Anti-Reflective, Hydrophobic & More',
    excerpt: 'A factory owner breaks down every sunglasses coating type — mirror, AR, hydrophobic, oleophobic, anti-fog, hard coat, blue light filter. Real costs per pair and which coatings stack together.',
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
    excerpt: 'A factory owner breaks down every packaging option for sunglasses brands — hard cases, soft pouches, retail boxes, hang tags, and more. Real costs, real examples, and tips that actually work.',
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
    slug: 'oem-vs-odm',
    title: 'OEM vs ODM Sunglasses: What\'s the Difference? Complete Guide',
    excerpt: 'After 3,000 conversations about OEM vs ODM, here\'s the honest version — real costs, real timelines, and a decision framework that actually helps you choose.',
    date: 'April 20, 2026',
    category: 'Manufacturing',
    readTime: '12 min read',
    emoji: '🏭',
    featured: false,
  },
  {
    slug: 'start-sunglasses-brand',
    title: 'How to Start a Sunglasses Brand: Complete Guide',
    excerpt: 'The full playbook from idea to first sale — market research, sourcing, branding, pricing, and marketing. Everything I wish someone told me when I started in 2006.',
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
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            From the Factory Floor
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Straight talk about sunglasses manufacturing, sourcing, and brand building — 
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
            One email per month. No fluff — just the manufacturing tips, market trends, 
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
