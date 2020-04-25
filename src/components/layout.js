/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { fab, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCalendarAlt, faClock, faChalkboardTeacher, faArrowCircleRight, faBars , faTimes, faQuoteRight} from '@fortawesome/free-solid-svg-icons'

import Header from "./header"
import "./layout.css"
import "@fortawesome/fontawesome-svg-core/styles.css"
import Footer from "./footer"

config.autoAddCss = false
library.add(fab, faInstagram, faCalendarAlt, faClock, faChalkboardTeacher, faArrowCircleRight, faBars, faTimes, faQuoteRight);



const Layout = ({ children }) => {
  
  return (
    <>
      <Header siteTitle={"REGULUS"} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
