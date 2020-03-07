import * as PropTypes from "prop-types"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class CursoTemplate extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
        cursosJson: PropTypes.object.isRequired,
    }),
  }
  render() {
    return (
      <Layout>
            <SEO title={this.props.pageContext.nome} />
            <h1>{this.props.pageContext.nome}</h1>
            <p>{this.props.pageContext.descricao}</p>
      </Layout>
    )
  }
}

export default CursoTemplate