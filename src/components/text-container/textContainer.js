import PropTypes from "prop-types"
import React from "react"

import "./text-container.scss"

const TextContainer = ({ children, isHeader, isHighlighted }) => {
  return (
    <div
      className={
        "l-container__content--S c-text-container" +
        (isHeader ? " c-text-container--header" : "") +
        (isHighlighted ? " c-text-container--highlighted" : "")
      }
    >
      {children}
    </div>
  )
}

TextContainer.propTypes = {
  children: PropTypes.node.isRequired,
  isHighlighted: PropTypes.bool,
}

export default TextContainer
