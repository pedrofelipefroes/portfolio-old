//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import NavigationLink from "../navigation-link/navigationLink"

import "./nav.scss"

const Nav = ({ hasShowcase, hasAbout }) => (
  <nav className="c-nav">
    <div className="l-container__content--L">
      <small>
        <strong>
          <NavigationLink
            hasClass="c-nav__link-to-home u-color-type-variant"
            hasArrow
            hasReverseArrow
            to="/"
            label="FROES.design"
          />
        </strong>
      </small>
      <div className="c-nav__items">
        <small>
          <strong>
            {hasShowcase ? (
              <NavigationLink
                hasClass="u-color-type-variant"
                to="/showcase"
                label="Showcase"
              />
            ) : null}
            {hasAbout ? (
              <NavigationLink
                hasClass="u-color-type-variant"
                to="/about"
                label="About"
              />
            ) : null}
          </strong>
        </small>
      </div>
    </div>
  </nav>
)

Nav.propTypes = {
  hasShowcase: PropTypes.bool,
  hasAbout: PropTypes.bool,
}

Nav.defaultProps = {
  hasShowcase: true,
  hasAbout: true,
}

export default Nav
