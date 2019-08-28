import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ArrowedLink = ({ label, isIconAfter, isLinkExternal, to }) => (
  <>
    {isLinkExternal ? (
      <a className="c-arrowed-link c-arrowed-link--external" href={to}>
        <span className="c-arrowed-link__label">{label}</span>
        <svg
          className="c-arrowed-link__arrow"
          width="48px"
          height="24px"
          viewBox="0 0 48 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            id="line"
            className="c-arrowed-link--external"
            width="12"
            height="2"
            x="8"
            y="11.5"
          />
          <polygon
            fill-rule="nonzero"
            points="5 16 5 9 13 9 13 7 3 7 3 18 13 18 13 16"
          />
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
      </a>
    ) : (
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
    )}
  </>
)

ArrowedLink.propTypes = {
  label: PropTypes.string,
  isIconAfter: PropTypes.bool,
  isLinkExternal: PropTypes.bool,
  to: PropTypes.string,
}

ArrowedLink.defaultProps = {
  label: `Label`,
  isIconAfter: true,
  isLinkExternal: false,
  to: ``,
}

export default ArrowedLink
