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
      "email": "jacky@eyeviewsunglasses.com",
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

export function ProductSchema({ product }: { product: { name: string; description: string; minPrice: string; maxPrice: string } }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "EyeView"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "minPrice": product.minPrice,
      "maxPrice": product.maxPrice,
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "EyeView Sunglasses"
      }
    }
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
      "@id": "https://eyeviewsunglasses.com/blog"
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

export function BreadcrumbListSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
