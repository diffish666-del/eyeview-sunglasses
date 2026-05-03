import Link from 'next/link';
import type { Metadata } from 'next';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: {
    absolute: 'Wholesale Sunglasses Manufacturer | OEM Custom Sunglasses Factory - EyeView',
  },
  description: 'EyeView is a leading wholesale sunglasses manufacturer offering OEM & ODM custom sunglasses. 15+ years experience, 500+ global clients. Get a free quote today.',
  openGraph: {
    title: 'Wholesale Sunglasses Manufacturer | OEM Custom Sunglasses Factory - EyeView',
    description: 'EyeView is a leading wholesale sunglasses manufacturer offering OEM & ODM custom sunglasses. 15+ years experience, 500+ global clients.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com',
  },
};

const stats = [
  { number: '15+', label: 'Years Experience', emoji: '🏭' },
  { number: '500+', label: 'Global Clients', emoji: '🌍' },
  { number: '1M+', label: 'Pairs Produced', emoji: '🕶️' },
  { number: '100%', label: 'Quality Guaranteed', emoji: '✅' },
];

const features = [
  {
    emoji: '🎨',
    title: 'Full Customization',
    description: 'From frame design and lens color to logo engraving and custom packaging — we bring your unique sunglasses vision to life with complete OEM and ODM manufacturing capabilities.',
  },
  {
    emoji: '💰',
    title: 'Competitive Factory Pricing',
    description: 'As a direct manufacturer with our own production facility, we eliminate middleman costs. Enjoy wholesale prices starting from as low as $1.50 per pair with volume discounts available.',
  },
  {
    emoji: '⚡',
    title: 'Fast Turnaround',
    description: 'Our streamlined production process delivers samples in 5-7 days and bulk orders in 15-25 days. Rush orders available for time-sensitive product launches and seasonal collections.',
  },
  {
    emoji: '🔒',
    title: 'Premium Quality Assurance',
    description: 'Every pair undergoes rigorous 6-point quality inspection. Our sunglasses meet international standards including FDA, CE, UV400, and ANSI Z80.3 certification requirements.',
  },
  {
    emoji: '📦',
    title: 'Low Minimum Order Quantity',
    description: 'Start with as few as 50 pieces per style — perfect for new brands testing the market, boutique retailers, and promotional campaigns. No massive inventory commitments required.',
  },
  {
    emoji: '🌍',
    title: 'Global Shipping & Logistics',
    description: 'We ship to over 60 countries worldwide via DHL, FedEx, UPS, and sea freight. Door-to-door delivery with full customs documentation and real-time tracking for every shipment.',
  },
];

const products = [
  { name: 'Aviator Sunglasses', href: '/products/aviator/', emoji: '✈️', description: 'Classic metal frame aviators with teardrop lenses. Perfect for fashion-forward wholesale collections.' },
  { name: 'Wayfarer Sunglasses', href: '/products/wayfarer/', emoji: '🎸', description: 'Iconic acetate frame wayfarers. The best-selling style for retail and promotional campaigns.' },
  { name: 'Cat Eye Sunglasses', href: '/products/cat-eye/', emoji: '😺', description: 'Trendy cat eye frames designed for the women\'s fashion market. Bold and stylish designs.' },
  { name: 'Sport Sunglasses', href: '/products/sport/', emoji: '🚴', description: 'High-performance sport sunglasses with wraparound designs and impact-resistant lenses.' },
  { name: 'Round Sunglasses', href: '/products/round/', emoji: '🔵', description: 'Vintage-inspired round frames with retro charm. Popular in fashion and lifestyle brands.' },
  { name: 'Kids Sunglasses', href: '/products/kids/', emoji: '👶', description: 'Safe, durable, and colorful sunglasses designed specifically for children aged 3-12.' },
  { name: 'Polarized Sunglasses', href: '/products/polarized/', emoji: '🌊', description: 'Premium polarized lenses that eliminate glare. Essential for outdoor and water sports.' },
  { name: 'Blue Light Glasses', href: '/products/blue-light/', emoji: '💻', description: 'Digital eye protection glasses that filter harmful blue light from screens and devices.' },
];

const steps = [
  { step: '01', title: 'Inquiry & Consultation', description: 'Share your requirements — style, quantity, customization needs, and budget. Our team provides expert guidance to help you choose the right products for your market.' },
  { step: '02', title: 'Design & Sampling', description: 'We create detailed designs based on your specifications. Receive physical samples within 5-7 business days for your review and approval before mass production begins.' },
  { step: '03', title: 'Approval & Production', description: 'Once you approve the samples, we begin full-scale production. Our factory capacity handles orders from 50 to 100,000+ pieces with consistent quality control.' },
  { step: '04', title: 'Quality Inspection', description: 'Every batch undergoes comprehensive 6-point quality inspection including UV protection testing, hinge durability, lens clarity, and frame alignment checks.' },
  { step: '05', title: 'Shipping & Delivery', description: 'We handle all packaging, labeling, and logistics. Choose from express air freight (5-7 days) or economical sea shipping (20-30 days) with full tracking and customs support.' },
];

const faqs = [
  {
    question: 'What is the minimum order quantity (MOQ) for wholesale sunglasses?',
    answer: 'Our standard MOQ is 50 pieces per style and color combination. For new clients looking to test the market, we offer flexible starter packages. For custom OEM orders with logo engraving or unique designs, the MOQ may start at 100-300 pieces depending on complexity. Contact us for specific requirements.',
  },
  {
    question: 'How long does it take to produce a wholesale sunglasses order?',
    answer: 'Production timelines vary based on order size and customization level. Standard orders (existing designs) typically ship within 15-20 business days. Custom OEM orders with new designs require 20-30 business days including sampling. Rush production is available for an additional fee, reducing lead time to 10-15 days.',
  },
  {
    question: 'Do you offer OEM and ODM sunglasses manufacturing services?',
    answer: 'Yes, we provide both OEM (Original Equipment Manufacturing) and ODM (Original Design Manufacturing) services. With OEM, you provide the design and we manufacture. With ODM, our design team creates unique styles based on your brand direction. Both options include custom logo placement, packaging, and labeling.',
  },
  {
    question: 'What quality certifications do your sunglasses meet?',
    answer: 'All our sunglasses meet or exceed international quality standards including UV400 protection (blocking 99.9% of UVA and UVB rays), CE certification for European markets, FDA compliance for the United States, and ANSI Z80.3 standards. We also offer EN ISO 12312-1 certification upon request.',
  },
  {
    question: 'Can you customize sunglasses with our brand logo and packaging?',
    answer: 'Absolutely. We offer comprehensive branding services including laser logo engraving on frames and lenses, custom printed or embossed cases, branded microfiber cleaning cloths, custom hang tags, barcode labels, and retail-ready packaging. Our design team can help create packaging that elevates your brand identity.',
  },
  {
    question: 'What types of lenses are available for wholesale orders?',
    answer: 'We offer a wide range of lens options including standard UV400 lenses, polarized lenses (TAC and glass), photochromic (transition) lenses, blue light blocking lenses, mirrored lenses, gradient lenses, and prescription-ready frames. Each lens type is available in multiple colors and coatings.',
  },
  {
    question: 'Do you ship internationally? What are the shipping options?',
    answer: 'Yes, we ship worldwide to over 60 countries. Shipping options include DHL Express (3-5 business days), FedEx (3-7 business days), UPS (5-8 business days), and sea freight (20-35 days for large orders). We handle all export documentation and can ship DDP (Delivered Duty Paid) or FOB as preferred.',
  },
  {
    question: 'How do I get started with a wholesale sunglasses order?',
    answer: 'Getting started is simple: 1) Contact us via email at jacky@eyeviewsunglasses.com or WhatsApp at +86-18850281211 with your requirements. 2) Our team will provide a detailed quote within 24 hours. 3) Review and approve samples. 4) Place your order and we handle the rest. We welcome both first-time buyers and established brands.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Trusted <span className="text-yellow-300">Wholesale Sunglasses Manufacturer</span> & OEM Factory
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              EyeView Sunglasses is a leading wholesale sunglasses manufacturer with over 15 years of experience in OEM and ODM production. We help brands, retailers, and distributors worldwide source premium custom sunglasses at competitive factory-direct prices. From classic aviators to trendy cat-eye frames, we manufacture every style with precision and quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact/" className="inline-block bg-yellow-400 text-primary-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors">
                🕶️ Get a Free Quote
              </Link>
              <Link href="/products/" className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary-700 transition-colors">
                View Products →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="bg-white py-12 px-4 border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="text-4xl mb-2 block">{stat.emoji}</span>
                <div className="text-3xl md:text-4xl font-bold text-primary-700">{stat.number}</div>
                <div className="text-gray-500 font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose EyeView as Your Sunglasses Manufacturer?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              As an established wholesale sunglasses factory, we combine manufacturing expertise, quality materials, and competitive pricing to deliver exceptional value for your brand.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <span className="text-4xl mb-4 block">{feature.emoji}</span>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Wholesale Sunglasses Product Range</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Explore our extensive collection of wholesale sunglasses styles. Each category is fully customizable with your branding, lens options, and frame modifications.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="bg-white rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 border group"
              >
                <span className="text-5xl mb-4 block text-center">{product.emoji}</span>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600 transition-colors">{product.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                <span className="inline-block mt-4 text-primary-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Order Wholesale Sunglasses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our simple 5-step process makes ordering custom wholesale sunglasses easy and stress-free, from initial inquiry to doorstep delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={step.step} className="text-center relative">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} title="Wholesale Sunglasses FAQ" />

      {/* CTA */}
      <CTASection />
    </>
  );
}
