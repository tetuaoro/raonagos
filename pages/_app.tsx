import "@styles/globals.css"
import Header from "@components/header"
import LegalsHeader from "@legals/header"
import Footer from "@components/footer"
import { ParallaxProvider } from "react-scroll-parallax"
import { useRouter } from "next/router"

import type { AppProps } from "next/app"

const App = ({ Component, pageProps }: AppProps) => {
  const { pathname } = useRouter()
  const match = pathname.match(/^(\/terms|\/privacy)$/)

  return (
    <ParallaxProvider>
      {match && <LegalsHeader />}
      {!match && <Header />}
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </ParallaxProvider>
  )
}

export default App
