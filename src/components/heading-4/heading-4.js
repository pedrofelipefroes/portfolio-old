import PropTypes from "prop-types"
import React from "react"

import TextContainer from "../text-container/text-container"

import "./heading-4.scss"

const Heading4 = ({ children }) => {
  return (
    <TextContainer isHeader className="c-heading-4">
      <h4 className="u-color-type-variant">{children}</h4>
    </TextContainer>
  )
}

Heading4.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Heading4
