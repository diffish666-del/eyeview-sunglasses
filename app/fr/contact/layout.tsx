import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contactez EyeView | Devis Gratuit & Échantillons pour Lunettes Personnalisées',
  description: 'Contactez EyeView Sunglasses pour un devis gratuit. Réponse sous 24 heures. WhatsApp : +86-18850281211. Email : jacky@eyeviewsunglasses.com. Échantillons en 3-5 jours.',
  openGraph: {
    title: 'Contactez EyeView | Devis Gratuit & Échantillons pour Lunettes Personnalisées',
    description: 'Contactez EyeView Sunglasses pour un devis gratuit. Réponse sous 24 heures. WhatsApp : +86-18850281211. Email : jacky@eyeviewsunglasses.com. Échantillons en 3-5 jours.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/fr/contact',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/fr/contact',
    languages: {
      'en': 'https://eyeviewsunglasses.com/contact',
      'fr': 'https://eyeviewsunglasses.com/fr/contact',
    },
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
