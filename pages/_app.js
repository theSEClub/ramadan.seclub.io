import '@/styles/globals.css'
import React from 'react'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>المساعد الرمضاني</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
