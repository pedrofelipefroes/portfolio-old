import PropTypes from "prop-types"
import React from "react"

import TextContainer from "../text-container/text-container"

import "./heading-2.scss"

const Heading2 = ({ children }) => {
  return (
    <TextContainer isHeader className="c-heading-2">
      <h2>{children}</h2>
    </TextContainer>
  )
}

Heading2.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Heading2
