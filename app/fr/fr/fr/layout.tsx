import type { Metadata } from 'next'

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "EyeView Sunglasses Factory",
  "description": "Fabricant leader de lunettes de soleil en gros proposant des lunettes de soleil OEM et ODM personnalisées avec plus de 15 ans d'expérience.",
  "url": "https://eyeviewsunglasses.com/fr/",
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
  "url": "https://eyeviewsunglasses.com/fr/",
  "description": "Fabricant leader de lunettes de soleil en gros proposant des lunettes de soleil OEM et ODM personnalisées avec plus de 15 ans d'expérience. Plus de 500 clients dans le monde.",
  "inLanguage": "fr",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://eyeviewsunglasses.com/fr/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "EyeView Sunglasses",
  "url": "https://eyeviewsunglasses.com/fr/",
  "logo": "https://eyeviewsunglasses.com/logo.png",
  "description": "Fabricant leader de lunettes de soleil en gros avec plus de 15 ans d'expérience en fabrication OEM et ODM.",
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
    "availableLanguage": ["English", "French", "Chinese"]
  }
}

export const metadata: Metadata = {
  openGraph: {
    locale: 'fr_FR',
  },
}

export default function FrLayout({
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
