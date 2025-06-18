import Document, { Html, Head, Main, NextScript } from 'next/document'

// This custom Document is needed for setting the language direction to RTL (right-to-left)
// and adding Arabic font support
class MyDocument extends Document {
  render() {
    return (
      <Html lang="ar" dir="rtl">
        <Head>
          <meta charSet="utf-8" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-16x16.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-32x32.png" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#051937" />
          
          <link
            href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&family=Reem+Kufi:wght@400;500;600;700&family=Amiri:wght@400;700&display=swap"
            rel="stylesheet"
          />
          
          {/* Pre-connect to Google Maps domains */}
          <link rel="preconnect" href="https://maps.googleapis.com" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="anonymous" />
          <link rel="dns-prefetch" href="https://maps.googleapis.com" />
          <link rel="dns-prefetch" href="https://maps.gstatic.com" />
          
          {/* Meta tags for security and performance */}
          <meta name="referrer" content="strict-origin-when-cross-origin" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </Head>
        <body className="bg-gray-50 font-tajawal text-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument 