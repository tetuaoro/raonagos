import Image from "next/image"

import w1 from "@images/w-1.webp"
import w2 from "@images/w-2.webp"
import w4 from "@images/w-4.webp"
import { sitename } from "@libs/app"

export default function Component() {
  return (
    <section id="whatwedo">
      <div className="flex flex-col items-center lg:block mb-4">
        <h2>Nos oeuvres</h2>
        <p>{`Si tu cherches à renforcer ta présence sur la toile ou à maximiser ton temps sur les marchés mondiaux ou bien à envoyer des mails avec ton domaine en .pf de manière sécurisée, ${sitename} est ton agence avec ses 3 services :`}</p>
      </div>
      <div className="work-items">
        <div className="flex flex-col">
          <div className="overlay-image">
            <Image src={w1} placeholder="blur" alt="Man who lauched our trading bot" />
            <div>
              <span className="poppins poppins-700 text-2xl">Rao bot</span>
              <p className="text-center p-4">
                <span className="italic">Automate place order</span>
                {" sur les marchés boursiers tels que les "}
                <i>cryptomonnaies</i>
                {" ou le "}
                <i>CAC40</i>.
              </p>
            </div>
          </div>
          <div className="overlay-image">
            <Image src={w4} placeholder="blur" alt="An email which crossed our server" />
            <div>
              <span className="poppins poppins-700 text-2xl">Rao mail server</span>
              <p className="text-center p-4">
                {"Comptes utilisateurs "}
                <i>infinies</i>
                {" et "}
                <i>sécurisés</i>.
              </p>
            </div>
          </div>
        </div>
        <div className="overlay-image">
          <Image src={w2} height={594} placeholder="blur" alt="Our 4th website : chanson du fenua" />
          <div>
            <span className="poppins poppins-700 text-2xl">Rao web</span>
            <p className="text-center p-4">
              {"Quatrième site web de l'agence : "}
              <i>rapide</i>
              {" et disponible hors-ligne. "}
            </p>
          </div>
        </div>
      </div>
      <div className="cards">
        <div className="card">
          <span className="card-title">Rao web</span>
          <span className="card-indication">
            <i className="gray">40 000 XPF</i>
          </span>
          <p className="card-text">
            {`L'agence ${sitename}  est ton alliée dans la création d'application pour le web. Quel que soit ton type d'application, à usage professionnel ou personnel, on dispose des outils nécessaires pour répondre à tes attentes. Et ce, dès la phase de conception jusqu'à sa finalisation. Tous nos sites sont disponibles hors ligne et peuvent être installés sur ton ordinateur ou ton smartphone.`}
          </p>
        </div>
        <div className="card">
          <span className="card-title">Rao bot</span>
          <span className="card-indication">
            <i className="gray">jusqu'à 600 000 XPF</i>
          </span>
          <p className="card-text">
            {
              "Rao bot est un service avec lequel tu peux automatiser tes transactions. Depuis 2016, nous sommes au service des professionnels et des particuliers qui veulent tirer parti du marché des cryptomonnaies. On dispose de compétences en matière de trading automatique pour tous les types de stratégies, que ce soit à court ou à long terme, sur une journée ou même sur plusieurs mois."
            }
          </p>
        </div>
        <div className="card">
          <span className="card-title">3. Rao mail server</span>
          <span className="card-indication">
            <i className="gray">600 000 XPF</i>
          </span>
          <p className="card-text">
            {
              "La messagerie Rao est un service d'installation de messagerie efficace, sécurisé et fiable qui fournit une solution pour la livraison des messages de l'expéditeur aux destinataires. Il permet aux entreprises de simplifier leurs solutions de messagerie, offre un ensemble complet de fonctionnalités de gestion via API et en plus les comptes utilisateurs sont infinies."
            }
          </p>
        </div>
      </div>
    </section>
  )
}
