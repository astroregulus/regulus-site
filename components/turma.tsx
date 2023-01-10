type Turma = {
  titulo: string
  subtitulo: string
  inicio: string
  horario: string
  duracao: string
  valor: string
}
export default function Turma(turma: Turma) {
  return (
    <div className="bg-blue-600 p-2 flex flex-col">
         <h2 className="font-roboto text-2xl font-bold">{turma.titulo}</h2>
         <p className="font-roboto text-base">{turma.subtitulo}</p>
         <div className="mt-8">
           <p><span className="font-bold">Início:</span> {turma.inicio} das {turma.horario}</p>
           <p><span className="font-bold">Duração:</span> {turma.duracao}</p>
           <p><span className="font-bold">Valor:</span> {turma.valor}</p>
         </div>
         <p className="ml-auto text-blue-400">+ mais informações</p> 
       </div>
  )
}