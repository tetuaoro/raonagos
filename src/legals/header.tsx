import { sitename } from "@libs/app"
import Link from "next/link"

export default function Header() {
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
