'use client'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const pathMap: Record<string, string> = {
  '/': '/es/',
  '/products/': '/es/productos/',
  '/products/aviator/': '/es/productos/aviador/',
  '/products/wayfarer/': '/es/productos/wayfarer/',
  '/products/cat-eye/': '/es/productos/ojo-de-gato/',
  '/products/sport/': '/es/productos/deportivo/',
  '/products/round/': '/es/productos/redondo/',
  '/products/kids/': '/es/productos/ninos/',
  '/products/polarized/': '/es/productos/polarizado/',
  '/products/blue-light/': '/es/productos/luz-azul/',
  '/products/eco-friendly/': '/es/productos/ecologico/',
  '/products/acetate/': '/es/productos/acetato/',
  '/products/tr90/': '/es/productos/tr90/',
  '/about/': '/es/sobre-nosotros/',
  '/contact/': '/es/contacto/',
  '/certifications/': '/es/certificaciones/',
}

const reversePathMap: Record<string, string> = Object.fromEntries(
  Object.entries(pathMap).map(([en, es]) => [es, en])
)

function getAlternatePath(path: string): string {
  const normalized = path.endsWith('/') ? path : path + '/'
  const withoutSlash = path.endsWith('/') ? path.slice(0, -1) : path
  if (pathMap[normalized]) return pathMap[normalized]
  if (pathMap[withoutSlash]) return pathMap[withoutSlash]
  if (reversePathMap[normalized]) return reversePathMap[normalized]
  if (reversePathMap[withoutSlash]) return reversePathMap[withoutSlash]
  return path.startsWith('/es') ? '/' : '/es/'
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const isSpanish = pathname.startsWith('/es')
  const alternatePath = getAlternatePath(pathname)

  const nav = isSpanish
    ? {
        products: { label: 'Productos', href: '/es/productos' },
        certifications: { label: 'Certificaciones', href: '/es/certificaciones' },
        about: { label: 'Nosotros', href: '/es/sobre-nosotros' },
        blog: { label: 'Blog', href: '/blog' },
        contact: { label: 'Cotización', href: '/es/contacto' },
        home: '/es/',
      }
    : {
        products: { label: 'Products', href: '/products' },
        certifications: { label: 'Certifications', href: '/certifications' },
        about: { label: 'About', href: '/about' },
        blog: { label: 'Blog', href: '/blog' },
        contact: { label: 'Get Quote', href: '/contact' },
        home: '/',
      }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href={nav.home} className="text-2xl font-bold text-primary-600">
            🕶️ EyeView
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href={nav.products.href} className="text-gray-700 hover:text-primary-600 font-medium">{nav.products.label}</Link>
            <Link href={nav.certifications.href} className="text-gray-700 hover:text-primary-600 font-medium">{nav.certifications.label}</Link>
            <Link href={nav.about.href} className="text-gray-700 hover:text-primary-600 font-medium">{nav.about.label}</Link>
            <Link href={nav.blog.href} className="text-gray-700 hover:text-primary-600 font-medium">{nav.blog.label}</Link>
            <Link href={nav.contact.href} className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 font-medium">{nav.contact.label}</Link>
            {/* Language Switcher */}
            <Link
              href={alternatePath}
              className="text-sm text-gray-500 hover:text-primary-600 font-medium border-l border-gray-200 pl-4 ml-2"
              title={isSpanish ? 'Switch to English' : 'Cambiar a Español'}
            >
              {isSpanish ? '🇺🇸 EN' : '🇪🇸 ES'}
            </Link>
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
            <Link href={nav.products.href} className="block py-2 text-gray-700 hover:text-primary-600" onClick={() => setMobileOpen(false)}>{nav.products.label}</Link>
            <Link href={nav.certifications.href} className="block py-2 text-gray-700 hover:text-primary-600" onClick={() => setMobileOpen(false)}>{nav.certifications.label}</Link>
            <Link href={nav.about.href} className="block py-2 text-gray-700 hover:text-primary-600" onClick={() => setMobileOpen(false)}>{nav.about.label}</Link>
            <Link href={nav.blog.href} className="block py-2 text-gray-700 hover:text-primary-600" onClick={() => setMobileOpen(false)}>{nav.blog.label}</Link>
            <Link href={nav.contact.href} className="block bg-primary-600 text-white px-4 py-2 rounded-lg text-center" onClick={() => setMobileOpen(false)}>{nav.contact.label}</Link>
            <Link
              href={alternatePath}
              className="block py-2 text-gray-500 hover:text-primary-600 border-t border-gray-200 mt-2 pt-3"
              onClick={() => setMobileOpen(false)}
            >
              {isSpanish ? '🇺🇸 English' : '🇪🇸 Español'}
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
