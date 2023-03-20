import { useState } from "react"
import { useParallax } from "react-scroll-parallax"
import Image from "next/image"
import { sitename } from "@libs/app"

import hero from "@images/hero_bg.webp"

import type { MouseEventHandler, CSSProperties, FC } from "react"

const Header: FC = () => {
  const [menuToggle, setMenuToggle] = useState(false)
  const { ref } = useParallax<HTMLDivElement>({
    speed: -100,
  })
  const toggleMenu: MouseEventHandler = (e) => ((e.target as HTMLElement).nodeName === "A" ? setMenuToggle(false) : setMenuToggle(!menuToggle))
  const shadowMyText: CSSProperties = {
    textShadow: "0.1rem 0.1rem 0.8rem #00abf3",
  }
  const imageStyling: CSSProperties = {
    objectFit: "cover",
    objectPosition: "26%",
  }

  return (
    <header className="poppins">
      <div ref={ref} className="hero">
        <Image src={hero} fill style={imageStyling} priority alt="Rao nagos with services" />
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
                Qui sommes-nous ?
              </a>
            </li>
            <li className="menu-item">
              <a href="#whatwedo" onClick={toggleMenu}>
                Nos services
              </a>
            </li>
            <li className="menu-item">
              <a href="#prices" onClick={toggleMenu}>
                Nos tarifs
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <section className="absolute top-0 w-full h-full flex flex-col justify-center text-white items-center text-center">
        <h1 className="poppins-700 text-7xl" style={shadowMyText}>
          AGENCE DIGITALE
        </h1>
        <p className="mt-8 md:mt-12" style={shadowMyText}>
          {"Ton créateur de site web, d'automatisation de tâche et de serveur de messagerie."}
        </p>
      </section>
    </header>
  )
}

export default Header
