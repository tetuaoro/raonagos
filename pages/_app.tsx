import Header from "@components/header"
import "@styles/globals.css"
import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <Header />
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
