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
        <meta
          name="description"
          content="La page de politique de confidentialité de Rao Nagos explique comment l'agence traite les données personnelles de ses utilisateurs et visiteurs, ainsi que les droits de chacun concernant ces données."
        />
      </Head>
      <Privacy />
    </>
  )
}

export default Page
