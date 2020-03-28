import PropTypes from "prop-types"
import React from "react"

import Footer from "../footer/footer"
import Nav from "../nav/nav"

import "./layout.scss"
import CompactFooter from "../compact-footer/compact-footer"

const Layout = ({ children, className, navHasCompactFooter, navIsOnDark }) => {
  return (
    <>
      <Nav isOnDark={navIsOnDark} />
      <main className={className ? `c-layout ${className}` : "c-layout"}>
        {children}
      </main>
      {navHasCompactFooter ? <CompactFooter /> : <Footer />}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  navHasCompactFooter: PropTypes.bool,
  navIsOnDark: PropTypes.bool,
}

Layout.defaultProps = {
  navHasCompactFooter: false,
  navIsOnDark: false,
}

export default Layout
