import Turma from "../components/turma";

export default function Turmas() {
  return (<>
    {/* <!-- Banner --> */}
    <div id="banner" className="bg-blue-800 mx-auto max-w-full px-4 py-10">
      <div className="sm:mx-36 sm:pb-24">
        <h2>
          <span className="text-blue-600 uppercase font-roboto text-3xl sm:text-4xl font-bold">Escolha o melhor para você</span>
          <br />
          <span className="text-blue-100 text-5xl sm:text-6xl font-roboto font-bold">nossos cursos.</span>
        </h2>
      </div>
    </div>
     {/* <!-- Turmas --> */}
     <div id="turmas" className="px-2 text-white mt-5 space-y-2">
       <Turma
          titulo="ProLuNa" 
          subtitulo="Previsão pelas idades do homem" 
          inicio="01 de Novembro"
          horario="19h30 - 21h30"
          duracao="1 mês - aulas semanais de 2 horas"
          valor="R$ 341,00 por mês" />
       <div className="bg-blue-600 p-2 flex flex-col">
         <h2 className="font-roboto text-2xl font-bold">ProLuNa</h2>
         <p className="font-roboto text-base">Previsão pelas idades do homem</p>
         <div className="mt-8">
           <p><span className="font-bold">Início:</span> 01 de Novembro</p>
           <p><span className="font-bold">Horário:</span> 19h30 - 21h30</p>
           <p><span className="font-bold">Duração:</span> 1 mês - aulas semanais de 2 horas</p>
           <p><span className="font-bold">Valor:</span> R$ 341,00 por mês</p>
         </div>
         <p className="ml-auto text-blue-400">+ mais informações</p> 
       </div>
     </div>
     {/* <!-- Turmas --> */}
     {/* <!-- Painel FAQ --> */}
    <div id="faq" className="mx-auto max-w-full px-4 py-10">
      <div className="sm:mx-36 sm:pb-24 relative">
        <h2>
          <span className="text-blue-600 uppercase font-roboto text-3xl sm:text-4xl font-bold">FAQ</span>
          <br />
          <span className="text-blue-800 text-5xl sm:text-6xl font-roboto font-bold">perguntas frequentes.</span>
        </h2>
      </div>
      <div className="sm:mx-36 space-y-2 mt-2">
        <details className="group" open>
          <summary
            className="text-blue-500 group-open:text-green-500 list-none flex items-center justify-between hover:cursor-pointer"
          >
          <p className="text-blue-regulus font-bold sm:max-w-xs">Os cursos estão sendo online ou presencial?</p>
            <span className="group-open:hidden">
              <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="2" width="2" height="16" transform="rotate(-90 0 2)" fill="#FF8038"/>
              </svg>              
            </span>
            <span className="hidden group-open:inline">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="7" width="2" height="16" fill="#FF8038"/>
                <rect y="9" width="2" height="16" transform="rotate(-90 0 9)" fill="#FF8038"/>
              </svg>              
            </span>
          </summary>
          <p className="text-sm">No momento as aulas são ao vivo, com transmissão direta, permitindo a interatividade dos alunos e professor. Não é aula pré gravada. 
  Estamos avaliando o interesse dos alunos e COVID para planejar novas turmas presenciais.</p>
        </details>
        <details className="group open:ring">
          <summary
            className="text-blue-500 group-open:text-green-500 list-none flex justify-between items-center hover:cursor-pointer"
          >
          <p className="text-blue-regulus font-bold sm:max-w-xs">Por onde são transmitidas as aulas?</p>
            <span className="group-open:hidden">
              <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="2" width="2" height="16" transform="rotate(-90 0 2)" fill="#FF8038"/>
              </svg>              
            </span>
            <span className="hidden group-open:inline">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="7" width="2" height="16" fill="#FF8038"/>
                <rect y="9" width="2" height="16" transform="rotate(-90 0 9)" fill="#FF8038"/>
              </svg>              
            </span>
          </summary>
          <p className="text-sm">Através do Zoom.</p>
        </details>
      </div>
    </div>
    {/* <!-- Painel FAQ --> */}
     </>
  )
}