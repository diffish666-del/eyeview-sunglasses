import type { Metadata } from 'next'

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "EyeView Sunglasses Factory",
  "description": "Produttore leader di occhiali da sole all'ingrosso che offre occhiali da sole OEM e ODM personalizzati con oltre 15 anni di esperienza.",
  "url": "https://eyeviewsunglasses.com/it",
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
  "url": "https://eyeviewsunglasses.com/it",
  "description": "Produttore leader di occhiali da sole all'ingrosso che offre occhiali da sole OEM e ODM personalizzati con oltre 15 anni di esperienza. Oltre 500 clienti in tutto il mondo.",
  "inLanguage": "it",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://eyeviewsunglasses.com/it/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "EyeView Sunglasses",
  "url": "https://eyeviewsunglasses.com/it",
  "logo": "https://eyeviewsunglasses.com/logo.png",
  "description": "Produttore leader di occhiali da sole all'ingrosso con oltre 15 anni di esperienza nella produzione OEM e ODM.",
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
    "availableLanguage": ["English", "Italian", "Chinese"]
  }
}

export const metadata: Metadata = {
  openGraph: {
    locale: 'it_IT',
  },
}

export default function ItLayout({
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
