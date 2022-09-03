import { useState } from "react"
import Image from "next/image"
import { sitename } from "@libs/app"

import hero from "@images/hero_bg.webp"

import type { MouseEventHandler } from "react"

export default function Header() {
  const [menuToggle, setMenuToggle] = useState(false)
  const toggleMenu: MouseEventHandler = (e) => ((e.target as HTMLElement).nodeName === "A" ? setMenuToggle(false) : setMenuToggle(!menuToggle))

  return (
    <header className="poppins">
      <div className="hero">
        <Image src={hero} layout="fill" objectFit="cover" objectPosition="26%" priority alt="Rao nagos which build services" />
      </div>
      <div className="navbar">
        <div className="brand">{sitename}</div>
        <nav>
          <div className="toggle" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
          </div>
          <ul className={`menu${menuToggle ? " show" : ""}`}>
            <li className="menu-item">
              <a href="#whoweare" onClick={toggleMenu}>
                Qui on est ?
              </a>
            </li>
            <li className="menu-item">
              <a href="#whatwedo" onClick={toggleMenu}>
                {"Qu'est-ce qu'on fait ?"}
              </a>
            </li>
            <li className="menu-item">
              <a href="#prices" onClick={toggleMenu}>
                Et vos prix ?
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <section className="absolute top-0 w-full h-full flex flex-col justify-center text-white items-center text-center">
        <h1 className="poppins-700 text-7xl">AGENCE DIGITALE</h1>
        <p className="mt-8 md:mt-12">Ton créateur de site web, de bot de trading et de serveur de messagerie.</p>
      </section>
    </header>
  )
}
