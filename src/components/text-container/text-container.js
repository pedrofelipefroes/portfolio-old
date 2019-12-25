import Fade from "react-reveal/Fade"
import PropTypes from "prop-types"
import React from "react"

import "./text-container.scss"

const TextContainer = ({ isHeader, text }) => {
  return (
    <div
      className={
        "l-container__content--S c-text-container" +
        (isHeader ? " c-text-container--is-header" : "")
      }
    >
      <Fade bottom>{text}</Fade>
    </div>
  )
}

TextContainer.propTypes = {
  isHeader: PropTypes.bool,
  text: PropTypes.node.isRequired,
}

export default TextContainer
