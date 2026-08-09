import type { Metadata } from 'next'

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "EyeView Sunglasses Factory",
  "description": "Fabricante líder de gafas de sol al por mayor que ofrece gafas de sol OEM y ODM personalizadas con más de 15 años de experiencia.",
  "url": "https://eyeviewsunglasses.com/es/",
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
  "url": "https://eyeviewsunglasses.com/es/",
  "description": "Fabricante líder de gafas de sol al por mayor que ofrece gafas de sol OEM y ODM personalizadas con más de 15 años de experiencia. Más de 500 clientes globales.",
  "inLanguage": "es",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://eyeviewsunglasses.com/es/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "EyeView Sunglasses",
  "url": "https://eyeviewsunglasses.com/es/",
  "logo": "https://eyeviewsunglasses.com/logo.png",
  "description": "Fabricante líder de gafas de sol al por mayor con más de 15 años de experiencia en fabricación OEM y ODM.",
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
    "availableLanguage": ["English", "Spanish", "Chinese"]
  }
}

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
