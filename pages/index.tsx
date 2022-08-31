import Head from "next/head"
import Footer from "@components/footer"
import { siteurl, sitename, fbAppId } from "@libs/app"
import Services from "@components/services"

import type { NextPage } from "next"

const title = `${sitename} - Créateur de site web, de bot de trading et de serveur de messagerie`
const description = ""

const Page: NextPage = () => {
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
        <meta property="og:image" content={`${siteurl}/images/`} />
        <meta property="og:image:alt" content={`Couverture media de ${sitename}`} />
        <meta property="og:image:width" content="" />
        <meta property="og:image:height" content="" />
        <meta property="og:image:type" content="image/png" />
        <script type="application/ld+json">{JSON.stringify({})}</script>
      </Head>
      <Services />
    </>
  )
}

export default Page
