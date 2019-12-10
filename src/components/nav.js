import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Nav = ({ hasShowcase, hasAbout }) => (
  <nav className="c-nav">
    <div className="l-container__content--L">
      <Link className="c-nav__home" to="/">
        <svg
          className="c-nav__home__arrow"
          width="48px"
          height="24px "
          viewBox="0 0 48 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect id="line" width="16" height="2" x="2" y="11.5" />
          <g id="beak">
            <rect
              width="8"
              height="2"
              x="0"
              y="0"
              transform="translate(13, 12.5) rotate(45) translate(-13, -12.5) translate(10, 7.5)"
            />
            <rect
              width="2"
              height="8"
              x="6"
              y="0"
              transform="translate(13, 12.5) rotate(45) translate(-13, -12.5) translate(10, 7.5)"
            />
          </g>
        </svg>
        <span className="c-nav__items__link">Froes.Design</span>
      </Link>
      <div className="c-nav__items">
        {hasShowcase ? (
          <Link to="/showcase" className="c-nav__items__link">
            Showcase
          </Link>
        ) : null}
        {hasAbout ? (
          <Link to="/about" className="c-nav__items__link">
            About
          </Link>
        ) : null}
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
