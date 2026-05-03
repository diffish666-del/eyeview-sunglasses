import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">🕶️ EyeView</h3>
            <p className="text-sm">Premium OEM &amp; wholesale sunglasses manufacturer since 2006. Trusted by 500+ brands in 50+ countries.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products/aviator" className="hover:text-white">Aviator</Link></li>
              <li><Link href="/products/wayfarer" className="hover:text-white">Wayfarer</Link></li>
              <li><Link href="/products/cat-eye" className="hover:text-white">Cat Eye</Link></li>
              <li><Link href="/products/sport" className="hover:text-white">Sport</Link></li>
              <li><Link href="/products/round" className="hover:text-white">Round</Link></li>
              <li><Link href="/products/kids" className="hover:text-white">Kids</Link></li>
              <li><Link href="/products/polarized" className="hover:text-white">Polarized</Link></li>
              <li><Link href="/products/blue-light" className="hover:text-white">Blue Light</Link></li>
              <li><Link href="/products/eco-friendly" className="hover:text-white">Eco-Friendly</Link></li>
              <li><Link href="/products/acetate" className="hover:text-white">Acetate</Link></li>
              <li><Link href="/products/tr90" className="hover:text-white">TR90</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/certifications" className="hover:text-white">Certifications</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>📧 jacky@eyeviewsunglasses.com</li>
              <li>📱 WhatsApp: +86-18850281211</li>
              <li>⏰ Response within 24 hours</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} EyeView Sunglasses. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
