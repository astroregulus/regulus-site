import { ReactNode, useState } from "react"

const ANO = 2
const MES = 1
const DIA = 0

const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

type Turma = {
  titulo: string
  subtitulo: string
  inicio: string
  data: string
  horario: string
  duracao: string
  valor: string
  children: ReactNode
}
export default function Turma(turma: Turma) {
  const [expandido, expande] = useState(false)
  let dataQuebrada: any[] = turma.data.split("/").map(x => parseInt(x))
  const data = new Date(Date.UTC(dataQuebrada[ANO], dataQuebrada[MES]-1, dataQuebrada[DIA], 0, 0, 0))
  return (
    <>
      <div className="bg-blue-600 p-2 flex flex-col sm:hidden">
         <h2 className="font-roboto text-2xl font-bold">{turma.titulo}</h2>
         <p className="font-roboto text-base">{turma.subtitulo}</p>
         {expandido && turma.children}
         <div className="mt-8">
           <p><span className="font-bold">Início:</span> {turma.inicio} das {turma.horario}</p>
           <p><span className="font-bold">Duração:</span> {turma.duracao} (aulas semanais)</p>
           <p><span className="font-bold">Valor:</span> {turma.valor}</p>
         </div>
         <p className="ml-auto text-blue-400 cursor-pointer" onClick={() => expande(!expandido)}>{expandido ? "- menos informações" : "+ mais informações"}</p> 
      </div>
      <div className=" hidden sm:flex flex-row bg-blue-600 p-4 mx-36">
        <div className="flex flex-col items-center justify-center ml-5 mr-7 text-2xl">
          <p>{data.getUTCDate().toString().padStart(2, '0')}</p>
          <p>{meses[data.getUTCMonth()]}</p>
        </div>
        <div className="flex flex-col">
          <h2 className="font-roboto text-3xl font-bold">{turma.titulo}</h2>
          <p className="font-roboto text-3xl">{turma.subtitulo}</p>
          {expandido && <div className="">{turma.children}</div>}
          <div className="mt-8">
            <p><span className="font-bold">Horário:</span> {turma.horario} (aulas semanais)</p>
            <p><span className="font-bold">Duração:</span> {turma.duracao} | <span className="font-bold">Valor:</span> {turma.valor}</p>
          </div>
        </div>
        <div className="flex flex-col justify-between ml-auto min-w-max">
          <p className="font-bold">Prof. Leonardo Lemos</p>
          <p className="ml-auto text-blue-400 cursor-pointer" onClick={() => expande(!expandido)}>{expandido ? "- menos informações" : "+ mais informações"}</p> 
        </div>
      </div>
    </>
  )
}