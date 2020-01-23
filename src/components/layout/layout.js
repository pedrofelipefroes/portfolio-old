import PropTypes from "prop-types"
import React from "react"

import Footer from "../footer/footer"
import Nav from "../nav/nav"

import "./layout.scss"
import CompactFooter from "../compact-footer/compact-footer"

const Layout = ({
  children,
  className,
  navHasAbout,
  navHasCompactFooter,
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
      {navHasCompactFooter ? <CompactFooter /> : <Footer />}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  navHasAbout: PropTypes.bool,
  navHasCompactFooter: PropTypes.bool,
  navHasShowcase: PropTypes.bool,
  navIsOnDark: PropTypes.bool,
}

Layout.defaultProps = {
  navHasAbout: true,
  navHasCompactFooter: false,
  navHasShowcase: true,
  navIsOnDark: false,
}

export default Layout
