import { useState } from "react";
import MenuCelular from "./menu-celular";

export default function Cabecalho() {
  const [menuAberto, atualizaMenu] = useState(false)
  return (
    <>
  <MenuCelular menuAberto={menuAberto} aoFechar={() => atualizaMenu(false)}/>
  <div className="flex items-center justify-between px-4 mt-7 mx-auto max-w-7xl">
    <h1 className="text-4xl font-lato uppercase"> Regulus </h1>
    <nav className="hidden sm:block">
      <ul className="flex space-x-4 font-toboto text-lg">
        <li><a href="./turmas.html">Cursos</a></li>
        <li><a href="#livraria">Livraria</a></li>
        <li><a href="#formacao">Formação</a></li>
        <li>Sobre</li>
        <li>Contato</li>
      </ul>
    </nav>
    <div className="-my-2 -mr-2 sm:hidden">
      <button type="button" id="menu-open"
        onClick={() => atualizaMenu(!menuAberto)}
        className="inline-flex items-center justify-center rounded-mdp-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        aria-expanded="false">
        <span className="sr-only">Open menu</span>
        {/* <!-- Heroicon name: outline/bars-3 --> */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

      </button>
    </div>
  </div>
  </>
  )
}