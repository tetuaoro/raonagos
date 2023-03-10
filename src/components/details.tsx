export default function Component() {
  return (
    <section id="details">
      <div className="py-8 lg:py-16 grid grid-cols-1 lg:grid-cols-3 gap-y-12 full-bleed bg-black text-white text-center">
        <div className="observer">
          <span className="block text-4xl font-bold">12+</span>
          <span className="text-xl">Bot vendu</span>
        </div>
        <div className="observer">
          <span className="block text-4xl font-bold">2+</span>
          <span className="text-xl">Serveur de messagerie installé</span>
        </div>
        <div className="observer">
          <span className="block text-4xl font-bold">4+</span>
          <span className="text-xl">Site web créé</span>
        </div>
      </div>
    </section>
  )
}
