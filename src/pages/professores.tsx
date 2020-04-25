import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./professores.module.css"
import { graphql } from "gatsby"
import { ProfessoresQueryQuery } from "../../graphql-types"

type Edges = ProfessoresQueryQuery['allFile']['edges'];

const getImage = (edges: Edges, photoFile?: string | null) : string => {
  const index = edges.findIndex( 
   ({node}: any) => `${node.name}${node.ext}` === photoFile);
  return index < 0 ? "" : edges[index].node.childImageSharp!.resize!.src!;
}

const ProfessoresPage = ({data} : {data: ProfessoresQueryQuery}) => {
  const professores = data.allProfessoresJson.edges;
  const fotos = data.allFile.edges;

  return  <Layout>
            <SEO title="Profesores" />
            <h1>Professores da Escola</h1>
            {professores.map(({node}) => 
              <Professor  key={node.id}
                          nome={node.nome!}
                          bio={node.bio!}
                          foto={getImage(fotos, node.foto)}/>
              )}
          </Layout>
};


interface ProfessorProps {
  nome: string
  bio: string
  foto: string
}

const Professor = ({nome, bio, foto}: ProfessorProps) => {
  return  <div className={styles.professorContainer}>
            <h2 className={styles.professorNome}>{nome}</h2>
            <div className={styles.professorFoto}>
              <img src={foto} alt=""/>
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
          foto
        }
      }
    }
    allFile(filter: {relativeDirectory: {eq: "professores"}, extension: {eq: "jpg"}}) {
      edges {
        node {
          childImageSharp {
            resize(width: 100) {
              src
            }
          }
          name
          ext
        }
      }
    }
  }
`



