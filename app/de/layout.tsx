import type { Metadata } from 'next'

export const metadata: Metadata = {
  openGraph: {
    locale: 'de_DE',
  },
}

export default function DeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
