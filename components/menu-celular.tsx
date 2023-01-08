import Link from "next/link"

export default function MenuCelular({menuAberto, aoFechar}) {
  const className = 
    menuAberto 
    ? "inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
    : "hidden inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
  return (

  <div id="mobile-menu" className={className}>
    <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
      <div className="px-5 pt-5 pb-6">
        <div className="flex items-center justify-between">
          <div>
            <img className="h-8 w-auto" src="./dist/img/logo_junta.png" alt="Regulus" />
          </div>
          <div className="-mr-2">
            <button id="menu-close" type="button" onClick={aoFechar}
              className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Close menu</span>
              {/* <!-- Heroicon name: outline/x-mark --> */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

            </button>
          </div>
        </div>
        <div className="mt-6">
          <nav className="grid gap-y-8">
            <Link href="/turmas" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
              {/* <!-- Heroicon name: outline/calendar --> */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
</svg>


              <span className="ml-3 text-base font-medium text-gray-900">Cursos</span>
            </Link>

            <Link href="#livraria" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
              {/* <!-- Heroicon name: outline/book-open --> */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
</svg>

              <span className="ml-3 text-base font-medium text-gray-900">Livraria</span>
            </Link>

            <Link href="#formacao" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
              {/* <!-- Heroicon name: outline/academic-cap --> */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
</svg>

              <span className="ml-3 text-base font-medium text-gray-900">Formação</span>
            </Link>

            <Link href="#" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
              {/* <!-- Heroicon name: outline/information-circle --> */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
</svg>

              <span className="ml-3 text-base font-medium text-gray-900">Sobre</span>
            </Link>

            <Link href="#" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
              {/* <!-- Heroicon name: outline/envelope --> */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>

              <span className="ml-3 text-base font-medium text-gray-900">Contato</span>
            </Link>
          </nav>
        </div>
      </div>
      <div className="space-y-6 py-6 px-5">
        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
          <Link href="https://www.regulus.com.br/softwares/pegasus.htm" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-gray-900 hover:text-gray-700">Software</Link>

          <Link href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Professores</Link>

          <Link href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Serviços</Link>

          {/* <!-- <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Acesso aluno</a> --> */}
        </div>
        <div>
          <p className="mt-6 text-center text-base font-medium text-gray-500">
            Já é aluno?
            <Link href="https://www.regulus.com.br/moodle" target="_blank" rel="noopener noreferrer" className="text-blue-regulus hover:text-indigo-500">Acesse a plataforma</Link>
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}