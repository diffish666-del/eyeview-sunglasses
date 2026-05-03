'use client'

import Script from 'next/script'

export default function GoogleAnalytics() {
  return (
    <>
      {/* Initialize dataLayer immediately to prevent GTM warnings */}
      <Script id="gtag-init" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
        `}
      </Script>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KRHSELPZYC"
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          gtag('js', new Date());
          gtag('config', 'G-KRHSELPZYC', {
            send_page_view: false
          });
        `}
      </Script>
    </>
  )
}
