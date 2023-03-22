import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="المساعد الرمضاني" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="../public/social.jpg" />
        <meta property="og:url" content="https://ramadan.seclub.io" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="المساعد الرمضاني" />
        <meta name="twitter:site" content="@SEclub_upm" />
        <meta name="twitter:domain" content="https://ramadan.seclub.io" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="../public/social.jpg" />

        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        {/* <link rel="manifest" href="/site.webmanifest"></link> */}

        {/* <!-- Google tag (gtag.js) --> */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZMS2W0ENX1"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-ZMS2W0ENX1');
        </script> */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Mirza:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
