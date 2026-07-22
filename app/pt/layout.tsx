import type { Metadata } from 'next'

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "EyeView Sunglasses Factory",
  "description": "Fabricante líder de óculos de sol no atacado, oferecendo óculos de sol OEM e ODM personalizados com mais de 15 anos de experiência.",
  "url": "https://eyeviewsunglasses.com/pt",
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
  "url": "https://eyeviewsunglasses.com/pt",
  "description": "Fabricante líder de óculos de sol no atacado, oferecendo óculos de sol OEM e ODM personalizados com mais de 15 anos de experiência. Mais de 500 clientes globais.",
  "inLanguage": "pt",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://eyeviewsunglasses.com/pt/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "EyeView Sunglasses",
  "url": "https://eyeviewsunglasses.com/pt",
  "logo": "https://eyeviewsunglasses.com/logo.png",
  "description": "Fabricante líder de óculos de sol no atacado com mais de 15 anos de experiência em fabricação OEM e ODM.",
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
    "availableLanguage": ["English", "Portuguese", "Chinese"]
  }
}

export const metadata: Metadata = {
  openGraph: {
    locale: 'pt_BR',
  },
}

export default function PtLayout({
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
