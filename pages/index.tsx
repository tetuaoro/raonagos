import Head from "next/head"
import { useEffect } from "react"
import { siteurl, sitename, fbAppId } from "@libs/app"
import Whoweare from "@components/whoweare"
import Whatwedo from "@components/whatwedo"
import Prices from "@components/prices"

import type { NextPage } from "next"

const title = `${sitename} - Créateur de site web, de bot de trading et de serveur de messagerie`
const description =
  "Rao nagos est une agence numérique qui créée à ta place des sites web personnalisés, des robots de trading uniques et des serveurs de messagerie performants. On est spécialisé dans la création d'un produit final avec une grande expérience utilisateur, un design propre et des fonctionnalités riches."

const Page: NextPage = () => {
  useEffect(() => {
    const show: IntersectionObserverCallback = (e) => {
      e.forEach((element) => {
        if (element.isIntersecting) {
          const target = element.target as HTMLElement
          target.classList.add("show")
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
        <script type="application/ld+json">{JSON.stringify({})}</script>
      </Head>
      <Whoweare />
      <Whatwedo />
      <Prices />
    </>
  )
}

export default Page
