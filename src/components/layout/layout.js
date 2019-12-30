import PropTypes from "prop-types"
import React from "react"

import Footer from "../footer/footer"
import Nav from "../nav/nav"

import "./layout.scss"

const Layout = ({
  children,
  className,
  hasNav,
  navHasShowcase,
  navHasAbout,
}) => {
  return (
    <>
      {hasNav ? (
        <Nav hasShowcase={navHasShowcase} hasAbout={navHasAbout} />
      ) : null}
      <main className={className ? `c-layout ${className}` : "c-layout"}>
        {children}
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
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
