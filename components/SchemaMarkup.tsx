// Schema Markup Components for SEO

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "EyeView Sunglasses",
    "url": "https://eyeviewsunglasses.com",
    "logo": "https://eyeviewsunglasses.com/logo.png",
    "description": "Leading OEM sunglasses manufacturer and wholesaler. Custom sunglasses with your logo. High quality, competitive prices, MOQ 100pcs.",
    "foundingDate": "2010",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "sales@eyeviewsunglasses.com",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://www.facebook.com/eyeviewsunglasses",
      "https://www.linkedin.com/company/eyeview-sunglasses",
      "https://www.instagram.com/eyeviewsunglasses"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ProductSchema({ product }: { product: {
  name: string
  description: string
  minPrice: string
  maxPrice: string
  currency?: string
  moq?: string
  category?: string
  material?: string
} }) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "EyeView"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "EyeView Sunglasses",
      "url": "https://eyeviewsunglasses.com"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": product.currency || "USD",
      "lowPrice": product.minPrice,
      "highPrice": product.maxPrice,
      "offerCount": "1",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "EyeView Sunglasses"
      },
      "eligibleQuantity": {
        "@type": "QuantitativeValue",
        "value": 100,
        "unitCode": "C62"
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": ["US", "GB", "DE", "FR", "AU", "CA", "JP", "KR", "BR", "MX"]
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": { "@type": "QuantitativeValue", "minValue": 3, "maxValue": 15, "unitCode": "DAY" },
          "transitTime": { "@type": "QuantitativeValue", "minValue": 7, "maxValue": 30, "unitCode": "DAY" }
        }
      }
    }
  }

  if (product.category) {
    schema["category"] = product.category
  }
  if (product.material) {
    schema["material"] = product.material
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BlogPostingSchema({ post }: { post: { headline: string; datePublished: string; description: string } }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.headline,
    "datePublished": post.datePublished,
    "dateModified": post.datePublished,
    "description": post.description,
    "author": {
      "@type": "Organization",
      "name": "EyeView Sunglasses",
      "url": "https://eyeviewsunglasses.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "EyeView Sunglasses",
      "logo": {
        "@type": "ImageObject",
        "url": "https://eyeviewsunglasses.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://eyeviewsunglasses.com/blog/"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQPageSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbListSchema({ items }: { items: { name: string; url?: string; item?: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": item.item || item.url,
      "name": item.name
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ServiceSchema({ services }: { services: { name: string; description: string; areaServed?: string[] }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.name,
        "description": service.description,
        ...(service.areaServed && { "areaServed": service.areaServed.map(area => ({ "@type": "Country", "name": area })) })
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
