import { sitename, fbAppId, telephone } from "@libs/app"
import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Footer() {
  const [facebookUrl, setFbURL] = useState(`https://www.facebook.com/raonagos`)

  useEffect(() => {
    if (navigator.userAgent.match("Android|iPhone|iPad")) setFbURL(`fb://profile/${fbAppId}`)
  }, [])

  const { pathname } = useRouter()
  const match = pathname.match(/^(\/terms|\/privacy)$/)

  return (
    <footer className={`full-bleed ${match ? "bg-gray-200" : "bg-primary-100 text-white"} py-4 lg:py-12 px-4 lg:px-20`}>
      <div className="flex flex-col justify-evenly lg:flex-row gap-y-8">
        <div>
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center">
              <h3 className="text-xl font-bold">Horaires publics</h3>
            </div>
            <span>Lundi à Jeudi - 09 : 00 - 14 : 00</span>
            <span>Vendredi - 09 : 00 - 12 : 00</span>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center">
              <h3 className="text-xl font-bold">Information</h3>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
              <span className="ml-2">Tahiti, Paea</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                <path
                  fillRule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                />
              </svg>
              <span className="ml-2">
                <a href={`tel:${telephone}`}>{telephone}</a>
              </span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
              </svg>
              <span className="ml-2">
                <a href="mailto:contact@rao-nagos.pf?subject=renseignement">contact@rao-nagos.pf</a>
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center">
              <h3 className="text-xl font-bold">Nous suivre</h3>
            </div>
            <a href={facebookUrl} className="flex items-center" target={facebookUrl.startsWith("https") ? "_blank" : ""} rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
              <span className="ml-2">/raonagos</span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center lg:flex-row gap-x-6 gap-y-2 text-sm mt-12">
        <p>© 2020 - 2022 {sitename} - Agence digitale</p>
        <p>
          <Link href="/terms">Mentions légales</Link>
        </p>
        <p>
          <Link href="/privacy">Politiques de confidentialité</Link>
        </p>
      </div>
    </footer>
  )
}
