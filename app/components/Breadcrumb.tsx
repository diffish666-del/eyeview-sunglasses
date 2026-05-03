import Link from 'next/link'

interface BreadcrumbItem {
  label?: string
  name?: string
  href?: string
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="mb-8 text-sm text-gray-500" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={index}>
          {index > 0 && <span className="mx-2">/</span>}
          {item.href ? (
            <Link href={item.href} className="hover:text-primary-600">{item.label || item.name}</Link>
          ) : (
            <span className="text-gray-900">{item.label || item.name}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
