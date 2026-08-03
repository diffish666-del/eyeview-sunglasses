import type { Metadata } from 'next'

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "EyeView Sunglasses Factory",
  "description": "Führender Großhandelshersteller von Sonnenbrillen mit maßgeschneiderten OEM- und ODM-Sonnenbrillen und über 15 Jahren Erfahrung.",
  "url": "https://eyeviewsunglasses.com/de",
  "telephone": "+86-18850281211",
  "email": "sales@eyeviewsunglasses.com",
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
}

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "EyeView Sunglasses",
  "url": "https://eyeviewsunglasses.com/de",
  "description": "Führender Großhandelshersteller von Sonnenbrillen mit maßgeschneiderten OEM- und ODM-Sonnenbrillen und über 15 Jahren Erfahrung. Über 500 Kunden weltweit.",
  "inLanguage": "de",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://eyeviewsunglasses.com/de/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "EyeView Sunglasses",
  "url": "https://eyeviewsunglasses.com/de",
  "logo": "https://eyeviewsunglasses.com/logo.png",
  "description": "Führender Großhandelshersteller von Sonnenbrillen mit über 15 Jahren Erfahrung in der OEM- und ODM-Fertigung.",
  "email": "sales@eyeviewsunglasses.com",
  "telephone": "+86-18850281211",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "CN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+86-18850281211",
    "contactType": "sales",
    "availableLanguage": ["English", "German", "Chinese"]
  }
}

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
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      {children}
    </>
  )
}
