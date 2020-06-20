import PropTypes from "prop-types"
import React from "react"

import Footer from "../footer/footer"
import Nav from "../nav/nav"

import "./layout.scss"

const Layout = ({ children, className, isOnDark, projectTitle }) => {
  return (
    <>
      <Nav isOnDark={isOnDark} projectTitle={projectTitle} />
      <main className={className ? `c-layout ${className}` : "c-layout"}>
        {children}
      </main>
      <Footer isOnDark={isOnDark} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isOnDark: PropTypes.bool,
  projectTitle: PropTypes.string,
}

Layout.defaultProps = {
  isOnDark: false,
}

export default Layout
