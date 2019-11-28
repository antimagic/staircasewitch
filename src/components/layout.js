/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./fontawesome"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>

        <div className="social-icons">
          <a href="https://twitter.com/staircasewitch" rel="me"><i className="fab fa-twitter"></i></a>
          <a href="https://www.artstation.com/staircasewitch" rel="me"><i className="cg cg-artstation"></i></a>
          <a href="https://instagram.com/staircasewitch" rel="me"><i className="fab fa-instagram"></i></a>
        </div>
        <footer>
          <p className="colophon">&copy; James Firkins { new Date().getFullYear() }</p>
        </footer>
        <link href="//fonts.googleapis.com/css?family=Source+Sans+Pro:400,700|Poly" rel="stylesheet" type="text/css"></link>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
