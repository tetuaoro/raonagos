import { useState } from "react"
import { sitename } from "@libs/app"

import type { FormEventHandler, FC } from "react"

const Component: FC = () => {
  const [error, setError] = useState("")
  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    try {
      e.preventDefault()
      const formData = new FormData(e.currentTarget)
      let data: { [key: string]: string } = {}
      formData.forEach((value, key) => {
        data[key] = value.toString()
      })

      const response = await fetch("/api/send_message", {
        method: "POST",
        body: JSON.stringify(data),
      })

      if (response.status >= 400) {
        const { message } = await response.json()
        setError(message)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section id="contact">
      <div className="text-center">
        <h2 className="h2">Nous contacter</h2>
      </div>
      <div className="flex flex-col items-center">
        <form onSubmit={onSubmit} className="form">
          <input type="text" placeholder="Nom complet" name="fullname" required />
          <input type="tel" pattern="^(40|87|89)([0-9]{6})$" placeholder="Téléphone" name="phone" />
          <input type="email" placeholder="Email" name="email" required />
          <select placeholder="S'agit-il ?" defaultValue="information" name="subject" required>
            <option value="raoweb">Rao web</option>
            <option value="raobot">Rao bot</option>
            <option value="raomail">Rao mail</option>
            <option value="raomail">Rao mission</option>
            <option value="information">Information</option>
            <option value="others">Autres</option>
          </select>
          <textarea rows={4} name="message" placeholder="Message"></textarea>

          <div>
            <input className="max-w-max mr-4" id="accept" type="checkbox" required />
            <label htmlFor="accept">
              <small>{`J'accepte de partager mes informations avec ${sitename}.`}</small>
            </label>
          </div>
          <button type="submit">Envoyer</button>

          <div>{error.length > 0 && <span className="text-red-700">{error}</span>}</div>
        </form>
      </div>
    </section>
  )
}

export default Component
