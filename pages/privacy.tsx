import Head from "next/head"
import { sitename } from "@libs/app"
import Privacy from "@legals/privacy"

import type { NextPage } from "next"

const title = `${sitename} - Politiques de confidentialité`

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Privacy />
    </>
  )
}

export default Page
