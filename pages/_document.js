import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="" />
        <meta name="keywords" content="نادي هندسة البرمجيات, جامعة الامير مقرن,هندسة,هندسة البرمجيات,software development,sdlc, software engineering,club, نادي طلابي, نادي" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="SE Club | المساعد الرمضاني" />
        <meta property="og:description" content="" />
        <meta property="og:url" content="https://ramadan.seclub.io" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="المساعد الرمضاني" />
        <meta name="twitter:site" content="@SEclub_upm" />
        <meta name="twitter:domain" content="https://ramadan.seclub.io" />
        <meta name="twitter:description" content="" />
        

        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        {/* <link rel="manifest" href="/site.webmanifest"></link> */}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZMS2W0ENX1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ZMS2W0ENX1');
          `}
        </Script>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
