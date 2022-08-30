import Header from "@components/header"
import "@styles/globals.css"
import type { AppProps } from "next/app"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}
