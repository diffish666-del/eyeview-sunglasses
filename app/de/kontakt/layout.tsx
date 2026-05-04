import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/de/kontakt',
    languages: {
      'en': 'https://eyeviewsunglasses.com/contact',
      'de': 'https://eyeviewsunglasses.com/de/kontakt',
    },
  },
}

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
