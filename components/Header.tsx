'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            🕶️ EyeView
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/products" className="text-gray-700 hover:text-primary-600 font-medium">Products</Link>
            <Link href="/certifications" className="text-gray-700 hover:text-primary-600 font-medium">Certifications</Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 font-medium">About</Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary-600 font-medium">Blog</Link>
            <Link href="/contact" className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 font-medium">Get Quote</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/products" className="block py-2 text-gray-700 hover:text-primary-600" onClick={() => setMobileOpen(false)}>Products</Link>
            <Link href="/certifications" className="block py-2 text-gray-700 hover:text-primary-600" onClick={() => setMobileOpen(false)}>Certifications</Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-primary-600" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/blog" className="block py-2 text-gray-700 hover:text-primary-600" onClick={() => setMobileOpen(false)}>Blog</Link>
            <Link href="/contact" className="block bg-primary-600 text-white px-4 py-2 rounded-lg text-center" onClick={() => setMobileOpen(false)}>Get Quote</Link>
          </div>
        )}
      </div>
    </header>
  )
}
