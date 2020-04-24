import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./professores.module.css"
import { graphql } from "gatsby"


const ProfessoresPage = ({data} : any) => {
  const professores = data.allProfessoresJson.edges;

  return  <Layout>
            <SEO title="Profesores" />
            <h1>Professores da Escola</h1>
            {professores.map(({node}: any) => 
              <Professor key={node.id} {...node}/>
              )}
          </Layout>
};


interface ProfessorProps {
  nome: string
  bio: string
}

const Professor = ({nome, bio}: ProfessorProps) => {
  return  <div className={styles.professorContainer}>
            <h2 className={styles.professorNome}>{nome}</h2>
            <div className={styles.professorFoto}>
              <img src="." alt=""/>
            </div>
            <p className={styles.professorBio}>{bio}</p>
          </div> 
}


export default ProfessoresPage;

export const query = graphql`
  query ProfessoresQuery {
    allProfessoresJson {
      edges {
        node {
          id
          nome
          bio
        }
      }
    }
  }
`