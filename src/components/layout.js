import React from "react"
import PropTypes from "prop-types"

import Footer from "./footer"
import Nav from "./nav"

const Layout = ({ children, hasNav, navHasShowcase, navHasAbout }) => {
  return (
    <>
      {hasNav ? (
        <Nav hasShowcase={navHasShowcase} hasAbout={navHasAbout} />
      ) : null}
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hasNav: PropTypes.bool,
  navHasShowcase: PropTypes.bool,
  navHasAbout: PropTypes.bool,
}

Layout.defaultProps = {
  hasNav: true,
  navHasShowcase: true,
  navHasAbout: true,
}

export default Layout
