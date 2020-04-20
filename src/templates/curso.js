import * as PropTypes from "prop-types"
import React from "react"
import Layout from "../components/layout"
import MiniCard from "../components/mini-card"
import SEO from "../components/seo"
import { graphql } from "gatsby"

export default function CursoTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark, allTurmasJson } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const turmas = allTurmasJson.edges;
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
        <div>
          <h2>Turmas</h2>
          <div style={{"display": "flex", "flex-wrap" : "wrap", "justify-content": "space-around"}}>
            {turmas.map(({node}) => {
                return <MiniCard  key={`${node.id}${node.date}`}
                                  title={node.nome}
                                  date={node.data} 
                                  teacher={node.prof} 
                                  time={node.horario} 
                                  id={node.curso_id}/>
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!, $curso_id: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
    allTurmasJson(filter: {curso_id: {eq: $curso_id}}) {
      edges {
        node {
          id
          curso_id
          nome
          horario
          prof
          data
        }
      }
    }
  }
`