import type { Metadata } from 'next'

export const metadata: Metadata = {
  openGraph: {
    locale: 'es_ES',
  },
}

export default function EsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
