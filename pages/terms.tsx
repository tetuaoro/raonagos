import Head from "next/head"
import { sitename } from "@libs/app"
import Terms from "@legals/terms"

import type { NextPage } from "next"

const title = `${sitename} - Mentions légales`

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Terms />
    </>
  )
}

export default Page
