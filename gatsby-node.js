/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions


  const result = await graphql(`
      {
        allMarkdownRemark(
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `)

    const cursoTemplate = path.resolve(`src/templates/curso.js`)

    result.data.allMarkdownRemark.edges.forEach(edge => {
        // Gatsby uses Redux to manage its internal state.
        // Plugins and sites can use functions like "createPage"
        // to interact with Gatsby.
        createPage({
          // Each page is required to have a `path` as well
          // as a template component. The `context` is
          // optional but is often necessary so the template
          // can query data specific to each page.
          path: edge.node.frontmatter.path,
          component: slash(cursoTemplate),
          context: {
            curso_id: edge.node.frontmatter.path.replace("/cursos/","")
          },
        })
      })
}
