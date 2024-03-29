import { rcs, telephone } from "@libs/app"
import Link from "next/link"

import type { FC } from "react"

const Component: FC = () => {
  return (
    <div className="mx-8 md:mx-32 lg:mx-64 ">
      <h1 className="text-4xl">MENTIONS LÉGALES</h1>
      <p className="text-sm italic text-gray-500">mise à jour le 19 janvier 2023</p>
      <h2 className="text-xl font-semibold mt-24">ÉDITEUR</h2>
      <p className="pt-4">Le site est édité par Rao Nagos, petite entreprise, immatriculée au RCS de PAPEETE sous le numéro {rcs}.</p>
      <p className="pt-4">
        Téléphone&nbsp;:{" "}
        <a className="text-blue-500" href={`tel:${telephone}`}>
          {telephone}
        </a>
      </p>
      <p>
        E-mail&nbsp;:{" "}
        <a className="text-blue-500" href="mailto:contact@rao-nagos.pf?subject=terms">
          contact@rao-nagos.pf
        </a>
      </p>
      {/* ############ */}
      <h2 className="text-xl font-semibold mt-24">HÉBERGEUR</h2>
      <p className="pt-4">
        <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-blue-500">
          Vercel.com
        </a>
      </p>
      {/* ############ */}
      <h2 className="text-xl font-semibold mt-24">PROPRIÉTÉ INTELLECTUELLE</h2>
      <p className="pt-4">
        L&apos;ensemble du site, y compris sa structure et son contenu (textes, tableaux, graphiques, images, photographies, vidéos, sons, bases de données, applications et logiciels), est protégé par
        le droit d&apos;auteur et de propriété intellectuelle de l&apos;éditeur ou de ses fournisseurs et prestataires.
      </p>
      <p className="pt-4">L&apos;utilisation de son contenu sans le consentement de l&apos;éditeur est interdit.</p>
      {/* ############ */}
      <h2 className="text-xl font-semibold mt-24">DONNÉES PERSONNELLES</h2>
      <p className="pt-4">
        L&apos;éditeur s&apos;engage à mettre en oeuvre un traitement de vos données personnelles respectueux de votre vie privée et conforme à la législation française et européenne en vigueur.
      </p>
      <p className="pt-4">
        Plus d&apos;informations sur le traitement de vos données sont disponibles à cette adresse&nbsp;:{" "}
        <Link href="/privacy#data" className="text-blue-500">
          mes données
        </Link>
        .
      </p>
      <p className="pt-4">Vous reconnaissez en avoir pris connaissance préalablement à toute utilisation du site.</p>
      {/* ############ */}
      <h2 className="text-xl font-semibold mt-24">COOKIES</h2>
      <p className="pt-4">
        Plus d&apos;informations sur le fonctionnement et la procédure à suivre pour gérer les cookies sont disponibles à cette adresse&nbsp;:{" "}
        <Link className="text-blue-500" href="/privacy#cookies">
          mes cookies
        </Link>
        .
      </p>
    </div>
  )
}

export default Component
