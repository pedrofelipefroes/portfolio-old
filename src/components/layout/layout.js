import React from "react"
import PropTypes from "prop-types"

import Footer from "../footer/footer"
import Nav from "../nav/nav"

const Layout = ({ children, hasNav, navHasAboutLink }) => {
  return (
    <>
      {hasNav ? <Nav hasAboutLink={navHasAboutLink} /> : null}
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hasNav: PropTypes.bool,
  navHasAboutLink: PropTypes.bool,
}

Layout.defaultProps = {
  hasNav: true,
  navHasAboutLink: true,
}

export default Layout
