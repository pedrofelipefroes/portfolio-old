import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const NavigationLink = ({ label, to }) => (
  <>
    <Link className="c-navigation-link" to={to}>
      <span className="c-navigation-link__label">{label}</span>
      <svg
        className="c-navigation-link__arrow"
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
    </Link>
  </>
)

NavigationLink.propTypes = {
  label: PropTypes.string,
  to: PropTypes.string,
}

NavigationLink.defautProps = {
  label: `Label`,
  to: ``,
}

export default NavigationLink
