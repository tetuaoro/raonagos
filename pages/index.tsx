import Head from "next/head"
import type { NextPage } from "next"

const title = "Template Rao Nagos"
const sitename = ""
const description = ""
const fbAppId = ""
const siteurl = ""

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
        <meta property="og:image:alt" content={`Le logo officiel de ${sitename}`} />
        <meta property="og:image:width" content="" />
        <meta property="og:image:height" content="" />
        <meta property="og:image:type" content="image/png" />
        <script type="application/ld+json">{JSON.stringify({})}</script>
      </Head>
      <section id="home">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </section>
    </>
  )
}

export default Page
