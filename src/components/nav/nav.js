import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import ArrowedLink from "../arrowed-link/arrowedLink"

const Nav = ({ hasAboutLink }) => (
  <nav className="c-nav">
    <div className="l-container c-nav__container">
      <ArrowedLink label="Work" isIconAfter={false} to="/" />
      {hasAboutLink ? (
        <Link to="/about/" className="c-nav__item">
          About
        </Link>
      ) : null}
    </div>
  </nav>
)

Nav.propTypes = {
  hasAboutLink: PropTypes.bool,
}

Nav.defaultProps = {
  hasAboutLink: false,
}

export default Nav
