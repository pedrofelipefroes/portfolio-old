import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ArrowedLink = ({ label, isIconAfter, to }) => (
  <Link className="c-arrowed-link" to={to}>
    <span className="c-arrowed-link__label">{label}</span>
    <svg
      className={
        isIconAfter
          ? "c-arrowed-link__arrow"
          : "c-arrowed-link__arrow c-arrowed-link__arrow--before"
      }
      width="48px"
      height="24px"
      viewBox="0 0 48 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect id="line" width="16" height="2" x="4" y="11.5" />
      <g id="beak">
        <rect
          width="8"
          height="2"
          x="0"
          y="0"
          transform="translate(15, 12.5) rotate(45) translate(-15, -12.5) translate(12, 7.5)"
        />
        <rect
          width="2"
          height="8"
          x="6"
          y="0"
          transform="translate(15, 12.5) rotate(45) translate(-15, -12.5) translate(12, 7.5)"
        />
      </g>
    </svg>
  </Link>
)

ArrowedLink.propTypes = {
  label: PropTypes.string,
  isIconAfter: PropTypes.bool,
  to: PropTypes.string,
}

ArrowedLink.defaultProps = {
  label: `Label`,
  isIconAfter: true,
  to: ``,
}

export default ArrowedLink
