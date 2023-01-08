import Head from 'next/head'
import Cabecalho from '../components/cabecalho';
import Rodape from '../components/rodape';

export default function HomePage() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <title>Regulus | Escola de Astrologia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>
      <Cabecalho />
      <main className="mt-16 sm:mt-24">
    {/* <!-- Painel principal --> */}
    <div className="text-center mx-auto max-w-7xl px-4 pb-20">
      <p className="font-black font-roboto text-6xl tracking-tight">Estude Astrologia <span className="text-blue-regulus">de
          verdade</span></p>
      <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-2xl">Ensinando e
        formando astrólogos desde 1975. Formação completa em Astrologia, cursos básicos, intermediários e avançados.</p>
      <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
        <button
          className="shadow w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-regulus hover:bg-sky-900 md:py-4 md:text-lg md:px-10">Veja
          as turmas</button>
        <button
          className="sm:ml-3 shadow w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-regulus bg-white hover:bg-sky-200 md:py-4 md:text-lg md:px-10">Grade
          curricular</button>
      </div>
    </div>
    {/* <!-- Painel principal --> */}
    {/* <!-- Painel Livraria --> */}
    <div id="livraria" className="bg-blue-800 mx-auto max-w-full px-4 py-10">
      <div className="sm:mx-36 sm:pb-24">
        <h2>
          <span className="text-blue-600 uppercase font-roboto text-3xl sm:text-4xl font-bold">Livraria</span>
          <br />
          <span className="text-blue-100 text-5xl sm:text-6xl font-roboto font-bold">especializada e online.</span>
        </h2>
        <div className="grid grid-flow-row gap-5 sm:gap-0 sm:grid-cols-3 font-lato text-blue-100 mt-14 justify-between">
          <div className="sm:col-span-2 max-w-lg relative text-xl">
            <p>A Livraria da Regulus nasceu da necessidade de atender os alunos dos cursos de Astrologia.</p>
            <br />
            <p>Hoje a Livraria física possui um dos maiores acervos de títulos sobre Astrologia, incluído muitos títulos
              esgotados e raros.</p>
            <br />
            <div className="hidden sm:block font-roboto text-xl sm:text-2xl">
              <p>Informações sobre conteúdo da livraria</p>
              <ul>
                <li>Categorias</li>
                <li>Tarot</li>
                <li>Reimpressões</li>
                <li>Importados</li>
              </ul>
            </div>
            <a href="http://www.livrariadaregulus.com.br" target="_blank" rel='noreferrer noopener'>
            <button
              className="hidden sm:flex space-x-5 leading-tight text-lg mt-10 shadow items-center justify-center px-5 py-2.5 border border-transparent font-semibold rounded-md text-blue-regulus bg-white hover:bg-sky-200"><span>Ir
              para livraria</span>
              {/* <!-- Heroicon name: mini/arrow-top-right-on-square  --> */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clip-rule="evenodd" />
                <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clip-rule="evenodd" />
              </svg>
            </button>
          </a>
          </div>
          <div
            className="flex flex-row overflow-y-scroll sm:overflow-y-auto gap-5 sm:grid sm:grid-cols-2 sm:gap-10 sm:justify-items-end">
            <img className="w-32 sm:w-40" src="./dist/img/livraria_1.jpg" alt="" />
            <img className="w-32 sm:w-40" src="./dist/img/livraria_2.jpg" alt="" />
            <img className="w-32 sm:w-40" src="./dist/img/livraria_3.jpg" alt="" />
          </div>
          <a href="http://www.livrariadaregulus.com.br" target="_blank" rel='noreferrer noopener'>
            <button
              className="w-full relative sm:hidden leading-tight text-lg mt-10 shadow flex items-center justify-center px-5 py-2.5 border border-transparent font-semibold rounded-md text-blue-regulus bg-white hover:bg-sky-200"><span>Ir para livraria</span>
              <div className="absolute right-8">
                {/* <!-- Heroicon name: mini/arrow-top-right-on-square  --> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clip-rule="evenodd" />
                  <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clip-rule="evenodd" />
                </svg>
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
    {/* <!-- Painel Livraria --> */}
    {/* <!-- Painel Formação --> */}
    <div id="formacao" className="mx-auto max-w-full px-4 py-10">
      <div className="sm:mx-36 sm:pb-24 relative">
        <h2>
          <span className="text-blue-600 uppercase font-roboto text-3xl sm:text-4xl font-bold">Formação</span>
          <br />
          <span className="text-blue-800 text-5xl sm:text-6xl font-roboto font-bold">completa e livre.</span>
        </h2>
        <p className="mt-14 text-center sm:text-left font-roboto text-blue-800 text-xl sm:text-2xl max-w-md">Nossa grade
          curricular atende a CBO (Classificação Brasileira de Ocupações) e os currículos de referência de entidades
          nacionais e internacionais.</p>
        <div className="mt-5 sm:-mt-32 flex justify-center sm:justify-between items-end">
          <button
            className="w-full sm:w-auto max-h-10 shadow flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-regulus hover:bg-sky-900 md:py-4 md:text-lg md:px-10">Veja
            a grade</button>
          <img className="hidden sm:block max-w-2xl -z-50" src="./dist/img/undraw_road_to_knowledge.png" alt="" />
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center mt-10 sm:mt-20 space-y-5 sm:space-x-9">
          <p className="max-w-xl text-center sm:text-left font-roboto text-blue-800 text-xl sm:text-2xl">A ocupação
            “Astrólogo” é reconhecida pelo Ministério do Trabalho, e inclusive participamos da elaboração.</p>
          <button
            className="w-full sm:w-auto max-h-10 shadow flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-regulus hover:bg-sky-900 md:py-4 md:text-lg md:px-10">Saiba
            mais</button>
        </div>
      </div>
    </div>
    </main>
      <Rodape />
    </div>
  );
}