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

export function ProductSchema({ product }: { product: { name: string; description: string; minPrice: string; maxPrice: string; currency?: string; moq?: string; category?: string; material?: string; image?: string } }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    ...(product.category ? { "category": product.category } : {}),
    ...(product.material ? { "material": product.material } : {}),
    ...(product.image ? { "image": product.image } : {}),
    "brand": {
      "@type": "Brand",
      "name": "EyeView"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "EyeView Sunglasses"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": product.currency || "USD",
      "lowPrice": product.minPrice,
      "highPrice": product.maxPrice,
      "availability": "https://schema.org/InStock",
      "eligibleQuantity": {
        "@type": "QuantitativeValue",
        "value": product.moq || "50",
        "unitCode": "C62"
      },
      "seller": {
        "@type": "Organization",
        "name": "EyeView Sunglasses",
        "url": "https://eyeviewsunglasses.com"
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": ["US", "GB", "DE", "FR", "ES", "IT", "PT", "AU", "CA", "JP", "KR"]
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": { "@type": "QuantitativeValue", "minValue": 5, "maxValue": 15, "unitCode": "DAY" },
          "transitTime": { "@type": "QuantitativeValue", "minValue": 5, "maxValue": 30, "unitCode": "DAY" }
        }
      }
    },
    ...(product.moq ? {
      "additionalProperty": {
        "@type": "PropertyValue",
        "name": "Minimum Order Quantity",
        "value": product.moq,
        "unitText": "pieces per style"
      }
    } : {})
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

/* ─── GEO-Optimized Schemas ─── */

/** Service Schema for B2B manufacturing services */
export function ServiceSchema({ services }: { services: { name: string; description: string; areaServed?: string[] }[] }) {
  const schemas = services.map(svc => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Organization",
      "name": "EyeView Sunglasses",
      "url": "https://eyeviewsunglasses.com"
    },
    "name": svc.name,
    "description": svc.description,
    ...(svc.areaServed ? {
      "areaServed": svc.areaServed.map(c => ({ "@type": "Country", "name": c }))
    } : {}),
    "serviceType": "Manufacturing",
    "termsOfService": "https://eyeviewsunglasses.com/terms/"
  }));

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
    </>
  )
}

/** Review schema aggregate for product pages */
export function AggregateReviewSchema({ itemName, ratingValue, reviewCount, bestRating }: {
  itemName: string;
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": itemName,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "reviewCount": reviewCount,
      "bestRating": bestRating || 5
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
