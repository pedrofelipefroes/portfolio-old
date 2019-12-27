import PropTypes from "prop-types"
import React from "react"

import NavigationLink from "../navigation-link/navigation-link"

import "./nav.scss"

const Nav = ({ hasAbout, hasShowcase }) => (
  <nav className="c-nav">
    <div className="u-content-container--XL">
      <h4>
        <strong>
          <NavigationLink
            className="c-nav__link-to-home u-color-type"
            to="/"
            label=".design"
          />
        </strong>
      </h4>
      <div className="c-nav__items">
        {hasShowcase ? (
          <h4>
            <NavigationLink
              className="u-color-type-variant"
              to="/showcase"
              label="Showcase"
            />
          </h4>
        ) : null}
        {hasAbout ? (
          <h4>
            <NavigationLink
              className="u-color-type-variant"
              to="/about"
              label="About"
            />
          </h4>
        ) : null}
      </div>
    </div>
  </nav>
)

Nav.propTypes = {
  hasAbout: PropTypes.bool,
  hasShowcase: PropTypes.bool,
}

Nav.defaultProps = {
  hasAbout: true,
  hasShowcase: true,
}

export default Nav
