import type { CSSProperties, FC } from "react"

const BlurBottom: FC = () => {
  const style: CSSProperties = {
    width: "100%",
    height: "4%",
    position: "fixed",
    bottom: 0,
    left: 0,
    zIndex: 998,
    backdropFilter: "blur(1px)",
  }

  return (
    <>
      <div style={style}></div>
    </>
  )
}

export default BlurBottom
