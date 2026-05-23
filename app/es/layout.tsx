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
    return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "EyeView Sunglasses Factory",
    "description": "Leading wholesale sunglasses manufacturer offering OEM & ODM custom sunglasses with 15+ years of experience.",
    "url": "https://eyeviewsunglasses.com/es",
    "telephone": "+86-18850281211",
    "email": "jacky@eyeviewsunglasses.com",
    "address": {
        "@type": "PostalAddress",
        "addressCountry": "CN"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "26.5988",
        "longitude": "110.3036"
    },
    "openingHours": "Mo-Fr 08:00-18:00",
    "priceRange": "$$",
    "image": "https://eyeviewsunglasses.com/logo.png"
}) }
      />
      {children}
    </>
  )
}
