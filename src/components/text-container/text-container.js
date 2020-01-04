import Fade from "react-reveal/Fade"
import PropTypes from "prop-types"
import React from "react"

import "./text-container.scss"

const TextContainer = ({ children, className, isHeader }) => {
  return (
    <div
      className={
        "u-content-container--L c-text-container" +
        (isHeader ? " c-text-container--is-header" : "") +
        (className ? ` ${className}` : "")
      }
    >
      <Fade bottom>{children}</Fade>
    </div>
  )
}

TextContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isHeader: PropTypes.bool,
}

export default TextContainer
