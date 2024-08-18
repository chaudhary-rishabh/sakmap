import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive" />
        {/* General Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Your Teaching Partner with latest tech courses by experts" />
        <meta name="keywords" content="Sakmap, Courses, Artificial Intelligence, Environment" />
        <meta name="author" content="Agardeep" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="Your-Google-Site-Verification-Token" />

        {/* Open Graph for Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sakmap" />
        <meta property="og:description" content="Your Teaching Partner with latest tech courses by experts" />
        <meta property="og:image" content="/sakmaplogo.png" />
        <meta property="og:url" content="https://sakmap.com" />
        <meta property="og:site_name" content="SAKMAP" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card for Social Media */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sakmap" />
        <meta name="twitter:description" content="Your Teaching Partner with latest tech courses by experts" />
        <meta name="twitter:image" content="/sakmaplogo.png" />
        <meta name="twitter:site" content="@YourTwitterHandle" />
        <meta name="twitter:creator" content="@YourTwitterHandle" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Additional SEO enhancements */}
        <link rel="canonical" href="https://sakmap.com" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
