import Head from "next/head"
import { useEffect, useState } from "react"
import { siteurl, sitename, fbAppId, description } from "@libs/app"
import Organization from "@libs/schema"
import Whoweare from "@components/whoweare"
import Whatwedo from "@components/whatwedo"
import Prices from "@components/prices"
import Details from "@components/details"
import ContactForm from "@components/contactForm"
import CookieConsent from "react-cookie-consent"

import type { NextPage } from "next"

const title = `${sitename} - Créateur de site web, d'automatisation de tâche et de serveur de messagerie`

const Page: NextPage = () => {
  const [showCookies, setShowCookies] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => {
      setShowCookies(true)
    }, 11000)

    return () => clearTimeout(id)
  }, [])

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
        <script key={"structured-data"} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(Organization) }} />
      </Head>
      <Whoweare />
      <Whatwedo />
      <Prices />
      <Details />
      <ContactForm />
      {showCookies && (
        <CookieConsent expires={90} cookieName="rao_nagos_acceptcgu" buttonText="Bien sûr" buttonStyle={{ color: "white", backgroundColor: "#00abf3", borderRadius: "15px" }}>
          {"En poursuivant votre navigation, vous acceptez les conditions d'utilisation."}
        </CookieConsent>
      )}
    </>
  )
}

export default Page
