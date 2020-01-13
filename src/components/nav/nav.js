import PropTypes from "prop-types"
import React from "react"

import NavigationLink from "../navigation-link/navigation-link"

import "./nav.scss"

const Nav = ({ hasAbout, hasShowcase, isOnDark }) => (
  <nav className={isOnDark ? "c-nav c-nav--on-dark" : "c-nav"}>
    <div className="u-content-container--XL">
      <h4>
        <strong>
          <NavigationLink
            className="c-nav__link-to-home"
            to="/"
            label=".design"
          />
        </strong>
      </h4>
      <div className="c-nav__items">
        {hasShowcase ? (
          <h4>
            <NavigationLink
              className="c-nav__item"
              to="/showcase"
              label="Showcase"
            />
          </h4>
        ) : (
          <h4 className="c-nav__item c-nav__item--selected">Showcase</h4>
        )}
        {hasAbout ? (
          <h4>
            <NavigationLink className="c-nav__item" to="/about" label="About" />
          </h4>
        ) : (
          <h4 className="c-nav__item c-nav__item--selected">About</h4>
        )}
      </div>
    </div>
  </nav>
)

Nav.propTypes = {
  hasAbout: PropTypes.bool,
  hasShowcase: PropTypes.bool,
  isOnDark: PropTypes.bool,
}

Nav.defaultProps = {
  hasAbout: true,
  hasShowcase: true,
  isOnDark: false,
}

export default Nav
