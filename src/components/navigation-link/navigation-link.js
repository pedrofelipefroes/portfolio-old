import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./navigation-link.scss"

const NavigationLink = ({ label, to }) => (
  <Link className="c-navigation-link highlight" to={to}>
    <span className="c-navigation-link__label">{label}</span>
    <svg
      className="c-navigation-link__arrow"
      width="88px"
      height="24px"
      viewBox="0 0 88 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="53" height="2" x="0" y="11.5" />
      <g>
        <rect
          width="9"
          height="2"
          x="0"
          y="0"
          transform="translate(47, 11.5) rotate(45) translate(-13, -12.5) translate(10, 7.5)"
        />
        <rect
          width="2"
          height="9"
          x="7.5"
          y="0"
          transform="translate(47, 11.5) rotate(45) translate(-13, -12.5) translate(10, 7.5)"
        />
      </g>
    </svg>
  </Link>
)

NavigationLink.propTypes = {
  label: PropTypes.string,
  to: PropTypes.string,
}

NavigationLink.defautProps = {
  label: `Label`,
  to: `/`,
}

export default NavigationLink
