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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
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
      </body>
    </html>
  );
}
