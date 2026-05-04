import type { Metadata } from 'next'

export const metadata: Metadata = {
  openGraph: {
    locale: 'it_IT',
  },
}

export default function ItLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
