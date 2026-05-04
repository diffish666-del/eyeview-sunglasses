import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Wholesale Sunglasses Collection | All Styles & Categories',
  description: 'Browse our complete wholesale sunglasses collection: Aviator, Wayfarer, Cat Eye, Sport, Round, Kids, Polarized, Blue Light, Eco-Friendly, Acetate & TR90 glasses. OEM customization available. MOQ 50pcs.',
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/products/',
    languages: {
      'en': 'https://eyeviewsunglasses.com/products/',
      'es': 'https://eyeviewsunglasses.com/es/productos/',
    },
  },
  openGraph: {
    title: 'Wholesale Sunglasses Collection | All Styles & Categories',
    description: 'Browse our complete wholesale sunglasses collection. OEM & ODM customization available for all styles.',
    url: 'https://eyeviewsunglasses.com/products/',
  },
};

const products = [
  {
    name: 'Aviator Sunglasses',
    href: '/products/aviator/',
    emoji: '✈️',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop',
    keywords: 'wholesale aviator sunglasses',
    description: 'The timeless aviator design with classic teardrop metal frames. Originally designed for pilots, now a global fashion staple. Available in gold, silver, gunmetal, and rose gold frames with a wide selection of lens colors including gradient, mirrored, and polarized options. Perfect for men\'s and unisex wholesale collections.',
    moq: 'MOQ: 50 pairs',
    price: 'From $2.50/pair',
  },
  {
    name: 'Wayfarer Sunglasses',
    href: '/products/wayfarer/',
    emoji: '🎸',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=300&fit=crop',
    keywords: 'wholesale wayfarer sunglasses',
    description: 'The iconic wayfarer silhouette crafted from premium acetate. This universally flattering frame style has been a best-seller for decades. Available in solid colors, tortoiseshell patterns, and transparent frames. Ideal for retail shops, online brands, and promotional giveaways.',
    moq: 'MOQ: 50 pairs',
    price: 'From $2.00/pair',
  },
  {
    name: 'Cat Eye Sunglasses',
    href: '/products/cat-eye/',
    emoji: '😺',
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=400&h=300&fit=crop',
    keywords: 'wholesale cat eye sunglasses',
    description: 'Bold and feminine cat eye frames that dominate the women\'s fashion eyewear market. Available in oversized, classic, and subtle variations with embellishment options including rhinestones, metal accents, and gradient finishes. A must-have for any women\'s accessories brand.',
    moq: 'MOQ: 50 pairs',
    price: 'From $2.30/pair',
  },
  {
    name: 'Sport Sunglasses',
    href: '/products/sport/',
    emoji: '🚴',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=400&h=300&fit=crop',
    keywords: 'wholesale sport sunglasses',
    description: 'High-performance wraparound sport sunglasses engineered for active lifestyles. Built with impact-resistant TR90 and polycarbonate frames, rubber nose pads, and anti-slip temple tips. Ideal for cycling, running, fishing, golf, and outdoor recreation brands.',
    moq: 'MOQ: 100 pairs',
    price: 'From $3.00/pair',
  },
  {
    name: 'Round Sunglasses',
    href: '/products/round/',
    emoji: '🔵',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=300&fit=crop',
    keywords: 'wholesale round sunglasses',
    description: 'Vintage-inspired round frames with a timeless retro aesthetic. Available in both metal and acetate constructions with options ranging from small John Lennon-style circles to oversized round frames. Popular with fashion-forward brands and festival merchandise.',
    moq: 'MOQ: 50 pairs',
    price: 'From $2.00/pair',
  },
  {
    name: 'Kids Sunglasses',
    href: '/products/kids/',
    emoji: '👶',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=400&h=300&fit=crop',
    keywords: 'wholesale kids sunglasses',
    description: 'Safe, durable, and colorful sunglasses designed specifically for children aged 3 to 12. Made with flexible, BPA-free materials that withstand rough handling. UV400 protection with shatterproof lenses. Available in fun colors, character themes, and age-appropriate designs.',
    moq: 'MOQ: 100 pairs',
    price: 'From $1.50/pair',
  },
  {
    name: 'Polarized Sunglasses',
    href: '/products/polarized/',
    emoji: '🌊',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop',
    keywords: 'wholesale polarized sunglasses',
    description: 'Premium polarized sunglasses featuring TAC polarized lenses that eliminate glare from water, snow, and road surfaces. Available across all frame styles including aviator, wayfarer, sport, and wraparound designs. Essential for outdoor, fishing, and driving-focused brands.',
    moq: 'MOQ: 100 pairs',
    price: 'From $3.50/pair',
  },
  {
    name: 'Blue Light Glasses',
    href: '/products/blue-light/',
    emoji: '💻',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=300&fit=crop',
    keywords: 'wholesale blue light glasses',
    description: 'Digital eye protection glasses with advanced blue light filtering technology. Block 30-50% of harmful blue light from computer screens, smartphones, and LED lighting. Available in prescription-ready and non-prescription frames. Growing demand from corporate, gaming, and wellness brands.',
    moq: 'MOQ: 50 pairs',
    price: 'From $2.50/pair',
  },
  {
    name: 'Eco-Friendly Sunglasses',
    href: '/products/eco-friendly/',
    emoji: '🌱',
    image: 'https://images.unsplash.com/photo-1625591348697-c75b4d7ea5f9?w=400&h=300&fit=crop',
    keywords: 'sustainable sunglasses manufacturer',
    description: 'Sustainable eyewear made from recycled ocean plastic (rPET), bamboo, bio-acetate, and recycled aluminum. Perfect for brands targeting eco-conscious consumers. Growing 30-50% premium retail positioning.',
    moq: 'MOQ: 100 pairs',
    price: 'From $3.00/pair',
  },
  {
    name: 'Acetate Sunglasses',
    href: '/products/acetate/',
    emoji: '🎨',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=300&fit=crop',
    keywords: 'acetate sunglasses manufacturer',
    description: 'Handcrafted acetate frames in tortoiseshell, crystal, marble, and custom patterns. Premium Italian Mazzucchelli and high-quality Chinese acetate available. CNC cut and hand-polished for a luxury finish.',
    moq: 'MOQ: 100 pairs',
    price: 'From $4.00/pair',
  },
  {
    name: 'TR90 Sunglasses',
    href: '/products/tr90/',
    emoji: '🏋️',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=300&fit=crop',
    keywords: 'TR90 sunglasses manufacturer',
    description: 'Ultra-lightweight TR90 nylon frames (15-20g) with memory flexibility and hypoallergenic properties. Made from Swiss EMS-Grivory Grilamid. Ideal for sports, kids, and everyday comfort lines.',
    moq: 'MOQ: 100 pairs',
    price: 'From $2.50/pair',
  },
];

export default function ProductsPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Products', href: '/products/' }]} />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Wholesale Sunglasses Collection</h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Explore our comprehensive range of wholesale sunglasses styles. As a professional sunglasses manufacturer, we offer complete OEM and ODM customization for every category. All frames are available with custom branding, lens options, and packaging to match your brand identity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 border group flex gap-6"
              >
                {product.image ? (
                  <img src={product.image} alt={`${product.name} Wholesale - EyeView`} loading="lazy" className="w-24 h-24 object-cover rounded-lg flex-shrink-0" />
                ) : (
                  <span className="text-6xl flex-shrink-0">{product.emoji}</span>
                )}
                <div>
                  <h2 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">{product.name}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{product.description}</p>
                  <div className="flex gap-4 text-sm">
                    <span className="text-primary-600 font-semibold">{product.moq}</span>
                    <span className="text-green-600 font-semibold">{product.price}</span>
                  </div>
                  <span className="inline-block mt-3 text-primary-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    View Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Need Custom Wholesale Sunglasses?" description="Tell us your requirements and we'll provide a detailed quote within 24 hours. All styles are fully customizable with your branding." />
    </>
  );
}
