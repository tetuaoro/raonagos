import Image from "next/image"

import w1 from "@images/w-1.webp"
import w2 from "@images/w-2.webp"
import w4 from "@images/w-4.webp"

export default function Component() {
  return (
    <section id="works">
      <div className="flex justify-center lg:block">
        <h2>Nos oeuvres</h2>
      </div>
      <div className="work-items">
        <div className="flex flex-col">
          <div className="overlay-image">
            <Image src={w1} />
            <div>
              <h3 className="poppins poppins-700 text-2xl">Rao bot</h3>
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
            <Image src={w4} />
            <div>
              <h3 className="poppins poppins-700 text-2xl">Rao mail server</h3>
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
          <Image src={w2} height={594} />
          <div>
            <h3 className="poppins poppins-700 text-2xl">Rao web</h3>
            <p className="text-center p-4">
              {"Quatrième site web de l'agence : "}
              <i>rapide</i>
              {" et disponible hors-ligne. "}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
