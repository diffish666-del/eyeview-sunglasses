import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/pt/contato',
    languages: {
      'en': 'https://eyeviewsunglasses.com/contact',
      'pt': 'https://eyeviewsunglasses.com/pt/contato',
    },
  },
}

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
