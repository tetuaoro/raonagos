import Image from "next/image"

export default function Component() {
  return (
    <section id="whatwedo">
      <div className="flex flex-col md:flex-row">
        <Image className="rounded-lg" src="/images/man_coding.webp" width={1920} height={1280} />
        <div className="p-4">
            <h2>Que faites-vous ?</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam quas veritatis quae itaque distinctio. Numquam, ipsa porro? Incidunt, labore quibusdam dolores inventore enim rerum
            veritatis qui, doloremque praesentium amet modi!
          </p>
        </div>
      </div>
    </section>
  )
}
