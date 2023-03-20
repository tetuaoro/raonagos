import { sitename } from "@libs/app"
import Link from "next/link"

import type { FC } from "react"

const Header: FC = () => {
  return (
    <header className="poppins">
      <div className="p-12">
        <div className="brand">
          <Link href="/">{sitename}</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
