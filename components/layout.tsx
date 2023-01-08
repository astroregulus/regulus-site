import Cabecalho from './cabecalho'
import Rodape from './rodape'

export default function Layout({ children }) {
  return (
    <>
      <Cabecalho />
      <main>{children}</main>
      <Rodape />
    </>
  )
}
