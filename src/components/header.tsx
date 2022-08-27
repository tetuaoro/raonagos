import { sitename } from "@libs/app"

export default function Header() {
  return (
    <header className="md:sticky md:top-0 flex md:flex-col w-screen md:w-max md:h-screen p-4 bg-gray-800 whitespace-nowrap md:text-center text-white text-xl">
      <div className="md:text-4xl">{sitename}</div>
      <nav className="ml-4 md:ml-0">
        <ul className="flex gap-x-4 md:gap-x-0 md:flex-col md:mt-12">
          <li className="md:py-4 border-l border-l-gray-800 hover:border-l-cyan-500 hover:text-gray-300">
            <a href="#tarifs">Tarifs</a>
          </li>
          <li className="md:py-4 border-l border-l-gray-800 hover:border-l-cyan-500 hover:text-gray-300">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
