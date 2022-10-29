import "@styles/globals.css"
import Header from "@components/header"
import Footer from "@components/footer"
import { ParallaxProvider } from "react-scroll-parallax"

import type { AppProps } from "next/app"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </ParallaxProvider>
  )
}
