import React from "react"
import { Link } from "gatsby"

export default props => (
  <Link className="c-arrowed-link" to={props.to}>
    <span className="c-arrowed-link__label">{props.label}</span>
    <svg
      className="c-arrowed-link__arrow"
      width="48px"
      height="24px"
      viewBox="0 0 48 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect id="line" width="16" height="2" x="4" y="11.5" />
      <g id="beak" transform="translate(15, 12.5) rotate(45) translate(-15, -12.5) translate(11, 8.5)">
        <rect width="8" height="2" x="0" y="0" />
        <rect width="2" height="8" x="6" y="0" />
      </g>
    </svg>
  </Link>
)
