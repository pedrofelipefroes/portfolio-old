import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./navigation-link.scss"

const NavigationLink = ({
  className,
  hasArrow,
  hasReverseArrow,
  label,
  to,
}) => (
  <Link
    className={
      "c-navigation-link" +
      (hasArrow
        ? hasReverseArrow
          ? " c-navigation-link--reverse-arrow"
          : ""
        : " c-navigation-link--no-arrow") +
      " " +
      className
    }
    to={to}
  >
    <span className="c-navigation-link__label">{label}</span>
    {hasArrow ? (
      <svg
        className="c-navigation-link__arrow"
        width="80px"
        height="24px "
        viewBox="0 0 80 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="3" x="2" y="12" />
        <g>
          <rect
            width="12"
            height="3"
            x="0"
            y="0"
            transform="translate(35, 10) rotate(45) translate(-13, -12.5) translate(10, 7.5)"
          />
          <rect
            width="3"
            height="12"
            x="10"
            y="0"
            transform="translate(35, 10) rotate(45) translate(-13, -12.5) translate(10, 7.5)"
          />
        </g>
      </svg>
    ) : null}
  </Link>
)

NavigationLink.propTypes = {
  className: PropTypes.string,
  hasArrow: PropTypes.bool,
  hasReverseArrow: PropTypes.bool,
  label: PropTypes.string,
  to: PropTypes.string,
}

NavigationLink.defautProps = {
  hasArrow: false,
  hasReverseArrow: false,
  label: `Label`,
  to: `/`,
}

export default NavigationLink
