import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="bg-primary-600 text-white rounded-2xl p-8 md:p-12 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Start Your Sunglasses Brand?</h2>
      <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
        Get your free quote today. No minimum consultation. Samples available within 5 days.
        We respond within 24 hours.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/contact" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
          Get Free Quote
        </Link>
        <Link href="/products" className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-700 transition-colors">
          View Products
        </Link>
      </div>
    </section>
  )
}
