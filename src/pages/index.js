import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Formacao from "../components/formacao"
import Localizacao from "../components/localizacao"
import Livraria from "../components/livraria"
import { Link } from "gatsby"
import styles from "./index.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.sessao}>
      <h2>Formação Astrológica</h2>
      <p>Concluindo a parte básica, escolha a melhor forma de estudar Astrologia, monte sua grade curricular. Atingindo a carga horária mínima, o aluno poderá solicitar seu certificado de Formação em Astrologia.Mesmo não tendo cursado os módulos iniciais na Regulus, poderá frequentar nossos cursos ou escolher determinado módulo ou especialização que desejar.Todos os cursos/módulos/workshop fazem parte do curso livre de Formação em Astrologia, somando horas para a obtenção do Certificado de Formação em Astrologia.</p>
      <Link to="/cursos" className={styles.botao}>Veja turmas abertas</Link>
    </div>
    <div className={styles.sessao}>
      <h2>Livraria</h2>
      <p>A Livraria da Regulus nasceu da necessidade de atender os alunos dos cursos de Astrologia. Hoje a Livraria física possui um dos maiores acervos de títulos sobre Astrologia, incluído muitos títulos esgotados e raros.
Trabalhamos com livros nacionais e importados.
Temos Tarôs nacionais e importados (US Games / Lo Scarabeo / etc)</p>
      <a href="http://www.livrariadaregulus.com.br" target="_blank" rel="noopener noreferrer" className={styles.botao}>Visite nossa livraria</a>
    </div>
    <Formacao />
    <div className={styles.sessao}>
      <h2>Localização</h2>
      <p>Rua Estela, 515 cj.71 - Bl. E - próximo ao Metrô Paraíso</p>
      <iframe width="100%" height="300" frameborder="0" style={{border: 0}} src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJsWC2m5FZzpQRndvYvoxUM08&key=AIzaSyA9pQxGOAOAkZz5mu5kT0BFRghJ1Cqt478" allowfullscreen></iframe> 
      <p>São Paulo/SP | 04011-904</p>
      <span>fone: (11)5549-2655 (14h~19h) | astrologia@regulus.com.br</span>
    </div>
  </Layout>
)

export default IndexPage
