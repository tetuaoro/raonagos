import { Html, Head, Main, NextScript } from "next/document"

import type { CSSProperties } from "react"

const Document = () => {
  return (
    <Html lang="fr">
      <Head>
        <meta name="theme-color" content="#00abf3" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#00abf3" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="icon" type="image/x-icon" href="/icons/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700|Poppins:400,700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <BlurBottomPage />
        <NextScript />
      </body>
    </Html>
  )
}

const BlurBottomPage = () => {
  const style: CSSProperties = {
    width: "100%",
    height: "4%",
    position: "fixed",
    bottom: 0,
    zIndex: 998,
    backdropFilter: "blur(1px)"
  }

  return (
    <>
      <div style={style}></div>
    </>
  )
}

export default Document
