import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact EyeView | Get Free Quote & Samples for Custom Sunglasses',
  description: 'Contact EyeView Sunglasses for a free quote. We respond within 24 hours. WhatsApp: +86-18850281211. Email: jacky@eyeviewsunglasses.com. Samples in 3-5 days.',
  openGraph: {
    title: 'Contact EyeView | Get Free Quote & Samples for Custom Sunglasses',
    description: 'Contact EyeView Sunglasses for a free quote. We respond within 24 hours. WhatsApp: +86-18850281211. Email: jacky@eyeviewsunglasses.com. Samples in 3-5 days.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/contact',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
