import PropTypes from "prop-types"
import React from "react"

import TextContainer from "../text-container/text-container"

import "./heading-3.scss"

const Heading3 = ({ children }) => {
  return (
    <TextContainer className="c-heading-3">
      <h3>{children}</h3>
    </TextContainer>
  )
}

Heading3.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Heading3
