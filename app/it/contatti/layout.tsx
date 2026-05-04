import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contatta EyeView | Preventivo Gratuito e Campioni per Occhiali da Sole Personalizzati',
  description: 'Contatta EyeView Sunglasses per un preventivo gratuito. Rispondiamo entro 24 ore. WhatsApp: +86-18850281211. Email: jacky@eyeviewsunglasses.com. Campioni in 3-5 giorni.',
  openGraph: {
    title: 'Contatta EyeView | Preventivo Gratuito e Campioni per Occhiali da Sole Personalizzati',
    description: 'Contatta EyeView Sunglasses per un preventivo gratuito. Rispondiamo entro 24 ore. WhatsApp: +86-18850281211. Email: jacky@eyeviewsunglasses.com. Campioni in 3-5 giorni.',
    type: 'website',
    url: 'https://eyeviewsunglasses.com/it/contatti',
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com/it/contatti',
    languages: {
      'en': 'https://eyeviewsunglasses.com/contact',
      'it': 'https://eyeviewsunglasses.com/it/contatti',
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
