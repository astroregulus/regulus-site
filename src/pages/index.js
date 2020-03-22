import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {CardImage} from "../components/card-image"
import styles from "./index.module.css"

const estiloCards = {
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap"
};

const IndexPage = ({ data }) => {
  const images = data.allImageSharp.edges;
  return (
    <Layout>
      <SEO title="Home" />
      <div style={estiloCards}>
        <CardImage 
            text="Veja os workshops programados e garanta sua vaga!"
            title="Workshops"
            image={getImage(images, "class.png")}
            navigateTo="/cursos" />
          <CardImage 
            text="Veja nossas turmas com vagas abertas!"
            title="Cursos"
            image={getImage(images, "estudantes.png")}
            navigateTo="/cursos" />
          <CardImage 
            text="A Livraria da Regulus possui um dos maiores acervos de títulos sobre Astrologia, incluído muitos títulos esgotados e raros."
            title="Livraria"
            image={getImage(images, "livros.png")} />
          <CardImage 
            text="Confira nossa grade curricular!"
            title="Formação"
            image={getImage(images, "undraw_career_development_oqcb.png")}
            navigateTo="/formacao" />
      </div>
    
      <div className={styles.sessao}>
        <h2>Localização</h2>
        <p>Rua Estela, 515 cj.71 - Bl. E - próximo ao Metrô Paraíso</p>
        <iframe width="100%" height="300" frameBorder="0" style={{border: 0}} title="mapa" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJsWC2m5FZzpQRndvYvoxUM08&key=AIzaSyA9pQxGOAOAkZz5mu5kT0BFRghJ1Cqt478" allowFullScreen></iframe> 
        <p>São Paulo/SP | 04011-904</p>
      </div>
  </Layout>
)}

export default IndexPage

const getImage = (edges, src) => {
  const index = edges.findIndex( seila => seila.node.resize.originalName == src);
  return edges[index].node.resize.src;
}


export const query = graphql`
  query QueryLoka {
    allImageSharp {
      edges {
        node {
          resize(width: 300) {
            originalName
            src
          }
        }
      }
    }
  }
`
