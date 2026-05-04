import type { Metadata } from 'next'

export const metadata: Metadata = {
  openGraph: {
    locale: 'pt_BR',
  },
}

export default function PtLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
