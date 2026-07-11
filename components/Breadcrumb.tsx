import Link from 'next/link'

interface BreadcrumbItem {
  name: string
  href?: string
}

export default function Breadcrumb({ items, baseUrl = 'https://eyeviewsunglasses.com' }: { items: BreadcrumbItem[]; baseUrl?: string }) {
  // Generate JSON-LD BreadcrumbList structured data (Google requirement)
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.href ? `${baseUrl}${item.href}` : undefined,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <nav className="mb-8 text-sm text-gray-500" aria-label="Breadcrumb">
        {items.map((item, index) => (
          <span key={index}>
            {index > 0 && <span className="mx-2">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-primary-600">{item.name}</Link>
            ) : (
              <span className="text-gray-900 font-medium">{item.name}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  )
}
