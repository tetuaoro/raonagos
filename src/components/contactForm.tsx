export default function Component() {
  return (
    <section id="details">
      <div className="text-center">
        <h2>Nous contacter</h2>
      </div>
      <div className="flex flex-col items-center">
        <form className="form">
          <input type="text" placeholder="Nom complet" name="fullname" required />
          <input type="tel" pattern="^(40|87|89)([0-9]{6})$" placeholder="Téléphone" name="telephone" />
          <input type="email" placeholder="Email" name="email" required />
          <textarea rows={4} name="message" placeholder="Message"></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </section>
  )
}
