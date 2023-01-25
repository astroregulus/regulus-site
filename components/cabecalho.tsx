import { useState } from "react";
import { useRouter } from 'next/router';
import MenuCelular from "./menu-celular";
import Link from "next/link";

export default function Cabecalho() {
  const router = useRouter()
  const [menuAberto, atualizaMenu] = useState(false)
  return (
    <>
  <MenuCelular menuAberto={menuAberto} aoFechar={() => atualizaMenu(false)}/>
  <div className="flex items-center justify-between px-4 my-7 md:mx-36">
    <h1 className="text-4xl font-lato uppercase cursor-pointer" onClick={() => router.push('./')}> Regulus </h1>
    <nav className="hidden sm:block">
      <ul className="flex space-x-4 font-toboto text-lg">
        <li><Link href="/turmas">Cursos</Link></li>
        <li><Link href="#livraria">Livraria</Link></li>
        <li><Link href="#formacao">Formação</Link></li>
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