import type { NextPage } from "next"
import Head from "next/head"

const title = " | MyDashboard"

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="robots" content="noindex" />
      </Head>
    </>
  )
}

export default Page
