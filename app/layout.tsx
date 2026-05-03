import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://eyeviewsunglasses.com'),
  title: {
    default: 'Wholesale Sunglasses Manufacturer | OEM Custom Sunglasses Factory - EyeView',
    template: '%s | EyeView Sunglasses',
  },
  description: 'EyeView is a leading wholesale sunglasses manufacturer offering OEM & ODM custom sunglasses. 15+ years experience, 500+ global clients. Get a free quote today.',
  keywords: ['wholesale sunglasses', 'sunglasses manufacturer', 'OEM sunglasses', 'custom sunglasses factory', 'bulk sunglasses supplier'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://eyeviewsunglasses.com',
    siteName: 'EyeView Sunglasses',
    title: 'Wholesale Sunglasses Manufacturer | OEM Custom Sunglasses Factory - EyeView',
    description: 'EyeView is a leading wholesale sunglasses manufacturer offering OEM & ODM custom sunglasses. 15+ years experience, 500+ global clients.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://eyeviewsunglasses.com',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'EyeView Sunglasses',
  url: 'https://eyeviewsunglasses.com',
  logo: 'https://eyeviewsunglasses.com/logo.png',
  description: 'Leading wholesale sunglasses manufacturer offering OEM & ODM custom sunglasses with 15+ years of experience.',
  email: 'jacky@eyeviewsunglasses.com',
  telephone: '+86-18850281211',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'CN',
  },
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+86-18850281211',
    contactType: 'sales',
    availableLanguage: ['English', 'Chinese'],
  },
};

// Critical CSS for above-the-fold content (hero section)
const criticalCss = `
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
.bg-gradient-to-br{background:linear-gradient(135deg,#1e3a5f,#2563eb,#3b82f6)}
.text-yellow-300{color:#fde047}
.text-blue-100{color:#dbeafe}
.max-w-4xl{max-width:56rem}
.mx-auto{margin-left:auto;margin-right:auto}
.text-center{text-align:center}
.text-4xl{font-size:2.25rem;line-height:2.5rem}
.font-bold{font-weight:700}
.mb-6{margin-bottom:1.5rem}
.leading-tight{line-height:1.25}
.text-lg{font-size:1.125rem;line-height:1.75rem}
.mb-8{margin-bottom:2rem}
.leading-relaxed{line-height:1.625}
.flex{display:flex}
.flex-col{flex-direction:column}
.gap-4{gap:1rem}
.justify-center{justify-content:center}
.bg-yellow-400{background-color:#facc15}
.text-primary-900{color:#1e3a5f}
.px-8{padding-left:2rem;padding-right:2rem}
.py-4{padding-top:1rem;padding-bottom:1rem}
.rounded-lg{border-radius:0.5rem}
.transition-colors{transition-property:color,background-color}
.hover\:bg-yellow-300:hover{background-color:#fde047}
.border-2{border-width:2px}
.border-white{border-color:white}
.hover\:bg-white:hover{background-color:white}
.hover\:text-primary-700:hover{color:#1e40af}
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <style dangerouslySetInnerHTML={{ __html: criticalCss }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <Header />
        <main>{children}</main>
        <Footer />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                  navigator.serviceWorker.register('/sw.js')
                    .then(reg => console.log('SW registered:', reg.scope))
                    .catch(err => console.log('SW registration failed:', err));
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
