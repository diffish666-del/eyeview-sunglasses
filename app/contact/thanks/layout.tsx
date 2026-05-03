import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thank You | EyeView Sunglasses',
  description: "Thank you for contacting EyeView Sunglasses. We'll respond within 24 hours.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function ThanksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
