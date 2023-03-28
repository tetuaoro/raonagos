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
        <meta
          name="description"
          content="Les termes de Rao Nagos détaillent les règles applicables à l'utilisation des services proposés par l'agence, ainsi que les droits et responsabilités de chaque partie."
        />
      </Head>
      <Terms />
    </>
  )
}

export default Page
