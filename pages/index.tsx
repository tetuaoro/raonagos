import Head from "next/head"
import { useEffect } from "react"
import { siteurl, sitename, fbAppId, description } from "@libs/app"
import Organization from "@libs/schema"
import Whoweare from "@components/whoweare"
import Whatwedo from "@components/whatwedo"
import Prices from "@components/prices"
import Details from "@components/details"
import ContactForm from "@components/contactForm"

import type { NextPage } from "next"

const title = `${sitename} - Créateur de site web, de bot de trading et de serveur de messagerie`

const Page: NextPage = () => {
  useEffect(() => {
    const show: IntersectionObserverCallback = (e) => {
      e.forEach((element) => {
        const target = element.target as HTMLElement
        if (element.isIntersecting) {
          target.classList.add("show")
        } else {
          target.classList.remove("show")
        }
      })
    }
    const observer = new IntersectionObserver(show)
    document.querySelectorAll(".observer")?.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="fb:app_id" content={`${fbAppId}`} />
        <meta property="og:url" content={siteurl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${siteurl}/images/media_cover.webp`} />
        <meta property="og:image:alt" content={`Couverture social de ${sitename}`} />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="727" />
        <meta property="og:image:type" content="image/webp" />
        <script type="application/ld+json">{JSON.stringify(Organization)}</script>
      </Head>
      <Whoweare />
      <Whatwedo />
      <Prices />
      <Details />
      {/* <ContactForm /> */}
    </>
  )
}

export default Page
