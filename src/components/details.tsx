import type { FC, CSSProperties } from "react"

const Component: FC = () => {
  // https://bennettfeely.com/clippy/
  const triangleTopDetails: CSSProperties = {
    width: "100%",
    height: "100px",
    clipPath: "polygon(23% 0, 0% 100%, 100% 100%)",
    marginBottom: "-1px",
  }

  // https://bennettfeely.com/clippy/
  const triangleBottomDetails: CSSProperties = {
    width: "100%",
    height: "100px",
    clipPath: "polygon(0 0, 84% 100%, 100% 0)",
    marginTop: "-1px",
  }

  return (
    <section id="details">
      <div className="full-bleed">
        <div className="bg-black" style={triangleTopDetails}></div>
        <div className="py-8 lg:py-16 grid grid-cols-1 lg:grid-cols-3 gap-y-12 bg-black text-white text-center">
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
        <div className="bg-black" style={triangleBottomDetails}></div>
      </div>
    </section>
  )
}

export default Component
