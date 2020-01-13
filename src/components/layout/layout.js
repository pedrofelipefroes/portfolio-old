import PropTypes from "prop-types"
import React from "react"

import Footer from "../footer/footer"
import Nav from "../nav/nav"

import "./layout.scss"

const Layout = ({
  children,
  className,
  navHasAbout,
  navHasShowcase,
  navIsOnDark,
}) => {
  return (
    <>
      <Nav
        hasAbout={navHasAbout}
        hasShowcase={navHasShowcase}
        isOnDark={navIsOnDark}
      />
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
  navHasAbout: PropTypes.bool,
  navHasShowcase: PropTypes.bool,
  navIsOnDark: PropTypes.bool,
}

Layout.defaultProps = {
  navHasAbout: true,
  navHasShowcase: true,
  navIsOnDark: false,
}

export default Layout
