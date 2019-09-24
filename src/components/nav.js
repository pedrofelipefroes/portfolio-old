import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import ArrowedLink from "./arrowedLink"

const Nav = ({ hasAboutLink }) => (
  <nav className="c-nav">
    <div className="l-container__content">
      <ArrowedLink label="Featured" isIconAfter={false} to="/" />
      <Link to="/showcase/" className="c-nav__item c-arrowed-link__label">
        Showcase
      </Link>
      {hasAboutLink ? (
        <Link to="/about/" className="c-nav__item c-arrowed-link__label">
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
