import PropTypes from "prop-types"
import React from "react"

import TextContainer from "../text-container/text-container"

import "./paragraph.scss"

const Paragraph = ({ children }) => {
  return (
    <TextContainer className="c-paragraph">
      <p>{children}</p>
    </TextContainer>
  )
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Paragraph
