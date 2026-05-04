import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/es/contacto',
    languages: {
      'en': 'https://eyeviewsunglasses.com/contact',
      'es': 'https://eyeviewsunglasses.com/es/contacto',
    },
  },
}

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
