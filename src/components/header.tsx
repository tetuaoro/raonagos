import { useState } from "react"
import Image from "next/image"

import logo from "@icons/logo.png"

import type { MouseEventHandler } from "react"
import { sitename } from "@libs/app"

export const ROUTES = [
  {
    id: "home",
    routeName: "Présentation",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hexagon-fill" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z" />
      </svg>
    ),
  },
  {
    id: "services",
    routeName: "Services",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-grid-fill" viewBox="0 0 16 16">
        <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
      </svg>
    ),
  },
  {
    id: "projets",
    routeName: "Projets",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-stack" viewBox="0 0 16 16">
        <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z" />
        <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z" />
      </svg>
    ),
  },
  {
    id: "tarifs",
    routeName: "Tarifs",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-exchange" viewBox="0 0 16 16">
        <path d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z" />
      </svg>
    ),
  },
  {
    id: "contact",
    routeName: "Contact",
  },
]

export default function Header() {
  const [menuToggle, setMenuToggle] = useState(false)
  const toggleMenu: MouseEventHandler = (e) => ((e.target as HTMLElement).nodeName === "A" ? setMenuToggle(false) : setMenuToggle(!menuToggle))

  return (
    <header className="poppins">
      <div className="hero">
        <Image src="/images/hero_bg.webp" layout="fill" objectFit="cover" objectPosition="26%" priority />
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
              <a href="#whoareyou" onClick={toggleMenu}>
                Qui sommes-nous ?
              </a>
            </li>
            <li className="menu-item">
              <a href="#" onClick={toggleMenu}>
                Hero 2
              </a>
            </li>
            <li className="menu-item">
              <a href="#" onClick={toggleMenu}>
                Hero 3
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <section className="absolute top-0 w-full h-full flex flex-col justify-center text-white items-center text-center">
        <h1 className="poppins-700 text-7xl">AGENCE DIGITALE</h1>
        <p className="mt-8 md:mt-12">Ton créateur de site web, de bot de trading et de serveur de messagerie !</p>
      </section>
    </header>
  )
}
