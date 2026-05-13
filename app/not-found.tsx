import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center py-20">
      <div className="max-w-2xl mx-auto px-4 text-center">
        {/* Big sunglasses emoji */}
        <div className="text-8xl mb-6">🕶️</div>

        {/* 404 number */}
        <h1 className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent mb-4">
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Looks like you lost your shades
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. 
          Don&apos;t worry — we&apos;ll help you find your way back.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/blog"
            className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            Read Our Blog
          </Link>
          <Link
            href="/contact"
            className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Helpful links */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Popular pages you might be looking for:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/oem-sunglasses" className="text-sm text-primary-600 hover:underline">OEM Sunglasses</Link>
            <span className="text-gray-300">•</span>
            <Link href="/odm-sunglasses" className="text-sm text-primary-600 hover:underline">ODM Sunglasses</Link>
            <span className="text-gray-300">•</span>
            <Link href="/blog/start-sunglasses-brand" className="text-sm text-primary-600 hover:underline">Start a Brand</Link>
            <span className="text-gray-300">•</span>
            <Link href="/about" className="text-sm text-primary-600 hover:underline">About Us</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
